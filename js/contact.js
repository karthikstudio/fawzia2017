
$(function () {
    $('form').on('submit', function (e) {

      e.preventDefault();

      $.ajax({
        type: 'post',
        url: '../mail/contact_me.php',
        data: $('form').serialize(),
        success: function () {
          $("#sendmessage").show().delay(4000).fadeOut();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          $("#errormessage").show().delay(4000).fadeOut();
        }
      });
    });
});
