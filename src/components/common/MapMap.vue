<template>
    <div class="mapview-pannel">
        <div id="mapview"></div>
        <div id="basemaptoggle"></div>
        <div id="scalebar"></div>
        <div id="zoom"></div>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';

const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};
export default {
    name: 'MapMap',
    components: {},
    mounted: function () {
        // console.log(this.$store.state._defaultView);
        this._createMapView();
    },
    methods: {
        async _createMapView() {
            const [Map, MapView, Basemap, TileLayer, BasemapToggle, ScaleBar, Zoom] = await loadModules(
                [
                    'esri/Map',
                    'esri/views/MapView',
                    'esri/Basemap',
                    'esri/layers/TileLayer',
                    'esri/widgets/BasemapToggle',
                    'esri/widgets/ScaleBar',
                    'esri/widgets/Zoom',
                ],
                options,
            );

            let basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title: 'Blue',
                    }),
                ],
                title: 'basemap',
                id: 'basemap',
            });

            const map = new Map({
                basemap,
            });

            const view = new MapView({
                container: 'mapview',
                map: map,
                zoom: 14,
                center: [113.828185, 34.824426],
            });

            const basemaptoggle = new BasemapToggle({
                view: view,
                nextBasemap: 'hybrid',
                container: 'basemaptoggle',
            });
            view.ui.add(basemaptoggle);

            const scalebar = new ScaleBar({
                view: view,
                unit: 'metric',
                container: 'scalebar',
            });
            view.ui.add(scalebar);

            const zoom = new Zoom({
                view: view,
                container: 'zoom',
            });
            view.ui.add(zoom);

            view.ui.components = [];
            // this.$store.commit('_setDefaultView', view);
            // console.log(this.$store.state._defaultView);
        },
    },
};
</script>

<style>
.mapview-pannel,
#mapview {
    position: relative;
    width: 100%;
    height: 100%;
}
#basemaptoggle {
    position: absolute;
    right: 15px;
    bottom: 15px;
}
#scalebar {
    position: absolute;
    left: 15px;
    bottom: 15px;
}
#zoom {
    position: absolute;
    right: 15px;
    bottom: 111px;
}
</style>
