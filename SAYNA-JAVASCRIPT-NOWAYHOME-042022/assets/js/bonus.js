"use strict"
let today = new Date(); 
let todaySeconds = today.getSeconds();
let todayMinutes = today.getMinutes();
let todayHours = today.getHours();
let todayDay = today.getDay();

let deadline = new Date(2022, 4, 4, 8, 30, 0); 
let deadSeconds = deadline.getSeconds();
let deadMinutes = deadline.getMinutes();
let deadHours = deadline.getHours();
let deadDay = deadline.getDay();

var diffDays = deadDay - todayDay  ;
if(diffDays <= 0){
    diffDays = "0";
}

var diffHours = deadHours - todayHours;
if(diffHours <= 0){
    diffHours = 23 + diffHours;
}

var diffMinutes = deadMinutes - todayMinutes;


var diffSeconds = deadSeconds - todaySeconds;

// DAYS
let afficherJour = document.querySelector('#days button');

function setAfficher() {
    afficherJour.style.display = 'none';
}

function reboursJ() {
    if(today === deadline){
        setTimeout(setAfficher, 5000);
    } else {
        afficherJour.innerHTML = `${diffDays}`;
    }
    diffDays--;
    window.setTimeout('reboursJ()',86400000);
}

// HOURS
let afficherheures = document.querySelector('#hours button');

function setAfficher() {
    afficherheures.style.display = 'none';
}

function reboursH() {
    if(today === deadline){
        setTimeout(setAfficher, 5000);
    } else {
        afficherheures.innerHTML = `${diffHours}`;
    }
    diffHours--;
    window.setTimeout('reboursH()',3600000);
}



// MINUTES
let afficherMinutes = document.querySelector('#minutes button');

function setAfficher() {
    afficherMinutes.style.display = 'none';
}

function reboursM() {
    if(today === deadline){
        setTimeout(setAfficher, 5000);
    } else {
        afficherMinutes.innerHTML = `${diffMinutes}`;
    }
    diffMinutes--;
    if(diffMinutes <= 0){
        diffMinutes = 59 + diffMinutes;
        diffHours = diffHours - 1 ;
    }
    window.setTimeout('reboursM()',60000);
}

// SECONDS
let afficherSecondes = document.querySelector('#seconds button');

function setAfficher() {
    afficherSecondes.style.display = 'none';
}

function reboursS() {
    if(today === deadline){
        setTimeout(setAfficher, 5000);
    } else {
        afficherSecondes.innerHTML = `${diffSeconds}`;
    }
    diffSeconds--;
    if(diffSeconds <= 0){
        diffSeconds = 59 + diffSeconds;
        diffMinutes = diffMinutes - 1;
    }
    window.setTimeout('reboursS()',1000);
}


//menu
let menu = document.querySelectorAll('li');
menu.forEach(function(li){
    li.addEventListener('mouseover',()=>{
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseout',()=>{
        li.style.textDecoration = '';
    })
})

//footer-icones
let footericones = document.getElementsByClassName('footer-icones');

for(let a = 0; a<footericones.length;a++){
footericones[a].addEventListener('mouseover',()=>{
    footericones[a].style.color = 'white'});
footericones[a].addEventListener('mouseout',()=>{
    footericones[a].style.color = 'black'});
}



