var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMCIMAHI_1 = new ol.format.GeoJSON();
var features_ADMCIMAHI_1 = format_ADMCIMAHI_1.readFeatures(json_ADMCIMAHI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMCIMAHI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMCIMAHI_1.addFeatures(features_ADMCIMAHI_1);
var lyr_ADMCIMAHI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMCIMAHI_1, 
                style: style_ADMCIMAHI_1,
                popuplayertitle: "ADM CIMAHI",
                interactive: true,
                title: '<img src="styles/legend/ADMCIMAHI_1.png" /> ADM CIMAHI'
            });
var format_ADMCIMAHIcopy_2 = new ol.format.GeoJSON();
var features_ADMCIMAHIcopy_2 = format_ADMCIMAHIcopy_2.readFeatures(json_ADMCIMAHIcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMCIMAHIcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMCIMAHIcopy_2.addFeatures(features_ADMCIMAHIcopy_2);
var lyr_ADMCIMAHIcopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMCIMAHIcopy_2, 
                style: style_ADMCIMAHIcopy_2,
                popuplayertitle: "ADM CIMAHI copy",
                interactive: true,
                title: '<img src="styles/legend/ADMCIMAHIcopy_2.png" /> ADM CIMAHI copy'
            });
var format_SUNGAI_LN_25K_3 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_3 = format_SUNGAI_LN_25K_3.readFeatures(json_SUNGAI_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_3.addFeatures(features_SUNGAI_LN_25K_3);
var lyr_SUNGAI_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_3, 
                style: style_SUNGAI_LN_25K_3,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_3.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_4 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_4 = format_JALAN_LN_25K_4.readFeatures(json_JALAN_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_4.addFeatures(features_JALAN_LN_25K_4);
var lyr_JALAN_LN_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_4, 
                style: style_JALAN_LN_25K_4,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_4.png" /> JALAN_LN_25K'
            });
var format_Buffered_5 = new ol.format.GeoJSON();
var features_Buffered_5 = format_Buffered_5.readFeatures(json_Buffered_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_5.addFeatures(features_Buffered_5);
var lyr_Buffered_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_5, 
                style: style_Buffered_5,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_5.png" /> Buffered'
            });
var format_UTMvectoraedes_6 = new ol.format.GeoJSON();
var features_UTMvectoraedes_6 = format_UTMvectoraedes_6.readFeatures(json_UTMvectoraedes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMvectoraedes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMvectoraedes_6.addFeatures(features_UTMvectoraedes_6);
var lyr_UTMvectoraedes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMvectoraedes_6, 
                style: style_UTMvectoraedes_6,
                popuplayertitle: "UTM vector aedes",
                interactive: true,
                title: '<img src="styles/legend/UTMvectoraedes_6.png" /> UTM vector aedes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMCIMAHI_1.setVisible(true);lyr_ADMCIMAHIcopy_2.setVisible(true);lyr_SUNGAI_LN_25K_3.setVisible(true);lyr_JALAN_LN_25K_4.setVisible(true);lyr_Buffered_5.setVisible(true);lyr_UTMvectoraedes_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMCIMAHI_1,lyr_ADMCIMAHIcopy_2,lyr_SUNGAI_LN_25K_3,lyr_JALAN_LN_25K_4,lyr_Buffered_5,lyr_UTMvectoraedes_6];
lyr_ADMCIMAHI_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_ADMCIMAHIcopy_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_SUNGAI_LN_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_25K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Buffered_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMvectoraedes_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_ADMCIMAHI_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_ADMCIMAHIcopy_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_SUNGAI_LN_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_25K_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Buffered_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_UTMvectoraedes_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_ADMCIMAHI_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_ADMCIMAHIcopy_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_SUNGAI_LN_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_25K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Buffered_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMvectoraedes_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', });
lyr_UTMvectoraedes_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});