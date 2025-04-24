let box=document.getElementById("box");
header=document.querySelector("header");
let loader=document.getElementById("loader");
setTimeout(()=>{
  box.style.display="inline-block";
    loader.style.display="none";
    header.style.animation="fadeInDown 1s ease";
},10000)

//dopdown
  const dropBtn = document.getElementById('drop');
  const maun = document.getElementById('maun');

  dropBtn.addEventListener('click', () => {
    maun.classList.toggle('show');
  });


  //home page
  document.querySelector('.welcome-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#design');
    target.scrollIntoView({ behavior: 'smooth' });
  });
 let Home=document.getElementById("Home");
 let About=document.getElementById("About");
 let cont=document.getElementById("Contact");
 let Design=document.getElementById("Design");


 let home=document.getElementById("home").addEventListener("click",()=>{
  Home.style.display="flex";
  About.style.display="none";
  cont.style.display="none";
  Design.style.display="none";
 })
 let about=document.getElementById("about").addEventListener("click",()=>{
  Home.style.display="none";
  About.style.display="flex";
  cont.style.display="none";
  Design.style.display="none";
 })
 let con=document.getElementById("con").addEventListener("click",()=>{
  Home.style.display="none";
  About.style.display="none";
  cont.style.display="flex";
  Design.style.display="none";
 })
 let design=document.getElementById("de").addEventListener("click",()=>{
  Home.style.display="none";
  About.style.display="none";
  cont.style.display="none";
  Design.style.display="inline-block";
 })

 // Fullscreen Image Overlay
const imageBoxes = document.querySelectorAll('#Design .image img');
const overlay = document.getElementById('imageOverlay');
const overlayImg = document.getElementById('overlayImg');
const closeOverlay = document.getElementById('closeOverlay');

imageBoxes.forEach(img => {
  img.addEventListener('click', () => {
    overlayImg.src = img.src;
    overlay.style.display = 'flex';
  });
});

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImg.src = '';
});



//search bar
document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const imageBoxes = document.querySelectorAll('#Design .image');

  imageBoxes.forEach(box => {
    const text = box.querySelector('p').textContent.toLowerCase();
    box.style.display = text.includes(query) ? 'inline-block' : 'none';
  });
});
//header logo
let logo=document.getElementById("logo").addEventListener("click",()=>{
  Home.style.display="flex";
  About.style.display="none";
  cont.style.display="none";
  Design.style.display="none";
})
//get
let get=document.getElementById("get").addEventListener("click",()=>{
  Home.style.display="flex";
  About.style.display="none";
  cont.style.display="none";
  Design.style.display="none";
})
//go
let go=document.getElementById("go").addEventListener("click",()=>{
  Home.style.display="flex";
  About.style.display="none";
  cont.style.display="none";
  Design.style.display="none";
})