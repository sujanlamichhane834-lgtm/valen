// ===== YES/NO GAME =====
let yesSize = 1;
let noSize = 1;
const messages = [
  "Are you sure? 😏",
  "Think again Pakku 🌷",
  "My heart is waiting 💜",
  "Okay last chance 😌"
];

function yesClick() {
  window.location.href = "rose.html";
}

function noClick() {
  yesSize += 0.2;
  noSize -= 0.1;
  document.getElementById("yesBtn").style.transform = `scale(${yesSize})`;
  document.getElementById("noBtn").style.transform = `scale(${noSize})`;
  document.getElementById("msg").innerText =
    messages[Math.floor(Math.random() * messages.length)];
}

// ===== AUTO GALLERY =====
const mediaFiles = [
  { type: 'image', src: 'pakku_child.jpg', caption: 'Pakku as a child 🌷' },
  { type: 'image', src: 'pakku_family.jpg', caption: 'With mom & sister 💜' },
  { type: 'image', src: 'jaljana_us.jpg', caption: 'Our Jaljana trip 😌' },
  { type: 'image', src: 'my_childhood.jpg', caption: 'Me as a kid 😏' },
  { type: 'video', src: 'hug_animation.mp4', caption: 'We’ll hug soon 🤗' }
];

const gallery = document.getElementById('gallery');
if(gallery){
  mediaFiles.forEach(file => {
    if(file.type === 'image'){
      const img = document.createElement('img');
      img.src = file.src;
      img.alt = file.caption;
      img.onclick = () => openModal(file.src, file.caption);
      gallery.appendChild(img);
    } else if(file.type === 'video'){
      const vidDiv = document.createElement('div');
      vidDiv.className = 'video-thumb';
      vidDiv.innerText = '▶';
      vidDiv.onclick = () => openVideo(file.src, file.caption);
      gallery.appendChild(vidDiv);
    }
  });
}

// ===== MODAL =====
function openModal(src, text){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").style.display = "block";
  document.getElementById("modalVideo").style.display = "none";
  document.getElementById("modalImg").src = src;
  document.getElementById("modalText").innerText = text;
}

function openVideo(src, text){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").style.display = "none";
  const video = document.getElementById("modalVideo");
  video.style.display = "block";
  video.src = src;
  document.getElementById("modalText").innerText = text;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
  const video = document.getElementById("modalVideo");
  video.pause();
  video.src = "";
}

