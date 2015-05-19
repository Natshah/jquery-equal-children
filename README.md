# JQuery equal children 1.0


You will be able to use it as for :
-

      $(window).resize(function() {
        var window_width = window.innerWidth || $(window).width();

        // xs : Extra small devices - Phones (<768px) .
        if (window_width < 768 ) {
          $('.menu').equalChildrensHeight("a");
        }
        else {
          $('.menu').equalChildrensAutoHeight("a");
        }

      });
      $(window).resize();
