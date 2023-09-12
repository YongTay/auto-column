import AutoColumn from "./auto-column"

export default function (Vue, options) {
    AutoColumn.options = options
    Vue.directive('auto-column', AutoColumn)
}
