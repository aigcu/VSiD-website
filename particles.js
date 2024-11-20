var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('jscanvas'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 300,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['#5FFAE0', '#C22ED0'];
function resizeCanvas() {
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = w * devicePixelRatio;
    canvas.height = (h * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);
}
resizeCanvas();   
function create() {
  time = 0;
  count = 0;

  for (var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size  // Random size for each particle
    };
  }
}

function particles() {
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < arc; i++) {
    var li = parts[i];
    
    // Draw particle with random size
    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle = li.c;
    if (i % 2 == 0)
      ctx.stroke();
    else
      ctx.fill();

    // Move particle
    li.x = li.x + li.toX * (time * 0.015);
    li.y = li.y + li.toY * (time * 0.015);

    // Wrap around edges of the canvas
    if (li.x > w) {
      li.x = 0;
    }
    if (li.y > h) {
      li.y = 0;
    }
    if (li.x < 0) {
      li.x = w;
    }
    if (li.y < 0) {
      li.y = h;
    }
  }
  
  if (time < speed) {
    time++;
  }
  setTimeout(particles, 1000 / rate);
}

create();
particles();
// Set up canvas size and fix stretch issue on resize
function resizeCanvas() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    create(); // Reinitialize particles to fit the new dimensions
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Initial call to set canvas size