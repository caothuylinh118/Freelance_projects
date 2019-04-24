/*!
 * Google Maps customization v1.0
 * Created by Ciprian Lazar.
 * Working on Untitled theme
 */
if ($("#gmap_canvas").length > 0)
    {
        //** JavaScript for Google Maps **//
    var ourLocation = new google.maps.LatLng(document.getElementById("ourLocationX").innerHTML, document.getElementById("ourLocationY").innerHTML, 0); //new google.maps.LatLng(41.447390, -72.843868);
        var mapStyleLight = [{ stylers: [{ lightness: 30 }] }, { elementType: 'labels', stylers: [{ lightness: 30 }] }];
        var mapStyleNormal = [{ stylers: [{ lightness: 0 }] }, { elementType: 'labels', stylers: [{ lightness: 0 }] }];
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        var map;
        var isMobile = (window.orientation !== undefined);
        var markerIcon = function () {
            if ((' ' + document.body.className + ' ').indexOf(' style2 ') > -1)
                return 'img/gmapMarker2.png';
            else
                return 'img/gmapMarker.png';
        };
        var routingColor = function () {
            try { //** Get color with jQery
                return $('.menu_trigger').css("background-color");
            }
            catch(err){ //** Get color without jQuery
                if ((' ' + document.body.className + ' ').indexOf(' style2 ') > -1)
                    return '#009edb';
                else
                    return '#ed2437';
            }
    
        };
        function init_map() {
            //** Set the options for the map
            var myOptions = {
                zoom: 17,
                center: ourLocation,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                noClear: true,
                scrollwheel: true,
                mapTypeControl: true,
                streetViewControl: false,
                panControl: isMobile,
                panControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER },
                draggable: !isMobile,
                scaleControl: false,
                overviewMapControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.LARGE,
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                //** Make the map lighter
                styles: mapStyleLight
            };
            //** Define the map
            map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
            directionsDisplay = new google.maps.DirectionsRenderer({ polylineOptions: { strokeColor: routingColor() } });//({ suppressMarkers: true });
            //** Add the marker with our location
            marker = new google.maps.Marker({
                map: map,
                position: ourLocation,
                icon: markerIcon(),
                animation: google.maps.Animation.BOUNCE
            });
            //** Set the info window on click
            infowindow = new google.maps.InfoWindow({
                content: document.getElementById('gMapPopup').innerHTML
            });
            //** Set event listeners for the click on the marker and info window
            google.maps.event.addListener(infowindow, "closeclick", function () { map.setOptions({ styles: mapStyleLight }); });
            google.maps.event.addListener(marker, "click", function () { infowindow.open(map, marker); map.setOptions({ styles: mapStyleNormal }); });
        }
        //** Load the map
        google.maps.event.addDomListener(window, 'load', init_map);

       
    };