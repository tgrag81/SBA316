$('.input').on('focus blur', function() {
    moveLabel($(this));
    copyText($(this));
  });
  
  function moveLabel(elem) {
    var label = elem.parents('label');
    
    if(!elem.val()) {
      $(label).toggleClass('active'); 
    }else {
      $(label).addClass('active');
    }
  }
  
// function copyText(elem) {
//console.log ("Fired");
//var inputType = elem.attr('type'),
//inputText = elem.val();
    
//console.log(inputType);
//console.log(inputText);
    
 //  $('input[type="'+inputType+'"].input').val(inputText);
  //}
  
  $('.icon').on('click', function() {
    var formName = $(this).attr("data-form");
    $(this).addClass('active');
    $('.icon').not(this).addClass('hidden');
    $('.'+formName).addClass('active');
  });
  
  $('.close-button').on('click', function(){
    $(this).parents('.form').removeClass('active');
    $('.icon').removeClass('active hidden');
  });

