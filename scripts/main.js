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


