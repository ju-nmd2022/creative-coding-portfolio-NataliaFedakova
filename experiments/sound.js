let fft, waveform;
let player;
let isPlaying = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  fft = new Tone.FFT(64);
  waveform = new Tone.Waveform(1024);

  const audioUrl = "756216__josefpres__piano-loops-086-efect-3-octave-long-loop-120-bpm.wav";

  player = new Tone.Player({
    url: audioUrl,
    autostart: false,
    loop: true,
  }).toDestination();

  player.connect(fft);
  player.connect(waveform);

  document.addEventListener("click", startAudio);
}

function startAudio() {
  if (!isPlaying) {
    Tone.start();
    player.start();
    isPlaying = true;
  }
}

function draw() {
  background(0);
  const numRows = 10;
  const lineSpacing = 50;
  const originalY = 100;
  const maxAmplitude = 50;
  const waveRangeStart = 400;
  const waveRangeEnd = 1100;

  if (player && isPlaying) {
    let waveData = waveform.getValue();

    strokeWeight(2);
    noFill();

    for (let row = 0; row < numRows; row++) {
      let yOffset = originalY + row * lineSpacing;

      beginShape();
      for (let i = 0; i < waveData.length; i++) {
        let x = map(i, 0, waveData.length, 0, width);
        let amplitude;

        if (x >= waveRangeStart && x <= waveRangeEnd) {
          amplitude = maxAmplitude * (1 - abs(map(x, waveRangeStart, waveRangeEnd, -1, 1)));
        } else {
          amplitude = 1;
        }

        let y = yOffset + waveData[i] * amplitude;
        vertex(x, y);
        stroke(random(255), random(255), random(255));
      }
      endShape();
    }
  }
}
