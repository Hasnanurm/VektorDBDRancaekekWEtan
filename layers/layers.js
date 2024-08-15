var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2 = new ol.format.GeoJSON();
var features_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2 = format_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2.readFeatures(json_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2.addFeatures(features_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2);
var lyr_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2, 
                style: style_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2,
                popuplayertitle: "ADM DESA RANCAEKEK WETAN — administrasidesa_ar_25k",
                interactive: true,
                title: '<img src="styles/legend/ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2.png" /> ADM DESA RANCAEKEK WETAN — administrasidesa_ar_25k'
            });
var format_UTMVEKTORwaypoints_3 = new ol.format.GeoJSON();
var features_UTMVEKTORwaypoints_3 = format_UTMVEKTORwaypoints_3.readFeatures(json_UTMVEKTORwaypoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMVEKTORwaypoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMVEKTORwaypoints_3.addFeatures(features_UTMVEKTORwaypoints_3);
var lyr_UTMVEKTORwaypoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMVEKTORwaypoints_3, 
                style: style_UTMVEKTORwaypoints_3,
                popuplayertitle: "UTM VEKTOR — waypoints",
                interactive: true,
                title: '<img src="styles/legend/UTMVEKTORwaypoints_3.png" /> UTM VEKTOR — waypoints'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2.setVisible(true);lyr_UTMVEKTORwaypoints_3.setVisible(true);lyr_Buffered_4.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_OpenStreetMap_1,lyr_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2,lyr_UTMVEKTORwaypoints_3,lyr_Buffered_4];
lyr_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_UTMVEKTORwaypoints_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_UTMVEKTORwaypoints_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADMDESARANCAEKEKWETANadministrasidesa_ar_25k_2.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_UTMVEKTORwaypoints_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});