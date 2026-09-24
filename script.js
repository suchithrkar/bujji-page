// SMOOTH SCROLL

function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}


// RELATIONSHIP TIMER

function updateLoveTimer(){

const startDate = new Date("2025-01-19T00:00:00");

const now = new Date();

const diff = now - startDate;

const seconds = Math.floor(diff / 1000);

const minutes = Math.floor(seconds / 60);

const hours = Math.floor(minutes / 60);

const days = Math.floor(hours / 24);

const years = Math.floor(days / 365);

const remainingDays = days % 365;

const remainingHours = hours % 24;

const remainingMinutes = minutes % 60;

document.getElementById("loveTimer").innerHTML =
`
${years} years  
${remainingDays} days  
${remainingHours} hours  
${remainingMinutes} minutes
`;

}

setInterval(updateLoveTimer,1000);
updateLoveTimer();



// FLOATING HEARTS

const heartsContainer = document.getElementById("hearts-container");

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤";

heart.style.left = Math.random()*100+"%";

heart.style.fontSize = (15 + Math.random()*20)+"px";

heart.style.animationDuration = (5 + Math.random()*5)+"s";

heartsContainer.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,400);



// MEMORY GALLERY (AUTO LOAD MANY PHOTOS)

const gallery = document.getElementById("gallery");

// change number here if needed
const totalPhotos = 78;

for(let i=1;i<=totalPhotos;i++){

const img = document.createElement("img");

img.src = "images/photo"+i+".jpg";

img.loading="lazy";

gallery.appendChild(img);

}



// HIDDEN NOTE

function revealNote(){

const note = document.getElementById("hiddenNote");

note.style.display="block";

}



// AUTOPLAY MUSIC FIX (for mobile browsers)

const music = document.getElementById("bgMusic");

document.body.addEventListener("click",function(){

if(music.paused){

music.play();

}

});
