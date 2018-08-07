
$(document).ready(function () {

  $('.email-signup').on('blur', 'input[type="email"]', function () {
    if (validate($(this).val())) {
      $(this).parent().removeClass('error').addClass('valid');
      $(this).parent().find('button').removeAttr('disabled');
    } else {
      $(this).parent().removeClass('valid').addClass('error');
      $(this).parent().find('button').attr('disabled', 'disabled');
    }
  });

  $('.email-signup').on('keyup', '.error input[type="email"]', function () {
    if (validate($(this).val())) {
      $(this).parent().removeClass('error').addClass('valid');
      $(this).parent().find('button').removeAttr('disabled');
    } else {
      $(this).parent().removeClass('valid').addClass('error');
      $(this).parent().find('button').attr('disabled', 'disabled');
    }
  });
});

function validate(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
//# sourceMappingURL=form.js.map
