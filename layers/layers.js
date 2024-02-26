var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SeismicstationGlacier_1 = new ol.format.GeoJSON();
var features_SeismicstationGlacier_1 = format_SeismicstationGlacier_1.readFeatures(json_SeismicstationGlacier_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SeismicstationGlacier_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeismicstationGlacier_1.addFeatures(features_SeismicstationGlacier_1);
var lyr_SeismicstationGlacier_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SeismicstationGlacier_1, 
                style: style_SeismicstationGlacier_1,
                popuplayertitle: "Seismic station - Glacier",
                interactive: true,
                title: '<img src="styles/legend/SeismicstationGlacier_1.png" /> Seismic station - Glacier'
            });

lyr_OSMStandard_0.setVisible(true);lyr_SeismicstationGlacier_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_SeismicstationGlacier_1];
lyr_SeismicstationGlacier_1.set('fieldAliases', {'fid': 'fid', '#Network': '#Network', 'Station': 'Station', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation': 'Elevation', 'Sitename': 'Sitename', 'StartTime': 'StartTime', 'EndTime': 'EndTime', 'rgi_id': 'rgi_id', 'o1region': 'o1region', 'o2region': 'o2region', 'glims_id': 'glims_id', 'anlys_id': 'anlys_id', 'subm_id': 'subm_id', 'src_date': 'src_date', 'cenlon': 'cenlon', 'cenlat': 'cenlat', 'utm_zone': 'utm_zone', 'area_km2': 'area_km2', 'primeclass': 'primeclass', 'conn_lvl': 'conn_lvl', 'surge_type': 'surge_type', 'term_type': 'term_type', 'glac_name': 'glac_name', 'is_rgi6': 'is_rgi6', 'termlon': 'termlon', 'termlat': 'termlat', 'zmin_m': 'zmin_m', 'zmax_m': 'zmax_m', 'zmed_m': 'zmed_m', 'zmean_m': 'zmean_m', 'slope_deg': 'slope_deg', 'aspect_deg': 'aspect_deg', 'aspect_sec': 'aspect_sec', 'dem_source': 'dem_source', 'lmax_m': 'lmax_m', 'layer': 'layer', 'path': 'path', });
lyr_SeismicstationGlacier_1.set('fieldImages', {'fid': 'TextEdit', '#Network': 'TextEdit', 'Station': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Elevation': 'TextEdit', 'Sitename': 'TextEdit', 'StartTime': 'DateTime', 'EndTime': 'DateTime', 'rgi_id': 'TextEdit', 'o1region': 'TextEdit', 'o2region': 'TextEdit', 'glims_id': 'TextEdit', 'anlys_id': 'TextEdit', 'subm_id': 'TextEdit', 'src_date': 'TextEdit', 'cenlon': 'TextEdit', 'cenlat': 'TextEdit', 'utm_zone': 'TextEdit', 'area_km2': 'TextEdit', 'primeclass': 'TextEdit', 'conn_lvl': 'TextEdit', 'surge_type': 'TextEdit', 'term_type': 'TextEdit', 'glac_name': 'TextEdit', 'is_rgi6': 'TextEdit', 'termlon': 'TextEdit', 'termlat': 'TextEdit', 'zmin_m': 'TextEdit', 'zmax_m': 'TextEdit', 'zmed_m': 'TextEdit', 'zmean_m': 'TextEdit', 'slope_deg': 'TextEdit', 'aspect_deg': 'TextEdit', 'aspect_sec': 'TextEdit', 'dem_source': 'TextEdit', 'lmax_m': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SeismicstationGlacier_1.set('fieldLabels', {'fid': 'hidden field', '#Network': 'header label - always visible', 'Station': 'header label - always visible', 'Latitude': 'hidden field', 'Longitude': 'no label', 'Elevation': 'no label', 'Sitename': 'hidden field', 'StartTime': 'hidden field', 'EndTime': 'hidden field', 'rgi_id': 'hidden field', 'o1region': 'hidden field', 'o2region': 'hidden field', 'glims_id': 'hidden field', 'anlys_id': 'hidden field', 'subm_id': 'hidden field', 'src_date': 'hidden field', 'cenlon': 'hidden field', 'cenlat': 'hidden field', 'utm_zone': 'hidden field', 'area_km2': 'hidden field', 'primeclass': 'hidden field', 'conn_lvl': 'hidden field', 'surge_type': 'hidden field', 'term_type': 'hidden field', 'glac_name': 'header label - always visible', 'is_rgi6': 'hidden field', 'termlon': 'hidden field', 'termlat': 'hidden field', 'zmin_m': 'hidden field', 'zmax_m': 'hidden field', 'zmed_m': 'hidden field', 'zmean_m': 'hidden field', 'slope_deg': 'hidden field', 'aspect_deg': 'hidden field', 'aspect_sec': 'hidden field', 'dem_source': 'hidden field', 'lmax_m': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_SeismicstationGlacier_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});