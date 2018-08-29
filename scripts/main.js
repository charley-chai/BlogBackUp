function contact_anime() {
  if (!is_first){
    return;
  }
  is_first = false;
  anime({
    targets: '#contact-bg .polymorph',
    points: [
      { value: '1366,390 0,390 0,0 200,0 400,0 500,0 600,0 800,0 1000,0 1200,0 1366,0' },
      { value: '1366,390 0,390 0,0 200,100 400,0 500,0 600,0 800,300 1000,0 1200,200 1366,0' },
      { value: '1366,390 0,390 0,0 200,100 400,300 500,130 600,360 800,20 1000,200 1200,200 1366,0' },
      { value: '1366,390 0,390 0,0 140,300 250,270 350,30 600,60 800,0 1000,200 1200,200 1366,0' },
    ],
    easing: 'easeOutQuad',
    duration: 1200,
    loop: false
  });

  anime({
    targets: '#help',
    opacity: 1,
    duration: 2000,
    translateY: 150
  })
}

var cover = document.getElementById('cover');
var is_first = true;
cover.onmouseenter = contact_anime;


var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function (el, i) { return i * 250 },
  direction: 'alternate',
  loop: false
});


var promise = lineDrawing.finished.then(() => {
  var scale = anime({
    targets: '#lineDrawing',
    delay: 500,
    duration: 1000,
    scale: 0.7,
    translateY: -100
  });
  anime({
    targets: '#body',
    background: '#11506C',
    delay: 500,
    height: 400
  });
  scale.finished.then(() => {
    var scale = anime({
      targets: '#lineDrawing',
      delay: 500,
      duration: 1000,
      scale: 0.49,
      translateY: -240
    });
    anime({
      targets: '#body',
      background: '#1B78A2',
      delay: 500,
      height: 200
    });
    scale.finished.then(() => {
      anime({
        targets: '#lineDrawing',
        delay: 500,
        duration: 1000,
        scale: 0.2,
        translateY: -400,
        opacity: 0
      });

      anime({
        targets: '#body',
        background: '#FFFFFF',
        height: 0,
        delay: 500
      });
    });
  });
});
