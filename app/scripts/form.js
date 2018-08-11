var query = Modernizr.mq('(max-width: 768px)');

$(document).ready(function(){

    if(!query){
        $('.email-signup').find('button').attr('disabled','disabled');
    }
    
    $('.email-signup').on('blur', 'input[type="email"]', function () {
        emailField(this)
    });
  
    $('.email-signup').on('keyup', '.error input[type="email"]', function () {
        emailField(this);
    });

  
});

function emailField(that){
    if (validate($(that).val())) {
        $(that).parent().removeClass('error').addClass('valid');
        if(!query){
            $(that).parent().find('button').removeAttr('disabled');
        }
    } else {
        $(that).parent().removeClass('valid').addClass('error');
        if(!query){
            $(that).parent().find('button').attr('disabled','disabled');
        }
    }
}

function validate(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
