<template>
    <div id="onemap-page">
        <MapMap />
        <MapTools />
    </div>
</template>

<script>
import MapMap from '@/components/common/MapMap';
import MapTools from '@/components/MapTools';

export default {
    name: 'OneMap',
    components: { MapMap, MapTools },
};
</script>

<style>
#onemap-page {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
