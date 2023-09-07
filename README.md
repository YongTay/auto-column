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
    <el-table-column prop="date"label="日期"></el-table-column>
    // ...
</el-table>
```
### 3.添加需要忽略的列
> 在指定的列上添加 `class="v-auto-ignore"` 该类名，该列将不会被自动适配
```vue
<el-table v-auto-column :data="list" >
    <el-table-column prop="date"label="日期"></el-table-column>
    <el-table-column prop="description"label="描述" class="v-auto-ignore"></el-table-column>
      
    // ...
</el-table>
```

