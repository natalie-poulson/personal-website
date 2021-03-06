console.log('hi');


// Smooth Scroll
if (window.matchMedia("(max-width: 400px)").matches) {
//Responsive 
  $('.nav-link').click (function(){
    var thisTarget = $(this).attr('href');
    var targetOffSet = $(thisTarget).offset().top;
  
    $('html, body').animate({scrollTop:targetOffSet}, 600);
  })
} else  {
//Default
  $('.defaultnav ul li a').click(function() {
    var thisTarget = $(this).attr('href');
    var targetOffSet = $(thisTarget).offset().top;
  
    $('html, body').animate({scrollTop:targetOffSet}, 600);
  });
};

//Sticky Nav
if (window.matchMedia("(max-width: 400px)").matches) {
//Responsive 
  var stickyNavTop = $('.navbar').offset().top;

  var stickyNav = function (){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('.navbar').addClass('sticky');
      $('.name').addClass('sticky-name');
    } else {
      $('.navbar').removeClass('sticky');
      $('.navbar').removeClass('sticky-name');
    }
  };
  $(window).scroll(function () {
    stickyNav();
  });
  } else {
//Default 
    var stickyNavTop = $('.defaultnav').offset().top;

    var stickyNav = function (){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > stickyNavTop) {
        $('.defaultnav').addClass('sticky');
        $('.name').addClass('sticky-name');
      } else {
        $('.defaultnav').removeClass('sticky');
        $('.name').removeClass('sticky-name');
      }
    };
    $(window).scroll(function () {
      stickyNav();
    });
};

//Fading In and Out Quotes
var quotes = ['<p>Natalie\'s work ethic is contagious and lively, and she always inspires co-workers to do/understand/create MORE. I would ADORE to work with her again in any position, anywhere and anytime</p><p> - Jen Kurtzman, Supervisor, New Day Youth & Family Services Safe Home</p>', ' <p>Until my last day I remember looking forward to shifts with Natalie because I could comfortably expect that, no matter how large the scale of production nor how numerous the issues needing to be solved before shift’s end, that she would coordinate and negotiate with me seamlessly.</p><p>-Cora Leigh Moss, Firebrand Artisan Breads</p> ', '<p>I cannot overstate Natalie\'s qualities that I work to emulate: consideration, critical awareness, social intelligence, and practical perseverance.</p><p>-Cora Leigh Moss, Firebrand Artisan Breads' ];
var counter = 0;
var elem = document.getElementById('quotes');

function change () {
$(elem).fadeTo(5000, 0, function () {
  this.innerHTML = quotes[counter];
  counter = ++counter % quotes.length;
  $(this).fadeTo(10000, 1, change)
})
}
change(quotes);


//Error Messages on Form
$('button').click(function (e){
    e.preventDefault();

    $('form input, form textarea').each(function() {
      var $currentField = $(this);
      var fieldType = $(this).attr('type');

      if ($currentField.val() === '') {
        $currentField.addClass('error');
        $currentField.siblings('.error-message').fadeIn();
        return;
      }

      if (fieldType === 'email'){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValidEmailAddress = re.test($currentField.val());
        if (!isValidEmailAddress) {
          $currentField.addClass('error');
          $currentField.siblings('error-message').fadeIn();
          return;
        }
      }
      $currentField.removeClass('error');
      $currentField.siblings('.error-message').hide();
    });
});


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
