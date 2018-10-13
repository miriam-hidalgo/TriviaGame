var divClock= "clock"
var divClock = getTime() + 5000;
$('#clock').countdown(fiveSeconds, {elapse: true})
.on('update.countdown', function(event) {
  var $this = $(this);
  if (event.elapsed) {
    $this.html(event.strftime('After end: <span>%M:%S</span>'));
  } else {
    $this.html(event.strftime('To end: <span>%M:%S</span>'));
  }
});

var correct = 0
var incorect = 0