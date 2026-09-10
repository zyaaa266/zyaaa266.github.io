// 1. 选中页面里所有包含 class="bg-slide" 的底图元素，存进一个列表里
const slides = document.querySelectorAll('.bg-slide');

// 2. 设定当前显示的图片索引（0 代表第一张）
let currentSlide = 0;

// 3. 设定自动轮播的时间间隔（单位：毫秒，10000 毫秒 = 10 秒）
const displayDuration = 10000;

function nextSlide() {
  // 把当前图片上的 'active' 移除（触发 CSS 里的 2秒 fade-out 淡出）
  slides[currentSlide].classList.remove('active');

  // 计算下一张图片的序号（如果到了最后一张，取余数 % 会重新回到第 0 张，形成无限循环）
  currentSlide = (currentSlide + 1) % slides.length;

  // 给下一张图片添加 'active'（触发 CSS 里的 2秒 fade-in 淡入）
  slides[currentSlide].classList.add('active');
}

// 4. 设置定时器：每隔 10 秒自动运行一次 nextSlide 函数
setInterval(nextSlide, displayDuration);