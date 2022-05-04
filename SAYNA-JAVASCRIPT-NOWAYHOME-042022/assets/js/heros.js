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