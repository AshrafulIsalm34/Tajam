$(function () {
    
    "use strict"
    
    var windows = $(window)
    
    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
    });

    //    team slider one
    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        speed: 300,
        
        
         responsive: [
             {
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                 }
    },
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
    },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                 }
    }
  
  ]
    });

    //    team sllider two
    $('.slider_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.team_slider_img',

    });

    $('.team_slider_img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider_text',
        prevArrow: '#team-arrow-left',
        nextArrow: '#team-arrow-right',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        autoplay: true,
        
        responsive: [
             {
                 breakpoint: 768,
                 settings: {
                     slidesToShow: 4,
                     slidesToScroll: 1,
                 }
    },
             {
                 breakpoint: 576,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1
                 }
    },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//    }
  
  ]

    });


    //    veno box

    $('.venobox').venobox({
        border: '10px',

    });

    //stiky top menu js
    windows.on('scroll', function () {
        var scrolling = $(this).scrollTop();
        var stiky = $('.stiky-top-menu');

        if (scrolling >= 200) {
            stiky.addClass('nav-bg');
        } else {
            stiky.removeClass('nav-bg');
        }
    })

    // Smooths scrolling
  $('body').scrollspy({target: ".navbar", offset: 50});
    
    
    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
    
//    wow js
    new WOW().init();
    
//    video js
    jQuery("#bgndVideo").YTPlayer();
    
//    typed js start
    
//    $(".typed").typed({
//		strings: ["Web Designer.", "Web Developer.", "Full Stack Developer.","Graphic Designer"],
//		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
//		stringsElement: null,
//		// typing speed
//		typeSpeed: 50,
//		// time before typing starts
//		startDelay: 1500,
//		// backspacing speed
//		backSpeed: 10,
//		// time before backspacing
//		backDelay: 500,
//		// loop
//		loop: true,
//		// false = infinite
//		loopCount: 100,
//		// show cursor
//		showCursor: false,
//		// character for cursor
//		cursorChar: "|",
//		// attribute to type (null == text)
//		attr: null,
//		// either html or text
//		contentType: 'html',
//		// call when done callback function
//		callback: function() {},
//		// starting callback function before each string
//		preStringTyped: function() {},
//		//callback for every typed string
//		onStringTyped: function() {},
//		// callback for reset
//		resetCallback: function() {}
//	});
//    
//    
    
//    partical js start
    
    
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 380,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    


    /* ---- stats.js config ---- */
    
    
//    scroll to top start
    
  var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow56.png" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();

    
//    preloder js start
    windows.on('load', function(){
        $(".preloder").delay(1500).fadeOut(500);
    })
//    preloder js finish
    
});