## 双向数据绑定实验
<template>
  <div>
    <input v-model="value">
    <span>{{value}}</span>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      value:"双向绑定内容"
    }
  }
}
</script>

```html
<template>
  <div>
    <input v-model="value">
    <span>{{value}}</span>
  </div>  
</template>
<script>
  export default {
    data(){
      return {
        value:"双向绑定内容"
      }
    }
  }
</script>
```
