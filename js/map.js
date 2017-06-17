var altura = window.innerHeight;
var ancho = window.innerWidth;
  $(".map").css({ 'height': altura - 100 + "px" });

  if (ancho < 500) {
      $(".map").css({ 'height': altura - 120 + "px" });
  }

  L.mapbox.accessToken = 'pk.eyJ1IjoiZ2VueWxlb24iLCJhIjoiY2owdTJ3MDJtMDVxNzJ3bzY4bnhtaXR3byJ9.qNzcqNAoPWDGwyMicS7F8Q';
  // var info = document.getElementById('info');
  var mapTooltipsJS = L.mapbox.map('map-tooltips-js', 'mapbox.streets')
      .setView([-10.279, -76.663], 6);
  var filters = document.getElementById('filters');

  var myLayer = L.mapbox.featureLayer().addTo(mapTooltipsJS);

  var geoJson = {
      type: 'FeatureCollection',
      features: [{
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [-79.0300, -8.1160]
          },
          properties: {
              title: 'ORGANIZACIONES SAWETO PERÚ',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo nesciunt temporibus sapiente sed laudantium repellendus aspernatur itaque incidunt cumque autem deserunt vitae fugit, quos, exercitationem cupiditate ipsum, magnam minus amet quas possimus minima sit. Illo aut atque veniam id nobis magnam earum corporis iste eligendi dolorem. Ratione, possimus suscipit.</p>',
              image: 'images/img-mapa.png',
              'pdf_ficha': './static/images/armando-prado.pdf',
              'pdf_mapa': './static/images/armando-prado.pdf',
              icon: {
                  className: 'my-icon icon-dc', // class name to style
                  html: '<a href="#first-modal" class="tinymodal-modal"><i class="fa fa-map-marker" aria-hidden="true" style="color:#3F7B17;font-size: 42px;"></i></a>', // add content inside the marker
                  iconSize: null // size of icon, use null to set the size in CSS
              }
          }
      }, {
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [-73.2458372, -3.7489983]
          },
          properties: {
              title: 'ORGANIZACIONES SAWETO PERÚ',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo nesciunt temporibus sapiente sed laudantium repellendus aspernatur itaque incidunt cumque autem deserunt vitae fugit, quos, exercitationem cupiditate ipsum, magnam minus amet quas possimus minima sit. Illo aut atque veniam id nobis magnam earum corporis iste eligendi dolorem. Ratione, possimus suscipit.</p>',
              image: 'images/img-mapa.png',
              'pdf_ficha': './static/images/armando-prado.pdf',
              'pdf_mapa': './static/images/armando-prado.pdf',
              icon: {
                  className: 'my-icon icon-dc', // class name to style
                  html: '<a href="#first-modal" class="tinymodal-modal"><i class="fa fa-map-marker" aria-hidden="true" style="color:#3F7B17;font-size: 42px;"></i></a>', // add content inside the marker
                  iconSize: null // size of icon, use null to set the size in CSS
              }
          }
      }, {
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [-77.0282, -12.0432]
          },
          properties: {
              title: 'Edgar Timoteo Noriega Ascue (28)',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo nesciunt temporibus sapiente sed laudantium repellendus aspernatur itaque incidunt cumque autem deserunt vitae fugit, quos, exercitationem cupiditate ipsum, magnam minus amet quas possimus minima sit. Illo aut atque veniam id nobis magnam earum corporis iste eligendi dolorem. Ratione, possimus suscipit.</p>',
              image: 'images/img-mapa.png',
              'pdf_ficha': './static/images/armando-prado.pdf',
              'pdf_mapa': './static/images/armando-prado.pdf',
              icon: {
                  className: 'my-icon icon-dc', // class name to style
                  html: '<a href="#first-modal" class="tinymodal-modal"><i class="fa fa-map-marker" aria-hidden="true" style="color:#3F7B17;font-size: 42px;"></i></a>', // add content inside the marker
                  iconSize: null // size of icon, use null to set the size in CSS
              }
          }
      }, {
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [-71.9713, -13.5214]
          },
          properties: {
              title: 'Teodosio Huamán Toledo (15)',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo nesciunt temporibus sapiente sed laudantium repellendus aspernatur itaque incidunt cumque autem deserunt vitae fugit, quos, exercitationem cupiditate ipsum, magnam minus amet quas possimus minima sit. Illo aut atque veniam id nobis magnam earum corporis iste eligendi dolorem. Ratione, possimus suscipit.</p>',
              image: 'images/img-mapa.png',
              'pdf_ficha': './static/images/armando-prado.pdf',
              'pdf_mapa': './static/images/armando-prado.pdf',
              icon: {
                  className: 'my-icon icon-dc', // class name to style
                  html: '<a href="#first-modal" class="tinymodal-modal"><i class="fa fa-map-marker" aria-hidden="true" style="color:#3F7B17;font-size: 42px;"></i></a>', // add content inside the marker
                  iconSize: null // size of icon, use null to set the size in CSS
              }
          }
      }, {
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [-77.2451, -5.7597]
          },
          properties: {
              title: 'Juan Ranulfo Castro Rojas (37)',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo nesciunt temporibus sapiente sed laudantium repellendus aspernatur itaque incidunt cumque autem deserunt vitae fugit, quos, exercitationem cupiditate ipsum, magnam minus amet quas possimus minima sit. Illo aut atque veniam id nobis magnam earum corporis iste eligendi dolorem. Ratione, possimus suscipit.</p>',
              image: 'images/img-mapa.png',
              'pdf_ficha': './static/images/armando-prado.pdf',
              'pdf_mapa': './static/images/armando-prado.pdf',
              icon: {
                  className: 'my-icon icon-dc', // class name to style
                  html: '<a href="#first-modal" class="tinymodal-modal"><i class="fa fa-map-marker" aria-hidden="true" style="color:#3F7B17;font-size: 42px;"></i></a>', // add content inside the marker
                  iconSize: null // size of icon, use null to set the size in CSS
              }
          }
      }, {
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [-74.22299, -13.16881]
          },
          properties: {
              title: 'Armando Prado Gutiérrez (16)',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo nesciunt temporibus sapiente sed laudantium repellendus aspernatur itaque incidunt cumque autem deserunt vitae fugit, quos, exercitationem cupiditate ipsum, magnam minus amet quas possimus minima sit. Illo aut atque veniam id nobis magnam earum corporis iste eligendi dolorem. Ratione, possimus suscipit.</p>',
              image: 'images/img-mapa.png',
              'pdf_ficha': './static/images/armando-prado.pdf',
              'pdf_mapa': './static/images/armando-prado.pdf',
              icon: {
                  className: 'my-icon icon-dc', // class name to style
                  html: '<a href="#first-modal" class="tinymodal-modal"><i class="fa fa-map-marker" aria-hidden="true" style="color:#3F7B17;font-size: 42px;"></i></a>', // add content inside the marker
                  iconSize: null // size of icon, use null to set the size in CSS
              }
          }
      },
      {
          type: 'Feature',
          geometry: {
              type: 'Point',
              coordinates: [-71.0074, -17.2025]
          },
          properties: {
              title: 'Sol Cuya (16)',
              description: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quo nesciunt temporibus sapiente sed laudantium repellendus aspernatur itaque incidunt cumque autem deserunt vitae fugit, quos, exercitationem cupiditate ipsum, magnam minus amet quas possimus minima sit. Illo aut atque veniam id nobis magnam earum corporis iste eligendi dolorem. Ratione, possimus suscipit.</p>',
              image: 'images/img-mapa.png',
              'pdf_ficha': './static/images/armando-prado.pdf',
              'pdf_mapa': './static/images/armando-prado.pdf',
              icon: {
                  className: 'my-icon icon-dc', // class name to style
                  html: '<a href="#first-modal" class="tinymodal-modal"><i class="fa fa-map-marker" aria-hidden="true" style="color:#3F7B17;font-size: 42px;"></i></a>', // add content inside the marker
                  iconSize: null // size of icon, use null to set the size in CSS
              }
          }
      }]
    }

    myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;
    marker.setIcon(L.divIcon(feature.properties.icon));
});

    myLayer.setGeoJSON(geoJson);

    myLayer.on('click', function(e) {
    // Force the popup closed.
    e.layer.closePopup();
    var feature = e.layer.feature;
    // var content = '<div><strong>' + feature.properties.title + '</strong>' +
    //   '<p>' + feature.properties.description + '</p></div>' + '<img src="' + feature.properties.image + '" alt="">';
    // info.innerHTML = content;

    document.getElementById("nombre").innerHTML = feature.properties.title
    document.getElementById("description").innerHTML = feature.properties.description
    document.getElementById("image").innerHTML = "<img class='foto-on img-responsive center-block' src='" + feature.properties.image + "'/>"
    document.getElementById("pdf_ficha").innerHTML = "<a href=" + feature.properties.pdf_ficha + " class='download'><i class='fa fa-download' aria-hidden='true'></i>Descargar ficha</a>"
    document.getElementById("pdf_mapa").innerHTML = "<a href=" + feature.properties.pdf_mapa + " class='download'><i class='fa fa-download' aria-hidden='true'></i>Descargar ficha</a>"

    });

    var links = document.querySelectorAll('a.tinymodal-modal');
    for (var i = 0; links.length > i; i++) {
        links[i].addEventListener("click", function(event) { // callback
            event.preventDefault();
            var element = this.getAttribute("href");
            tinyModal.openModal(element, function() {
                console.log('opened by <a>');
            });
        });
    }



    // mapTooltipsJS.on('move', empty);

    // Trigger empty contents when the script
    // has loaded on the page.
//     empty();
//
//     function empty() {
//     info.innerHTML = '';
// }
