let capture;

function setup() {
  // 建立全螢幕畫布
  createCanvas(windowWidth, windowHeight);
  
  // 擷取攝影機影像
  capture = createCapture(VIDEO);
  // 隱藏預設產生的 HTML 影片元件，只在畫布上顯示
  capture.hide();
}

function draw() {
  // 設定背景顏色為 e7c6ff
  background('#e7c6ff');
  
  // 計算全螢幕寬高的 60%
  let vWidth = width * 0.6;
  let vHeight = height * 0.6;
  
  // 計算置中座標
  let x = (width - vWidth) / 2;
  let y = (height - vHeight) / 2;
  
  // 將影像繪製在畫布中間
  image(capture, x, y, vWidth, vHeight);
}

// 當視窗大小改變時，自動調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}