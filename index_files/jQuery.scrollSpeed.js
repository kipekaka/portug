var parallaxClose = false;
var             root = 0;
(function($) {
   
   scrollSpeed = function(step, speed, easing) {
       
       var $document = $(document),
           $window = $(window),
           $body = $('html, body'),
           option = easing || 'default',

           scroll = false,
           scrollY,
           scrollX,
           view;
           
       if (window.navigator.msPointerEnabled)
       
           return false;
           
       $('.bodyTemplate,.bodyTemplates').on('mousewheel DOMMouseScroll', function(e) {
       	console.log('parallaxClose='+parallaxClose)
       	if (parallaxClose) {        	
       	return false;
       	}
           var deltaY = e.originalEvent.wheelDeltaY,
               detail = e.originalEvent.detail;
               scrollY = $document.height() > $window.height();
               scrollX = $document.width() > $window.width();
               scroll = true;
           
           if (scrollY) {
               
               view = $window.height();
                   
               if (deltaY < 0 || detail > 0)
           
                   root = (root + view) >= $document.height() ? root : root += step;
               
               if (deltaY > 0 || detail < 0)
           
                   root = root <= 0 ? 0 : root -= step;
               console.log('height scroll'+root)
               $body.stop().animate({
           
                   scrollTop: root
               
               }, speed, option, function() {
           
                   scroll = false;
               
               });
           }
           
           if (scrollX) {
           // disable scroll x 
               return 
               view = $window.width();
                   
               if (deltaY < 0 || detail > 0)
           
                   root = (root + view) >= $document.width() ? root : root += step;
               
               if (deltaY > 0 || detail < 0)
           
                   root = root <= 0 ? 0 : root -= step;
               
               $body.stop().animate({
           
                   scrollLeft: root
               
               }, speed, option, function() {
           
                   scroll = false;
               
               });
           }
           
           return false;
           
       }).on('scroll', function() {
           
           if (scrollY && !scroll) root = $window.scrollTop();
          // console.log('root'+root)
           //if (scrollX && !scroll) root = $window.scrollLeft();
           
       }).on('resize', function() {
           
           if (scrollY && !scroll) view = $window.height();
           //if (scrollX && !scroll) view = $window.width();
           
       });
       $(window).scroll(function(){
       	if (scrollY && !scroll) root = $window.scrollTop();
           console.log('root'+root)
       })
   };
   
   jQuery.easing.default = function (x,t,b,c,d) {
   
       return -c * ((t=t/d-1)*t*t*t - 1) + b;
   };
   
})(jQuery);