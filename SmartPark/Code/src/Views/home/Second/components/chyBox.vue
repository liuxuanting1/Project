<template>
    <div class="chyBox">
        <div class="lease_title">{{title}}</div>        
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import chyCharts from '../../components/v3echarts.vue'

export default defineComponent({
    props:{
        title:String,
    },
    setup(props,ctx){


    }

})

</script>

<style lang="scss" scoped>
.chyBox {
    width: 100%;
    height:210px;
    // border: 1px solid red;
    padding: 5px;
    // background-color: #192333;
}
</style>