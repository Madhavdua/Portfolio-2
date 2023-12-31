let s=document.getElementById("skills");

let skills = [
    {
        title: "Java",
        src:"./Images/java.png"
    },
    {
        title: "HTML",
        src:"./Images/html.png"
    },
    {
        title: "CSS",
        src:"./Images/css.png"
    },
    {
        title: "JavaScript",
        src:"./Images/js.png"
    },
    {
        title: "ReactJs",
        src:"./Images/react crop.png"
    }
]

for(let i=0; i<skills.length; i++){
    let skillItem=document.createElement("div");
    skillItem.classList.add("skill")
    skillItem.classList.add("unload")
    let img=new Image();
    img.src=skills[i].src;
    let head=document.createElement("h3");
    head.innerText=skills[i].title;
    skillItem.appendChild(img);
    skillItem.appendChild(head);
    s.appendChild(skillItem);
}