/**
 *  JQuery equal children 1.0
 *  
 *  https://github.com/Natshah/jquery-equal-children
 *
 */

(function($){

    $.fn.equalChildrenHeight = function(childName, px) {
      $(this).each(function(){
        var currentTallest = 0;
        $(this).children().each(function(i){
          if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
        });
        if (!px && Number.prototype.pxToEm) {
          currentTallest = currentTallest.pxToEm(); 
        } 
        if ($.browser.msie && $.browser.version == 6.0) {
         $(this).children().children(childName).css({'height': currentTallest}); 
        }
        $(this).children().children(childName).css({'min-height': currentTallest}); 
      });
      return this;
    };

    $.fn.equalChildrenAutoHeight = function(childName, px) {
      $(this).each(function(){
        if ($.browser.msie && $.browser.version == 6.0) {
         $(this).children().children(childName).css({'height': ''}); 
        }
        $(this).children().children(childName).css({'min-height': ''}); 
      });
      return this;
    };

})(jQuery);
