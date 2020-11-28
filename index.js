// For Vanilla JavaScript
var myWave = wavify( document.querySelector('#myId'), {
    height: 60,
    bones: 3,
    amplitude: 40,
    color: 'rgba(150, 97, 255, .8)',
    speed: .25
  })
  
  // For jQuery
  var myWave = $('#myID').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: 'rgba(150, 97, 255, .8)',
    speed: .25
  });