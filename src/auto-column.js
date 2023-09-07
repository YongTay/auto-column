
let resetWidth
let binded = false

function autoWidth(el, binding, vnode, oldnode) {
    const instance = vnode.componentInstance
    const columns = instance.columns
    const data = instance.data
    const oldData = vnode.oldValue
    if (data === oldData) {
        return
    }
    const resetWidth0 = () => {
        const widthMap = getWidth(el, data, columns)
        const headerInstance = getElHeader(instance)
        const haderColumn = getHeaderColumn(headerInstance)
        const headerWidthMap = getHeaderWidth(headerInstance, haderColumn)
        const vw = getVW(instance)
        setWidth(instance, columns, widthMap, headerWidthMap, vw)
    }
    resetWidth0()
    if (!binded) {
        binded = true
        resetWidth = resetWidth0
        window.addEventListener('resize', resetWidth)
    }
}

// 查找表头
function getElHeader(instance) {
    const children = instance.$children
    for (let i = children.length - 1; i > 0; i--) {
        const ch = children[i]
        const el = ch.$el
        const classList = [...el.classList]
        if (classList.includes('el-table__header')) {
            return ch
        }
    }
}

// 根据表头获取宽度
function getHeaderWidth(instance, haderColumn) {
    const ele = document.createElement('span')
    ele.setAttribute('class', 'cell')
    instance.$el.appendChild(ele)
    const widthMap = {}
    haderColumn.forEach(header => {
        const label = header.label || ''
        ele.innerText = label
        const prop = header.id
        widthMap[prop] = ele.offsetWidth
    })
    instance.$el.removeChild(ele)
    return widthMap
}

// 获取表格外的可视宽度
function getVW(instance) {
    const parent = instance.$parent
    const vw = parent.$el.offsetWidth
    if (vw === 0) {
        return getVW(parent)
    }
    return vw
}

// 自动设置宽度
function setWidth(instance, columns, widthMap, headerWidthMap, vw) {
    let sum = 0
    // 收集表头节点
    const classListMap = {}
    instance.$children.forEach(ch => {
        if ('columnId' in ch) {
            if (ch.$el.classList.length > 0) {
                classListMap[ch.columnId] = [...ch.$el.classList]
            }
        }
    })

    const targetWidthMap = {}
    for (const id in widthMap) {
        targetWidthMap[id] = widthMap[id] > headerWidthMap[id] ? widthMap[id] : headerWidthMap[id]
        targetWidthMap[id] = targetWidthMap[id] + 1 // +1 解决宽度不足问题
        sum += targetWidthMap[id]
    }


    let span = 0
    if (sum < vw) {
        span = (vw - sum) / columns.length
    }

    columns.forEach(col => {
        const prop = col.id
        const classList = classListMap[col.id]
        // 过滤掉ignore的列
        if (classList && classList.includes('v-auto-ignore')) {
        } else {
            const width = targetWidthMap[prop]
            instance.$set(col, 'width', width + span) // 加一个像素点解决宽度不足导致出现“.”的问题
        }
    })

    instance.$nextTick(() => {
        instance.doLayout()
    })

}

// 获取表头
function getHeaderColumn(instance) {
    return instance.columns
}

// 获取数据的宽度
function getWidth(instance, list, columns) {
    const parent = instance
    const ele = document.createElement('span')
    ele.setAttribute('class', 'cell')
    parent.appendChild(ele)
    const widthMap = {}
    columns.forEach(column => {
        const prop = column.property
        // 获取当前属性下最大的宽度
        let width = 0
        list.forEach(row => {
            const val = row[prop] || ''
            ele.innerText = val
            const w = ele.offsetWidth
            width = w > width ? w : width
        })
        widthMap[column.id] = width
    })
    parent.removeChild(ele)
    return widthMap
}




const autoColumn = {
    bind(el, binding, vnode, oldnode) {
        binded = false
        autoWidth(el, binding, vnode, oldnode)
    },
    update(el, binding, vnode, oldnode) {
        autoWidth(el, binding, vnode, oldnode)
    },
    unbind() {
        window.removeEventListener('resize', resetWidth)
    }
}

export default autoColumn
