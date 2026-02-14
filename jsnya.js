document.addEventListener('DOMContentLoaded', function() {
  // ========== ELEMEN ==========
  const catCharacter = document.getElementById('catCharacter');
  const chocolateBox = document.getElementById('chocolateBox');
  const speechBubble = document.getElementById('speechBubble');
  const speechText = document.getElementById('speechText');
  const valentineCard = document.getElementById('valentineCard');
  const cardInner = document.getElementById('cardInner');
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const answerSection = document.getElementById('answerSection');
  const specialMessage = document.getElementById('specialMessage');
  const heartsContainer = document.getElementById('heartsContainer');
  const stars = document.getElementById('stars');

  // ========== BUAT BINTANG ==========
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.animation = `starsTwinkle ${Math.random() * 3 + 2}s infinite`;
    star.style.animationDelay = Math.random() * 5 + 's';
    stars.appendChild(star);
  }

  // ========== TEKS UCAPAN BERGANDA ==========
  const messages = [
    "Halo Khansa! mpus bawain coklat nih! 🍫",
    "Ini khusus buat kamu lho! ❤️",
    "Khansa yang cantik, ini untukmu 💝",
    "Dari kucing tersayangmu! 🐱",
    "hatiku untukmu 🌹",
    "Mau terima coklatnya? dari mpus 🥺"
  ];

  let messageIndex = 0;
  setInterval(() => {
    if (!yesBtn.classList.contains('clicked') && !noBtn.classList.contains('clicked')) {
      messageIndex = (messageIndex + 1) % messages.length;
      speechText.textContent = messages[messageIndex];
      
      // Animasi bubble
      speechBubble.style.animation = 'none';
      speechBubble.offsetHeight;
      speechBubble.style.animation = 'bubblePop 0.5s';
    }
  }, 4000);

  // ========== INTERAKSI KOTAK COKLAT ==========
  chocolateBox.addEventListener('mouseenter', function() {
    if (!yesBtn.classList.contains('clicked')) {
      speechText.textContent = "Klik dong, ini buat kamu! 🎁";
      chocolateBox.style.transform = 'translateX(-50%) scale(1.1)';
    }
  });

  chocolateBox.addEventListener('mouseleave', function() {
    chocolateBox.style.transform = 'translateX(-50%) scale(1)';
  });

  chocolateBox.addEventListener('click', function() {
    if (!yesBtn.classList.contains('clicked')) {
      // Ledakan hati kecil
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          createHeartBubble(
            chocolateBox.getBoundingClientRect().left + 30,
            chocolateBox.getBoundingClientRect().top
          );
        }, i * 100);
      }
      
      speechText.textContent = "Yeay! Kamu buka coklatnya! 🎉";
      
      // Putar kartu valentine
      cardInner.style.transform = 'rotateY(180deg)';
      
      // Animasi kucing senang
      catCharacter.style.animation = 'catHappy 0.5s';
      setTimeout(() => {
        catCharacter.style.animation = 'catBounce 3s infinite';
      }, 500);
    }
  });

  // Animasi kucing senang
  const style = document.createElement('style');
  style.textContent = `
    @keyframes catHappy {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-5deg); }
      75% { transform: rotate(5deg); }
    }
  `;
  document.head.appendChild(style);

  // ========== BUAT HATI ==========
  function createHeartBubble(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart-float';
    const hearts = ['❤️', '💖', '💗', '💓', '💘', '💝'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.animationDuration = Math.random() * 2 + 2 + 's';
    heartsContainer.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  // ========== JAWABAN YES ==========
  yesBtn.addEventListener('click', function() {
    if (yesBtn.classList.contains('clicked')) return;
    
    yesBtn.classList.add('clicked');
    yesBtn.style.transform = 'scale(1.2)';
    
    // Ubah tampilan
    answerSection.style.opacity = '0.5';
    noBtn.style.display = 'none';
    
    speechText.textContent = "YEAY! kemee mau terima coklat dari mpus! 🎉🎉";
    
    // Pesan spesial
    specialMessage.innerHTML = `
      <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 20px;">
        🌟🌟🌟<br>
        <span style="font-size: 2.5rem;">TERIMA KASIH SAYANGGG! ❤️</span><br>
        Kamu membuatku menjadi mpus paling bahagia di dunia!<br>
        Aku janji akan selalu menjagamu<br>
        <span style="font-size: 1.5rem; display: block; margin-top: 15px;">
          I LOVE YOUUUUUUU! 💝
        </span>
      </div>
    `;
    
    // Ledakan hati massive
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        createHeartBubble(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
      }, i * 50);
    }
    
    // Animasi kucing nari
    catCharacter.style.animation = 'catDance 0.5s infinite';
    
    // Tambah style dance
    const danceStyle = document.createElement('style');
    danceStyle.textContent = `
      @keyframes catDance {
        0%, 100% { transform: rotate(-5deg) translateY(0); }
        25% { transform: rotate(5deg) translateY(-10px); }
        50% { transform: rotate(-5deg) translateY(0); }
        75% { transform: rotate(5deg) translateY(-10px); }
      }
    `;
    document.head.appendChild(danceStyle);
  });

  // ========== JAWABAN NO (TAPI ROMANTIS) ==========
  noBtn.addEventListener('click', function() {
    if (yesBtn.classList.contains('clicked')) return;
    
    // Pesan romantis kalau klik no
    const romanticReplies = [
      "Yakin nih? Padahal coklatnya enak lho... 🥺",
      "Coba dipikir lagi dong? 🥺❤️",
      "Jangan nolak aku, Khansa... 💔",
      "Tapi aku sudah beli coklat kesukaanmu... 😢",
      "Kasihan kucingnya sedih... 🐱😢",
      "Sekali aja deh... pretty please? 🥺",
      "Nanti aku beliin bunga juga! 🌹",
      "Kamu cantik banget hari ini... gak mau terima? 😊"
    ];
    
    speechText.textContent = romanticReplies[Math.floor(Math.random() * romanticReplies.length)];
    
    // Animasi kucing sedih
    catCharacter.style.transform = 'scale(0.95)';
    catCharacter.style.filter = 'grayscale(0.3)';
    
    setTimeout(() => {
      catCharacter.style.transform = 'scale(1)';
      catCharacter.style.filter = 'none';
    }, 500);
    
    // Tombol yes membesar
    yesBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
      yesBtn.style.transform = 'scale(1)';
    }, 500);
    
    // Buat hati tapi sedikit
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createHeartBubble(
          noBtn.getBoundingClientRect().left,
          noBtn.getBoundingClientRect().top
        );
      }, i * 100);
    }
  });

  // ========== INTERAKSI KARTU ==========
  valentineCard.addEventListener('mouseenter', function() {
    speechText.textContent = "Baca suratnya dong! 📖❤️";
  });

  // ========== EFEK BACKGROUND BERUBAH ==========
  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)'
  ];
  
  let colorIndex = 0;
  setInterval(() => {
    if (!yesBtn.classList.contains('clicked')) {
      colorIndex = (colorIndex + 1) % colors.length;
      document.body.style.background = colors[colorIndex];
    }
  }, 5000);

  // ========== MUSIK ROMANTIS (SIMULASI) ==========
  // Karena browser block autoplay, kita kasih notifikasi
  setTimeout(() => {
    speechText.textContent = "Kalau klik coklat, ada kejutan spesial! ✨";
  }, 2000);

  // ========== SELAMAT DATANG ==========
  console.log('🐱 Selamat datang, Kemee! ❤️');
  
  // Buat hati pertama
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createHeartBubble(
          Math.random() * window.innerWidth,
          window.innerHeight - 50
        );
      }, i * 200);
    }
  }, 500);
});