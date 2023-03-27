$(document).ready(funtion(){
  var today = dayjs().format('dddd MMMM D');
  var date = document.getElementById('currentDay')
  date.textcontent = today;
  

})
