let w= screen.width;


let bar=document.getElementsByClassName('bar')

if(w<=750){
    document.getElementById("ham").innerHTML="";  
}

function burger(){
document.getElementById("menu").classList.toggle("opened");
document.getElementById("navItems").classList.toggle("change");
for(let i=0; i<bar.length; i++){
    bar[i].classList.toggle('bg-dark')
}
}

// code for color changing circle
let circle=document.getElementById('blue-circle');

let color=["red","blue","green","yellow","blue","black"]
{w>750 && setInterval(() => {
    let c=Math.random()*5;
    c=Math.floor(c);
    circle.style.color=`${color[c]}`;
    
}, 500);}


// new js



const observer=new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('load');
        }
        else{
            entry.target.classList.remove('load');
        }
    })
})


const secs=document.getElementsByClassName('unload');
for(let i=0; i<secs.length; i++){
    observer.observe(secs[i])
}