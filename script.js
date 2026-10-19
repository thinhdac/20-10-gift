/* =========================================================
   WEBSITE 20/10 - TÙY CHỈNH TẠI ĐÂY
   1) Đổi tên người nhận ở recipientName.
   2) Sửa nội dung thư ở letterText.
   3) Thay ảnh mẫu trong thư mục images.
   4) Thêm nhạc vào music/your-song.mp3.
   ========================================================= */
const CONFIG = {
  recipientName: "Yến",
  letterText: `Yến oi,

Chúc Yến một ngày 20/10 thật vui vẻ nhá.

Thật ra tui cũng không biết phải bắt đầu từ đâu nữa. Tui không giỏi nói mấy lời ngọt ngào đâu, nhưng mà hôm nay là một ngày đặc biệt nên tui cũng muốn làm gì đó đặc biệt cho Yến.

Ước gì khoảng cách giữa hai mình gần hơn một chút nhỉ, để hôm nay tui có thể tự tay tặng Yến một một món quà, một câu chúc trực tiếp. Nhưng mà tiếc ghê, giờ tui chỉ có thể gửi những điều này qua một chiếc màn hình thuiii 🥹. 

Nên tui đã dành chút thời gian làm ra món quà này. Có thể nó không hoàn hảo, cũng chẳng phải thứ gì lớn lao, nhưng từng chút một trong đây đều là tâm ý của tui dành cho Yến ă.

Cảm ơn Yến vì đã xuất hiện, vì những lần nói chuyện, những câu chuyện linh tinh và cả những khoảnh khắc nhỏ xíu mà có lẽ Yến chẳng để ý, nhưng tui lại thấy rất vui.

Tui mong Yến lúc nào cũng thật hạnh phúc, luôn cười thật nhiều, ăn uống đầy đủ, ngủ đúng giờ và đừng có thức khuya quá đó nhaaa. Có chuyện gì buồn thì cũng đừng giữ hết trong lòng một mình.

Và nếu có một điều ước cho ngày hôm nay, thì tui chỉ ước rằng một ngày nào đó, tui có thể đứng trước mặt Yến thoi. Còn bây giờ, dù chúng ta đang ở xa nhau, tui vẫn hy vọng món quà nhỏ này có thể khiến Yến vui.

Happy Vietnamese Women's Day! ♡`
};

const $ = (selector) => document.querySelector(selector);
const heroName = $("#heroName");
heroName.textContent = CONFIG.recipientName;

const envelope = $("#envelope");
const letterContent = $("#letterContent");
const typedLetter = $("#typedLetter");
const closeLetter = $("#closeLetter");
let typingTimer = null;
let hasTyped = false;

function openLetter() {
  envelope.classList.add("open");
  envelope.setAttribute("aria-expanded", "true");
  window.setTimeout(() => {
    letterContent.classList.add("visible");
    letterContent.setAttribute("aria-hidden", "false");
    letterContent.scrollIntoView({ behavior: "smooth", block: "center" });
    if (!hasTyped) typeLetter();
  }, 450);
}
function typeLetter() {
  hasTyped = true;
  typedLetter.textContent = "";
  const text = CONFIG.letterText;
  let index = 0;
  clearInterval(typingTimer);
  typingTimer = setInterval(() => {
    typedLetter.textContent += text.charAt(index);
    index++;
    if (index >= text.length) clearInterval(typingTimer);
  }, 23);
}
function closeLetterPanel() {
  clearInterval(typingTimer);
  letterContent.classList.remove("visible");
  letterContent.setAttribute("aria-hidden", "true");
  envelope.classList.remove("open");
  envelope.setAttribute("aria-expanded", "false");
  envelope.scrollIntoView({ behavior: "smooth", block: "center" });
}
envelope.addEventListener("click", () => {
  if (envelope.classList.contains("open")) {
    letterContent.classList.contains("visible") ? closeLetterPanel() : openLetter();
  } else openLetter();
});
closeLetter.addEventListener("click", closeLetterPanel);

// Nhạc chỉ phát sau thao tác của người dùng do chính sách trình duyệt.
const audio = $("#backgroundMusic");
const musicToggle = $("#musicToggle");
const musicLabel = $("#musicLabel");
musicToggle.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicLabel.textContent = "Tắt nhạc";
    } catch {
      musicLabel.textContent = "Thêm file nhạc";
      alert("Bạn hãy thêm file nhạc vào thư mục music và đặt tên là your-song.mp3 nhé.");
    }
  } else {
    audio.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "Bật nhạc";
  }
});

// Các ảnh mẫu mở hộp chú thích. Thay ảnh thật trong thư mục images để cá nhân hóa.
const lightbox = $("#lightbox");
const lightboxCaption = $("#lightboxCaption");
function closeLightbox() {
  lightbox.classList.remove("visible");
  lightbox.setAttribute("aria-hidden", "true");
}
document.querySelectorAll(".photo-card").forEach(card => {
  card.addEventListener("click", () => {
    lightboxCaption.textContent = card.dataset.caption || "Một khoảnh khắc đáng nhớ";
    lightbox.classList.add("visible");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
$("#lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeLightbox(); closeLetterPanelIfVisible(); }
});
function closeLetterPanelIfVisible() {
  if (letterContent.classList.contains("visible")) closeLetterPanel();
}

// Điều ước + pháo hoa.

const wishes = [
  "Điều ước đầu tiên: Mong Yến của tui lúc nào cũng vui vẻ, cười thật nhiều và không phải buồn vì những chuyện linh tinh nữa nhaaa! 💗",

  "Mong Yến mỗi ngày đều được yêu thương, gặp thật nhiều điều may mắn và những chuyện tốt đẹp sẽ luôn tìm đến Yến. 🌷",

  "Ước gì tui có thể ở gần Yến hơn một chút, để những lúc Yến buồn, tui có thể chạy đến dỗ dành thay vì chỉ hỏi han qua màn hình. 🥹",

  "Mong Yến luôn tự tin vào bản thân, vì trong mắt tui, Yến đã là một cô gái rất đặc biệt rồiii! 💖",

  "Mong Yến luôn ăn uống đầy đủ, ngủ ngon, ít thức khuya lại và nhớ chăm sóc bản thân thật tốt 💕",

  "Nếu có một ngày Yến cảm thấy mệt mỏi, mong Yến nhớ rằng vẫn có một người ở xa luôn ở đó. ♡",

  "Tui ước một ngày nào đó khoảng cách giữa hai đứa sẽ không còn xa như bây giờ, để tui có thể tự tay tặng Yến một bó hoa thật xinh. 💐",

  "Và điều ước cuối cùng... Mong rằng sau này tui vẫn sẽ có cơ hội được chúc Yến 20/10, không chỉ qua màn hình mà còn ở ngay bên cạnh Yến nữa. 💗"
];

let wishIndex = 0;
$("#wishButton").addEventListener("click", () => {
  $("#wishMessage").textContent = wishes[wishIndex % wishes.length];
  wishIndex++;
  launchFireworks(5);
});
$("#fireworksButton").addEventListener("click", () => launchFireworks(9));

const colors = ["#f3a8c5", "#f4d9ad", "#c8b6ff", "#ffffff", "#e88fb5"];
function launchFireworks(count = 5) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const cx = 12 + Math.random() * 76;
      const cy = 15 + Math.random() * 55;
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let j = 0; j < 26; j++) {
        const particle = document.createElement("span");
        particle.className = "firework";
        particle.style.left = `${cx}vw`;
        particle.style.top = `${cy}vh`;
        particle.style.color = color;
        const angle = (Math.PI * 2 * j) / 26;
        const distance = 35 + Math.random() * 90;
        particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1300);
      }
    }, i * 180);
  }
}

// Cánh hoa rơi nhẹ, giới hạn số lượng để tránh làm chậm điện thoại.
const petalsContainer = $("#petals");
function createPetal() {
  if (document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
  petal.style.animationDuration = `${7 + Math.random() * 7}s`;
  petal.style.opacity = `${0.25 + Math.random() * 0.45}`;
  petal.style.transform = `scale(${0.5 + Math.random() * 0.9})`;
  petalsContainer.appendChild(petal);
  setTimeout(() => petal.remove(), 14500);
}
setInterval(createPetal, 650);

// Bầu trời sao twinkle bằng canvas.
const canvas = $("#sky");
const ctx = canvas.getContext("2d");
let stars = [];
let width = 0, height = 0;
function resizeSky() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.min(150, Math.floor(width * height / 8500));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.35 + 0.25,
    phase: Math.random() * Math.PI * 2,
    speed: 0.003 + Math.random() * 0.009
  }));
}
function drawSky() {
  ctx.clearRect(0, 0, width, height);
  stars.forEach(star => {
    star.phase += star.speed;
    const alpha = 0.25 + (Math.sin(star.phase) + 1) * 0.3;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 231, 244, ${alpha})`;
    ctx.fill();
  });
  requestAnimationFrame(drawSky);
}
window.addEventListener("resize", resizeSky);
resizeSky();
drawSky();


// ===== MYSTERY BOUQUET INTRO + SEQUENTIAL REVEAL =====
const mysteryGate = document.querySelector('#mysteryGate');
const bouquet = document.querySelector('#bouquet');
const enterGift = document.querySelector('#enterGift');
const holdHint = document.querySelector('#holdHint');
const gateWhisper = document.querySelector('#gateWhisper');
let holdTimer = null;
let bouquetUnlocked = false;
let bouquetRevealed = false;
function burstBouquet(amount = 70) {
  const rect = bouquet.getBoundingClientRect();
  const cx = rect.left + rect.width / 2, cy = rect.top + rect.height * .42;
  const glyphs = ['✦','✧','♡','❀','✿','·'];
  for (let i=0;i<amount;i++) {
    const p = document.createElement('span'); p.className='bouquet-particle';
    p.textContent=glyphs[Math.floor(Math.random()*glyphs.length)];
    p.style.setProperty('--sx',`${cx}px`); p.style.setProperty('--sy',`${cy}px`);
    const a=Math.random()*Math.PI*2, d=75+Math.random()*Math.min(innerWidth*.42,260);
    p.style.setProperty('--dx',`${Math.cos(a)*d}px`); p.style.setProperty('--dy',`${Math.sin(a)*d-35}px`);
    p.style.setProperty('--rot',`${Math.random()*360-180}deg`); p.style.setProperty('--size',`${12+Math.random()*22}px`);
    p.style.setProperty('--color',colors[Math.floor(Math.random()*colors.length)]);
    document.body.appendChild(p); setTimeout(()=>p.remove(),1650);
  }
}
function unlockBouquet() {
  if (bouquetUnlocked) return; bouquetUnlocked=true; bouquet.classList.remove('holding');
  holdHint.textContent='♡ BÍ MẬT ĐÃ ĐƯỢC MỞ ♡';
  gateWhisper.textContent='Bó hoa này là lời chúc đầu tiên — còn nhiều điều nữa tui muốn gửi đến Yến.';
  enterGift.hidden=false; burstBouquet(100); launchFireworks(7);
}
function revealBouquet() {
  if (bouquetRevealed) return;
  bouquetRevealed = true;
  bouquet.classList.add('revealed');
  bouquet.setAttribute('aria-label','Ấn giữ bó hoa để mở món quà');
  holdHint.innerHTML = '<span class="pulse-dot"></span> ẤN GIỮ BÓ HOA';
  gateWhisper.textContent = '♡';
  burstBouquet(35);
}
function startBouquetHold(event) {
  if (!bouquetRevealed) { revealBouquet(); return; }
  if (bouquetUnlocked || holdTimer) return;
  bouquet.classList.add('holding'); gateWhisper.textContent='Giữ thêm một chút nhaaa ♡';
  holdTimer=setTimeout(()=>{holdTimer=null;unlockBouquet();},1200);
}
function cancelBouquetHold() {
  if (!holdTimer) return;
  clearTimeout(holdTimer); holdTimer=null; bouquet.classList.remove('holding');
  if (!bouquetUnlocked) gateWhisper.textContent='Ấn giữ bó hoa khoảng 1 giây nữa nha ♡';
}
bouquet.addEventListener('pointerdown',startBouquetHold);
bouquet.addEventListener('pointerup',cancelBouquetHold);
bouquet.addEventListener('pointerleave',cancelBouquetHold);
bouquet.addEventListener('pointercancel',cancelBouquetHold);
bouquet.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();if(!bouquetRevealed)revealBouquet();else if(!bouquetUnlocked)unlockBouquet();}});
enterGift.addEventListener('click',()=>document.querySelector('#home').scrollIntoView({behavior:'smooth',block:'start'}));

// Unlock the album after the envelope is opened; unlock the ending after the wish is sent.
const originalOpenLetterForUnlock = openLetter;
openLetter = function(){ originalOpenLetterForUnlock(); setTimeout(()=>unlockSection(document.querySelector('#memories')),650); };
document.querySelector('#wishButton').addEventListener('click',()=>unlockSection(document.querySelector('#finalSection')),{once:true});
function unlockSection(section){if(!section||!section.classList.contains('is-locked'))return;section.classList.remove('is-locked');section.classList.add('just-unlocked');}

// Stronger visible fireworks, used by both the bouquet and the final button.
const originalLaunchFireworksForVisibility = launchFireworks;
launchFireworks = function(count=5){
  originalLaunchFireworksForVisibility(count);
  for(let i=0;i<Math.max(3,count);i++)setTimeout(()=>{
    const x=8+Math.random()*84,y=12+Math.random()*48,color=colors[Math.floor(Math.random()*colors.length)];
    for(let j=0;j<34;j++){
      const p=document.createElement('span');p.className='firework';p.style.left=`${x}vw`;p.style.top=`${y}vh`;p.style.color=color;
      const a=2*Math.PI*j/34,d=55+Math.random()*110;p.style.setProperty('--x',`${Math.cos(a)*d}px`);p.style.setProperty('--y',`${Math.sin(a)*d}px`);
      document.body.appendChild(p);setTimeout(()=>p.remove(),1450);
    }
  },i*140);
};
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePortrait();});
// Sau khi khám phá ít nhất một khung ảnh, mở khóa lời chúc kế tiếp.
document.querySelectorAll('.photo-card').forEach(card => {
  card.addEventListener('click', () => unlockSection(document.querySelector('#wishSection')));
});

// ===== TRUE STEP-BY-STEP FLOW =====
const stagePanels = [...document.querySelectorAll('.stage-panel')];
const stageProgress = document.querySelector('#stageProgress');
const progressCaption = document.querySelector('#progressCaption');
const progressFill = document.querySelector('#progressFill');
const progressDots = [...document.querySelectorAll('.progress-steps i')];
const stageNames = ['LỜI MỞ ĐẦU', 'LÁ THƯ RIÊNG', 'NHỮNG KHOẢNH KHẮC', 'ĐIỀU ƯỚC DÀNH CHO CẬU', 'MÓN QUÀ CUỐI CÙNG'];
let currentStage = 0;
let letterStageReady = false;
let albumStageReady = false;
let wishStageReady = false;
function showStage(index) {
  currentStage = Math.max(0, Math.min(index, stagePanels.length - 1));
  document.body.classList.add('gift-started');
  if (stageProgress) stageProgress.hidden = true;
  stagePanels.forEach((panel, i) => {
    panel.classList.toggle('active-stage', i === currentStage);
    panel.classList.remove('just-unlocked');
  });
  if (progressCaption) progressCaption.textContent = `${stageNames[currentStage]} · ${currentStage + 1}/${stagePanels.length}`;
  if (progressFill) progressFill.style.width = `${((currentStage + 1) / stagePanels.length) * 100}%`;
  progressDots.forEach((dot, i) => {
    dot.classList.toggle('current', i === currentStage);
    dot.classList.toggle('done', i < currentStage);
  });
  if (currentStage === stagePanels.length - 1) document.body.classList.add('gift-complete');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
enterGift.addEventListener('click', () => showStage(0));
$('#toLetter').addEventListener('click', () => showStage(1));
envelope.addEventListener('click', () => {
  if (!letterStageReady) {
    letterStageReady = true;
    setTimeout(() => { $('#toAlbum').hidden = false; }, 650);
  }
});
$('#toAlbum').addEventListener('click', () => { if (letterStageReady) showStage(2); });
document.querySelectorAll('.photo-card').forEach(card => card.addEventListener('click', () => {
  if (!albumStageReady) {
    albumStageReady = true;
    $('#toWish').hidden = false;
    $('#toWish').classList.add('just-unlocked');
  }
}));
$('#toWish').addEventListener('click', () => { if (albumStageReady) showStage(3); });
$('#wishButton').addEventListener('click', () => {
  wishStageReady = true;
  $('#toFinal').hidden = false;
});
$('#toFinal').addEventListener('click', () => { if (wishStageReady) showStage(4); });
