// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var button;
    $('#form_login').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(e) {
        return $('#login_message').html(e);
      });
      return false;
    });
    if ($('.list_buttons').size()) {
      $('.list_buttons').buttonset();
    }
    if ($('.button_set').size()) {
      $('.button_set').buttonset();
    }
    if ($('.button').size()) {
      $('.button').button();
    }
    $('.del').click(function() {
      if (!confirm('Seguro que quieres borrar este registro?')) {
        return false;
      }
    });
    return button = $('#upload_button .ui-button-text');
  });

}).call(this);