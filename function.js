
function timeLeft(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
};
 
$(document).ready(function() {
  var today = new Date();
  var deadline = 'September 09 2021 ' + (today.getFullYear() + 1) + " 00:00:00";
  if (today.getMonth() == 0 && today.getDate() == 1) {
    deadline = 'September 09 2021 ' + (today.getFullYear()) + " 00:00:00";
  };
  
  $("#header").hover(function() {
    $(this).toggleClass('bluelight');
  });
  
  $(".clock").hover(function() {
    $(this).toggleClass('bluelight');
  });
  
  var setClock = function(newyear){
    var timeinterval = setInterval(function(){
      var t = timeLeft(newyear);
      $('#days').text(t.days);
      $('#hours').text(t.hours);
      $('#mins').text(('0' + t.minutes).slice(-2));
      $('#secs').text(('0' + t.seconds).slice(-2));
      if(t.total<=0){
        clearInterval(timeinterval);
        var now = new Date();
        var yearStr = now.getFullYear().toString();
        $('#header').text("Happy Married Life!!");
        $('#days').text(yearStr[0]);
        $('#days-text').text("Happy");
        $('#hours').text(yearStr[1]);
        $('#hours-text').text("Married");
        $('#mins').text(yearStr[2]);
        $('#mins-text').text("Life");
        $('#secs').text(yearStr[3]);
        $('#secs-text').text("!!!");
        $('#info').text("Happy Married Life!");
      }
    },1000);
  };
  
  setClock(deadline);
  
});