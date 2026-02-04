// List all your media files (all in same folder as index.html)
const mediaFiles = [
  { type: 'image', src: 'pakku_child.jpg', caption: 'Pakku as a child 🌷' },
  { type: 'image', src: 'pakku_family.jpg', caption: 'With mom & sister 💜' },
  { type: 'image', src: 'jaljana_us.jpg', caption: 'Our Jaljana trip 😌' },
  { type: 'image', src: 'my_childhood.jpg', caption: 'Me as a kid 😏' },
  { type: 'video', src: 'hug_animation.mp4', caption: 'We’ll hug soon 🤗' }
];

// Get gallery container
const gallery = document.getElementById('gallery');

// Loop through files and display
mediaFiles.forEach(file => {
  if(file.type === 'image') {
    const img = document.createElement('img');
    img.src = file.src;
    img.alt = file.caption;
    img.onclick = () => openModal(file.src, file.caption);
    gallery.appendChild(img);
  } else if(file.type === 'video') {
    const vidDiv = document.createElement('div');
    vidDiv.className = 'video-thumb';
    vidDiv.innerText = '▶';
    vidDiv.onclick = () => openVideo(file.src, file.caption);
    gallery.appendChild(vidDiv);
  }
});

// Modal functions
function openModal(src, text) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").style.display = "block";
  document.getElementById("modalVideo").style.display = "none";
  document.getElementById("modalImg").src = src;
  document.getElementById("modalText").innerText = text;
}

function openVideo(src, text) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").style.display = "none";
  const video = document.getElementById("modalVideo");
  video.style.display = "block";
  video.src = src;
  document.getElementById("modalText").innerText = text;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  const video = document.getElementById("modalVideo");
  video.pause();
  video.src = "";
}
