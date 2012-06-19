(function( $ ) {
  $.uiObservable = function() {
    $('.ui-observable').delegate('', 'click mouseover', 
      function(e){console.log(e.type);}
    );

  }
})( jQuery );