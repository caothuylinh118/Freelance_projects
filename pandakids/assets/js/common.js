(function() {
  $(function() {
    var toogleMenu = $(".toogleMenu");
      var toogleBtn = $(".btn-menu");
      toogleMenu.hide();
      toogleBtn.click(function(e){
        e.preventDefault();
        var $this = $(this);
        
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp('slow');
            $('body').removeClass('stop-scrolling')
        } else {
          toogleMenu.removeClass('show');
          toogleMenu.slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle('slow');
          $('body').addClass('stop-scrolling')
        }
      });
  });

}).call(this);
