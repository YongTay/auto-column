# auto-column
element-ui table 列宽自适应宽度

## 使用方式
### 1.引入
```javascript
import AutoColumn from 'auto-column'
Vue.use(AutoColumn)
```
### 2.使用
```vue
<el-table v-auto-column :data="list" >
    <el-table-column prop="date"label="日期"><el-table-column>
    // ...
</el-table>
```
