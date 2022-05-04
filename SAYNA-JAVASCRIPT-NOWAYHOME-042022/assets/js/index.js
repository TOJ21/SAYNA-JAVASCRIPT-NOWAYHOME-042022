//Titre


//button
var btn = document.getElementsByClassName('btn');

for(let i = 0; i<btn.length;i++){
btn[i].addEventListener('mouseover',()=>{
    btn[i].style.background= 'red'; btn[i].style.color= 'white'});
btn[i].addEventListener('mouseout',()=>{
    btn[i].style.background= 'white'; btn[i].style.color= 'red'});
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

//pop up
