console.log('hi');

//Sticky Nav
  var stickyNavTop = $('nav').offset().top;

  var stickyNav = function (){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('nav').addClass('sticky');
      $('.name').addClass('sticky-name');
    } else {
      $('nav').removeClass('sticky');
      $('.name').addClass('sticky-name');
    }
  };
  $(window).scroll(function () {
    stickyNav();
  });


// Smooth Scroll
$('nav ul li a').click(function() {
  $('html, body').animate({scrollTop:$(this.hash).offset().top-1},700);
  return false;
});

//Error Messages on Form
$('button').click(function (e){
    e.preventDefault();

    if ($('input').val().length < 1 && $('textarea').val().length < 1) {
      console.log('gotit')
     // $('.error-message').show();
    }
});

//quotes fade in and out//
// var quoteArray = ["hi", "bye", "whatup"];

// function rotateQuotes (quote) {
//   for (var i = 0; i < quoteArray.length; i++) {
//     console.log(quoteArray[i]);
//     var words = document.getElementById('quotes');

//     words.append(`${quoteArray[i]}`);
//   }
// };

// rotateQuotes(quoteArray);



// Google Maps API
function initMap () {
    var oakland = {lat:37.804363, lng:-122.271111}
    var options = {
        zoom:11,
        center:oakland,
        styles: [
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
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
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
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
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
                  "color": "#c9c9c9"
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
          ]
}

    var map = new google.maps.Map (document.getElementById('map'), options);
    var image = "/styles/images/femalesymbol.png";
    var marker = new google.maps.Marker({
            position:oakland,
            map: map,
            icon: image });
}

initMap();
// End Google Maps API
