window.addEventListener("load", () => {

  document.getElementById("loader")
  .style.display = "none";

});

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// HERO SLIDER

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

}

next.addEventListener("click", () => {

  current = (current + 1) % slides.length;
  showSlide(current);

});

prev.addEventListener("click", () => {

  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);

});

setInterval(() => {

  current = (current + 1) % slides.length;
  showSlide(current);

},5000);

function openProductPage(page) {

  window.location.href = page;

}

// GALLERY IMAGES

const galleryImages = [

"https://i.pinimg.com/736x/7f/1c/4b/7f1c4bc67f2b0d0f69b1f25c932d6824.jpg",

"https://i.pinimg.com/736x/ab/4d/f8/ab4df8f0c1f48995d437c2a1a8795ef4.jpg",

"https://i.pinimg.com/736x/e7/e0/1b/e7e01bcfb4cc6e4f9551f1f4f5c95a3d.jpg",

"https://i.pinimg.com/736x/5f/88/11/5f8811f31ef6ef6a65c85f0d6240fd07.jpg",

"https://i.pinimg.com/736x/85/8c/9f/858c9f0f4dca85fd9eab3d9712f4b89f.jpg",

"https://i.pinimg.com/736x/d8/83/29/d8832944b4e79d42d7a4fc7f7494ecb2.jpg"

];

// LOAD GALLERY

const galleryGrid = document.getElementById("galleryGrid");

galleryImages.forEach(image=>{

  galleryGrid.innerHTML += `

  <img src="${image}" alt="gallery">

  `;

});

// WHATSAPP FORM

function sendWhatsAppMessage(){

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const requirement = document.getElementById("requirement").value;

  const message =
`New Inquiry From Website

Name: ${name}
Phone: ${phone}

Requirement:
${requirement}`;

  const whatsappURL =
`https://wa.me/918889401678?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL,"_blank");

}
