$(document).ready(function() {
  var $timeBlocks = $('.time-block');
  var $currentDay = $('#currentDay');

  // Set current date
  $currentDay.text(dayjs().format('dddd MMMM D'));

  // Update time block classes based on current hour
  var currentHour = dayjs().hour();
  $timeBlocks.each(function() {
    var $this = $(this);
    var blockNum = parseInt($this.attr('id').split('hour')[1], 10);
    $this.toggleClass('past', blockNum < currentHour)
         .toggleClass('present', blockNum === currentHour)
         .toggleClass('future', blockNum > currentHour);
    $this.children('.description').toggleClass('text-light', blockNum < currentHour);
  });

  // Save button click event listener
  $timeBlocks.on('click', '.saveBtn', function() {
    var hourBlock = $(this).parent().attr('id');
    var input = $(this).siblings('.description').val(); 
    localStorage.setItem(hourBlock, input);
  });

  // Load saved data from local storage
  $timeBlocks.each(function() {
    var $this = $(this);
    var loadBlock = $this.attr('id');
    var loadContent = localStorage.getItem(loadBlock);
    $this.children('.description').val(loadContent);
  });
});
