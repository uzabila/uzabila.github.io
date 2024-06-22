// Google Maps API Lazy Load AFTERSCRIPTS
// 1 START loadJS

/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
(function( w ){
  var loadJS = function( src, cb ){
    "use strict";
    var ref = w.document.getElementsByTagName( "script" )[ 0 ];
    var script = w.document.createElement( "script" );
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore( script, ref );
    if (cb && typeof(cb) === "function") {
      script.onload = cb;
    }
    return script;
  };
  // commonjs
  if( typeof module !== "undefined" ){
    module.exports = loadJS;
  }
  else {
    w.loadJS = loadJS;
  }
}( typeof global !== "undefined" ? global : this ));

// ===============================================
// 2 START IntersectionObserver
// ===============================================
    
    /* W3C Intersection Observer Polyfill https://github.com/w3c/IntersectionObserver  */
(function(e,f){function m(a){this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||l();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect,b=b.width*b.height;this.intersectionRatio=a?b/a:this.isIntersecting?1:0}function c(a,b){b=b||{};if("function"!=typeof a)throw Error("callback must be a function");if(b.root&&1!=b.root.nodeType)throw Error("root must be an Element");
this._checkForIntersections=u(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT);this._callback=a;this._observationTargets=[];this._queuedEntries=[];this._rootMarginValues=this._parseRootMargin(b.rootMargin);this.thresholds=this._initThresholds(b.threshold);this.root=b.root||null;this.rootMargin=this._rootMarginValues.map(function(a){return a.value+a.unit}).join(" ")}function u(a,b){var d=null;return function(){d||(d=setTimeout(function(){a();d=null},b))}}function q(a,b,d,c){"function"==
typeof a.addEventListener?a.addEventListener(b,d,c||!1):"function"==typeof a.attachEvent&&a.attachEvent("on"+b,d)}function r(a,b,d,c){"function"==typeof a.removeEventListener?a.removeEventListener(b,d,c||!1):"function"==typeof a.detatchEvent&&a.detatchEvent("on"+b,d)}function n(a){try{var b=a.getBoundingClientRect()}catch(d){}if(!b)return l();b.width&&b.height||(b={top:b.top,right:b.right,bottom:b.bottom,left:b.left,width:b.right-b.left,height:b.bottom-b.top});return b}function l(){return{top:0,bottom:0,
left:0,right:0,width:0,height:0}}function t(a,b){for(;b;){if(b==a)return!0;b=p(b)}return!1}function p(a){return(a=a.parentNode)&&11==a.nodeType&&a.host?a.host:a}if("IntersectionObserver"in e&&"IntersectionObserverEntry"in e&&"intersectionRatio"in e.IntersectionObserverEntry.prototype)"isIntersecting"in e.IntersectionObserverEntry.prototype||Object.defineProperty(e.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}});else{var g=[];c.prototype.THROTTLE_TIMEOUT=
100;c.prototype.POLL_INTERVAL=null;c.prototype.USE_MUTATION_OBSERVER=!0;c.prototype.observe=function(a){if(!this._observationTargets.some(function(b){return b.element==a})){if(!a||1!=a.nodeType)throw Error("target must be an Element");this._registerInstance();this._observationTargets.push({element:a,entry:null});this._monitorIntersections();this._checkForIntersections()}};c.prototype.unobserve=function(a){this._observationTargets=this._observationTargets.filter(function(b){return b.element!=a});this._observationTargets.length||
(this._unmonitorIntersections(),this._unregisterInstance())};c.prototype.disconnect=function(){this._observationTargets=[];this._unmonitorIntersections();this._unregisterInstance()};c.prototype.takeRecords=function(){var a=this._queuedEntries.slice();this._queuedEntries=[];return a};c.prototype._initThresholds=function(a){a=a||[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(a,d,c){if("number"!=typeof a||isNaN(a)||0>a||1<a)throw Error("threshold must be a number between 0 and 1 inclusively");
return a!==c[d-1]})};c.prototype._parseRootMargin=function(a){a=(a||"0px").split(/\s+/).map(function(a){a=/^(-?\d*\.?\d+)(px|%)$/.exec(a);if(!a)throw Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(a[1]),unit:a[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};c.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,
this.POLL_INTERVAL):(q(e,"resize",this._checkForIntersections,!0),q(f,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in e&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(f,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))};c.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,
r(e,"resize",this._checkForIntersections,!0),r(f,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))};c.prototype._checkForIntersections=function(){var a=this._rootIsInDom(),b=a?this._getRootRect():l();this._observationTargets.forEach(function(d){var c=d.element,h=n(c),f=this._rootContainsTarget(c),k=d.entry,g=a&&f&&this._computeTargetAndRootIntersection(c,b);d=d.entry=new m({time:e.performance&&performance.now&&performance.now(),target:c,
boundingClientRect:h,rootBounds:b,intersectionRect:g});k?a&&f?this._hasCrossedThreshold(k,d)&&this._queuedEntries.push(d):k&&k.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)},this);this._queuedEntries.length&&this._callback(this.takeRecords(),this)};c.prototype._computeTargetAndRootIntersection=function(a,b){if("none"!=e.getComputedStyle(a).display){var d=n(a);a=p(a);for(var c=!1;!c;){var h=null,g=1==a.nodeType?e.getComputedStyle(a):{};if("none"==g.display)return;a==this.root||
a==f?(c=!0,h=b):a!=f.body&&a!=f.documentElement&&"visible"!=g.overflow&&(h=n(a));if(h){var g=Math.max(h.top,d.top),k=Math.min(h.bottom,d.bottom),l=Math.max(h.left,d.left),d=Math.min(h.right,d.right),h=d-l,m=k-g,d=0<=h&&0<=m&&{top:g,bottom:k,left:l,right:d,width:h,height:m};if(!d)break}a=p(a)}return d}};c.prototype._getRootRect=function(){if(this.root)var a=n(this.root);else{a=f.documentElement;var b=f.body;a={top:0,left:0,right:a.clientWidth||b.clientWidth,width:a.clientWidth||b.clientWidth,bottom:a.clientHeight||
b.clientHeight,height:a.clientHeight||b.clientHeight}}return this._expandRectByRootMargin(a)};c.prototype._expandRectByRootMargin=function(a){var b=this._rootMarginValues.map(function(b,c){return"px"==b.unit?b.value:b.value*(c%2?a.width:a.height)/100}),b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3]};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};c.prototype._hasCrossedThreshold=function(a,b){a=a&&a.isIntersecting?a.intersectionRatio||0:-1;b=b.isIntersecting?b.intersectionRatio||
0:-1;if(a!==b)for(var c=0;c<this.thresholds.length;c++){var e=this.thresholds[c];if(e==a||e==b||e<a!==e<b)return!0}};c.prototype._rootIsInDom=function(){return!this.root||t(f,this.root)};c.prototype._rootContainsTarget=function(a){return t(this.root||f,a)};c.prototype._registerInstance=function(){0>g.indexOf(this)&&g.push(this)};c.prototype._unregisterInstance=function(){var a=g.indexOf(this);-1!=a&&g.splice(a,1)};e.IntersectionObserver=c;e.IntersectionObserverEntry=m}})(window,document);



            var styleText = [
            {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
            },
            {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
            },
            {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
            },
            {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
            },
            {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              },
              {
                "saturation": 55
              },
              {
                "lightness": 20
              },
              {
                "visibility": "off"
              },
              {
                "weight": 6
              }
            ]
            },
            {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#bdbdbd"
              },
              {
                "lightness": 20
              },
              {
                "visibility": "on"
              },
              {
                "weight": 4.5
              }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
            },
            {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
            },
            {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              },
              {
                "visibility": "off"
              }
            ]
            },
            {
            "featureType": "road",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
            },
            {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
            },
            {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
            },
            {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
            },
            {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            },
            {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
            },
            {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
            },
            {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"//c9c9c9
              }
            ]
            },
            {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
            }
            ];


// Google Maps API Lazy Load SDStudio ;)
// START

function google_maps_init() {


              // Declare new style
              var styledMap = new google.maps.StyledMapType(styleText, {
                name: "gutallini"
              });

  'use strict'

  var gutallini = {lat: 55.700787, lng: 37.632591}



  var markerElement = document.getElementById('marker')
  var mapElement = document.getElementById('map')

  var map = new google.maps.Map(mapElement, {

                scrollwheel: !1,
                draggable: !0,
                zoomControl: !0,
                mapTypeControl: !1,
                //streetViewControl: !1,
    zoom: 14,
    center: gutallini,
    markers: []
  })
              // Setup skin for the map
              map.mapTypes.set('gutallini_style', styledMap);
              map.setMapTypeId('gutallini_style');

  var markerIcon = {
        url:'./img/marker.png',
        scaledSize: new google.maps.Size(75, 103),
        origin: new google.maps.Point(0, 0),
      }
  var marker = new google.maps.Marker({
    position: gutallini,
    map: map,
    icon: markerIcon,
    animation: google.maps.Animation.DROP
  })
  
  map.markers.push(marker);
  var infowindow = new google.maps.InfoWindow({
    content: markerElement.innerHTML
  })
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  })
  markerElement.style.opacity = 1

}

function google_maps_lazyload(api_key) {
  'use strict'

  if (api_key) {
    var options = {
      rootMargin: '100px',
      threshold: 0
    }

    var observer = new IntersectionObserver(
      function(entries, self) {
        var isIntersecting = typeof entries[0].isIntersecting === 'boolean' ? entries[0].isIntersecting : entries[0].intersectionRatio > 0
        if (isIntersecting) {
          var mapsJS = document.createElement('script')
          mapsJS.src = 'https://maps.googleapis.com/maps/api/js?callback=google_maps_init&key=' + api_key
          document.getElementsByTagName('head')[0].appendChild(mapsJS)
          self.unobserve(map)
        }
      },
      options
    )

    observer.observe(map)
  }
}

google_maps_lazyload("AIzaSyB7ft0N1VoWIsUwzWbLUYqiXUj_uZzjJVA");