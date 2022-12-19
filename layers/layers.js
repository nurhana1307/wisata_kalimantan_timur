var wms_layers = [];

var format_qgis_0 = new ol.format.GeoJSON();
var features_qgis_0 = format_qgis_0.readFeatures(json_qgis_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qgis_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qgis_0.addFeatures(features_qgis_0);
var lyr_qgis_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_qgis_0, 
                style: style_qgis_0,
                interactive: true,
                title: '<img src="styles/legend/qgis_0.png" /> qgis'
            });

lyr_qgis_0.setVisible(true);
var layersList = [lyr_qgis_0];
lyr_qgis_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'placepageU': 'placepageU', 'link': 'link', });
lyr_qgis_0.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'placepageU': '', 'link': '', });
lyr_qgis_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'placepageU': 'no label', 'link': 'no label', });
lyr_qgis_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});