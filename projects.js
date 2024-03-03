let list = [
    {
        title: "Classroom",
        name: "CLASSROOM 2.0",
        image: "./Images/classroom.png",
        link:"https://classroom2-0.vercel.app/"
    },
    {
        title: "Code editor",
        name: "Code Dev",
        image: "./Images/codedev.png",
        link:"https://code-dev-3e10e.firebaseapp.com/"
    },
    {
        title: "Google search",
        name: "GOOGLE 2.0",
        image: "./Images/google.png",
        link:"https://clone-a46f7.web.app/"
    },
]
const proj = document.getElementById('projects-id');
for (let i = 0; i < list.length; i++) {
    let card = document.createElement('div');
    card.classList.add('project-card');
    card.classList.add('unload');
    let d1=document.createElement('div');
    let a = document.createElement('a');
    a.innerText = list[i].name;
    a.href=list[i].link;
    
    let img = document.createElement('img');
    img.classList.add('project-img');
    img.src = list[i].image;
    
    let line=document.createElement('hr');
    line.classList.add('project-name-line');
    
    d1.classList.add('project-name');
    d1.append(a);
    d1.append(line);

    card.append(d1);
    card.append(img);

    proj.append(card);
}