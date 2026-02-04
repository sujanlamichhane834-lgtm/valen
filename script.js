// ===== WAIT FOR HTML TO LOAD =====
document.addEventListener("DOMContentLoaded", function() {

  // ===== YES/NO GAME LOGIC =====
  let yesSize = 1;
  let noSize = 1;
  const messages = [
    "Are you sure? 😏",
    "Think again Pakku 🌷",
    "My heart is waiting 💜",
    "Okay last chance 😌"
  ];

  window.yesClick = function() {
    // Redirect to first day page (Rose Day)
    window.location.href = "rose.html";
  }

  window.noClick = function() {
    yesSize += 0.2;
    noSize -= 0.1;
    document.getElementById("yesBtn").style.transform = `scale(${yesSize})`;
    document.getElementById("noBtn").style.transform = `scale(${noSize})`;
    document.getElementById("msg").innerText =
      messages[Math.floor(Math.random() * messages.length)];
  }

  // ===== MEDIA GALLERY WITH STORY =====
  const mediaFiles = [
    { 
      type: 'image', 
      src: 'pakku_child.jpg', 
      caption: 'Look at you as a little Pakku 🌷 Remember those innocent childhood smiles? 😌' 
    },
    { 
      type: 'image', 
      src: 'pakku_family.jpg', 
      caption: 'With your mom & sister 💜 Those happy family moments are priceless!' 
    },
    { 
      type: 'image', 
      src: 'jaljana_us.jpg', 
      caption: 'Us at Jaljana 😍 Remember that random uncle scolding me when I tried to hug you? 😂 And me catching fish for you!' 
    },
    { 
      type: 'image', 
      src: 'my_childhood.jpg', 
      caption: 'My childhood photo 😏 Who knew these two kids would fall in love when they grow up? 💜' 
    },
    { 
      type: 'video', 
      src: 'hug_animation.mp4', 
      caption: 'Soon, Pakku… we will hug each other 🤗 Can’t wait! 💖' 
    }
  ];

  const gallery = document.getElementById('gallery');

  if(gallery){
    mediaFiles.forEach(file => {
      if(file.type === 'image'){
        const img = document.createElement('img');
        img.src = file.src;
        img.alt = file.caption;

        // Log if loaded or failed
        img.onload = () => console.log(`${file.src} loaded`);
        img.onerror = () => console.log(`${file.src} failed`);

        // Open modal on click
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

}); // DOMContentLoaded ends

// ===== MODAL FUNCTIONS =====
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
