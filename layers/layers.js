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

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Seismicstations_2 = new ol.format.GeoJSON();
var features_Seismicstations_2 = format_Seismicstations_2.readFeatures(json_Seismicstations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seismicstations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seismicstations_2.addFeatures(features_Seismicstations_2);cluster_Seismicstations_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Seismicstations_2
});
var lyr_Seismicstations_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Seismicstations_2, 
                style: style_Seismicstations_2,
                popuplayertitle: "Seismic stations",
                interactive: true,
                title: '<img src="styles/legend/Seismicstations_2.png" /> Seismic stations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Seismicstations_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_Seismicstations_2];
lyr_Seismicstations_2.set('fieldAliases', {'fid': 'fid', '#Network': 'Network', 'Station': 'Station', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation': 'Elevation (m)', 'Sitename': 'Sitename', 'StartTime': 'StartTime', 'EndTime': 'EndTime', 'rgi_id': 'RGI', 'o1region': 'o1region', 'o2region': 'o2region', 'glims_id': 'glims_id', 'anlys_id': 'anlys_id', 'subm_id': 'subm_id', 'src_date': 'src_date', 'cenlon': 'cenlon', 'cenlat': 'cenlat', 'utm_zone': 'utm_zone', 'area_km2': 'area_km2', 'primeclass': 'primeclass', 'conn_lvl': 'conn_lvl', 'surge_type': 'surge_type', 'term_type': 'term_type', 'glac_name': 'Glacier\'s name', 'is_rgi6': 'is_rgi6', 'termlon': 'termlon', 'termlat': 'termlat', 'zmin_m': 'zmin_m', 'zmax_m': 'zmax_m', 'zmed_m': 'zmed_m', 'zmean_m': 'zmean_m', 'slope_deg': 'slope_deg', 'aspect_deg': 'aspect_deg', 'aspect_sec': 'aspect_sec', 'dem_source': 'dem_source', 'lmax_m': 'lmax_m', 'layer': 'layer', 'path': 'path', 'picture': 'picture', });
lyr_Seismicstations_2.set('fieldImages', {'fid': 'Hidden', '#Network': 'TextEdit', 'Station': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Elevation': 'TextEdit', 'Sitename': 'TextEdit', 'StartTime': 'DateTime', 'EndTime': 'DateTime', 'rgi_id': 'TextEdit', 'o1region': 'TextEdit', 'o2region': 'TextEdit', 'glims_id': 'TextEdit', 'anlys_id': 'TextEdit', 'subm_id': 'TextEdit', 'src_date': 'TextEdit', 'cenlon': 'TextEdit', 'cenlat': 'TextEdit', 'utm_zone': 'TextEdit', 'area_km2': 'TextEdit', 'primeclass': 'TextEdit', 'conn_lvl': 'TextEdit', 'surge_type': 'TextEdit', 'term_type': 'TextEdit', 'glac_name': 'TextEdit', 'is_rgi6': 'TextEdit', 'termlon': 'TextEdit', 'termlat': 'TextEdit', 'zmin_m': 'TextEdit', 'zmax_m': 'TextEdit', 'zmed_m': 'TextEdit', 'zmean_m': 'TextEdit', 'slope_deg': 'TextEdit', 'aspect_deg': 'TextEdit', 'aspect_sec': 'TextEdit', 'dem_source': 'TextEdit', 'lmax_m': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'picture': 'TextEdit', });
lyr_Seismicstations_2.set('fieldLabels', {'#Network': 'header label - visible with data', 'Station': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Elevation': 'no label', 'Sitename': 'no label', 'StartTime': 'no label', 'EndTime': 'no label', 'rgi_id': 'no label', 'o1region': 'no label', 'o2region': 'no label', 'glims_id': 'no label', 'anlys_id': 'no label', 'subm_id': 'no label', 'src_date': 'no label', 'cenlon': 'no label', 'cenlat': 'no label', 'utm_zone': 'no label', 'area_km2': 'no label', 'primeclass': 'no label', 'conn_lvl': 'no label', 'surge_type': 'no label', 'term_type': 'no label', 'glac_name': 'no label', 'is_rgi6': 'no label', 'termlon': 'no label', 'termlat': 'no label', 'zmin_m': 'no label', 'zmax_m': 'no label', 'zmed_m': 'no label', 'zmean_m': 'no label', 'slope_deg': 'no label', 'aspect_deg': 'no label', 'aspect_sec': 'no label', 'dem_source': 'no label', 'lmax_m': 'no label', 'layer': 'no label', 'path': 'no label', 'picture': 'inline label - always visible', });
lyr_Seismicstations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});