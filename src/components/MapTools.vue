<template>
    <div class="maptools">
        <span class="maptools-item">行政区导航</span>
        <span class="maptools-item">距离测量</span>
        <span class="maptools-item">面积测量</span>
        <span class="maptools-item">清屏</span>
    </div>
</template>

<script>
export default {
    name: 'DataVisual',
    components: {},
};
</script>

<style>
.maptools {
    position: absolute;
    height: 30px;
    background-color: #fff;
    padding: 0 10px;
    top: 15px;
    right: 15px;
}
.maptools-item {
    color: #000;
    line-height: 30px;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
}
</style>
