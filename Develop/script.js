$(document).ready(funtion() {
  var today = dayjs().format('dddd MMMM D');
  var date = document.getElementById('currentDay')
  date.textcontent = today;

  var hour = dayjs().hour();
  $('.time-block').each(funtion()) {
    var blockNum = parseInt($(this).attr('id').split('hour')[1]);
    if (blockNum < currentHour) {
      $(this).removeClass('present');
      $(this).removeClass('future');
      $(this).addClass('past');
      $(this).children('.description').addClass('text-light');
    } else if (blockNum === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  }


})
