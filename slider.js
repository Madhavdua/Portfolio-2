const proj_img = document.getElementsByClassName('proj-img');
const gitlink = document.getElementById('gitlink')
const view_proj = document.getElementById('viewlink');
const proj_title = document.getElementById('proj-title');


let projects = [
    {
        title: "Classroom 2.0",
        image: "./Images/Classroom-ss.png",
        github: "https://github.com/Madhavdua/CodeDev",
        view: "https://classroom2-0.vercel.app/"
    },
    {
        title: "Code Dev",
        image: "./Images/code-dev.png",
        github: "https://github.com/Madhavdua/CodeDev",
        view: "https://code-dev-3e10e.web.app/#/"
    },
    {
        title: "Google 2.0",
        image: "./Images/google2.0.png",
        github: "https://github.com/Madhavdua/Google2.0",
        view: "https://clone-a46f7.web.app/"
    },
    {
        title: "Apple Store",
        image: "./Images/apple.png",
        github: "https://github.com/Madhavdua/apple",
        view: "https://melodious-medovik-fec2d2.netlify.app/"
    }
]


if (w < 700) {
    for (let i = 0; i < projects.length; i++) {
        projects[i].image = projects[i].image.slice(0, 9) + "mobile." + projects[i].image.slice(9);
        console.log(projects[i].image)
    }
}

let index = 0;

const leftslider = document.getElementById('slider-left')
const rightslider = document.getElementById('slider-right')
if (index == 0) leftslider.classList.add('disable')


proj_img[0].src = projects[index].image

// link
gitlink.href = projects[index].github;
// title
proj_title.innerText = projects[index].title
// view link
view_proj.href = projects[index].view

const sliderLeft = () => {
    if (index > 0) {

        rightslider.classList.remove('disable')
        index--;
        if (index == 0) leftslider.classList.add('disable')
        proj_img[0].classList.toggle('unload')

        // link
        gitlink.href = projects[index].github;
        // title
        proj_title.innerText = projects[index].title
        // view link
        view_proj.href = projects[index].view

        setTimeout(() => {
            proj_img[0].src = projects[index].image
            proj_img[0].classList.toggle('unload')

        }, 1000);
    }
}
const sliderRight = () => {
    if (index < projects.length - 1) {
        if (index == projects.length - 2) rightslider.classList.add('disable')
        leftslider.classList.remove('disable')
        index++;
        proj_img[0].classList.toggle('unload')

        // link
        gitlink.href = projects[index].github;
        // title
        proj_title.innerText = projects[index].title
        // view link
        view_proj.href = projects[index].view


        setTimeout(() => {
            proj_img[0].src = projects[index].image
            proj_img[0].classList.toggle('unload')

        }, 1000);
    }
}

