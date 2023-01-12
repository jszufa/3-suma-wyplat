$(document).ready(function() {

  $('#count-sum').click(function() {
    //console.log($('#count-sum'));
    
    let sum = 0;
    
    $('.salary').each(function() {
      sum += Number($(this).text());
      //console.log(sum);
    })
    
    $('#sum').text(sum);
  });

});

console.log($('.salary'))
