const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const el = document.querySelector("body");

el.addEventListener("mousemove", (e) => {
    console.log(e);
  el.style.backgroundPositionX = -e.clientX/5 + "px";
  el.style.backgroundPositionY = -e.clientY/5 + "px";
});

function reset() {
    for(let i = 0; i < navigation.children.length; i++) {
        navigation.children[i].classList.remove('selected');
    }
}
const sections = document.querySelectorAll('section');
const windowHeight = window.innerHeight;
const navigation = document.querySelector('.navigation')
window.addEventListener('scroll', function() {
    const scrollTop = this.window.scrollY;
    sections.forEach(function(section, i) {
        if(section.offsetTop < scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2) {
            reset();
            navigation.children[i].classList.add('selected')
        }
    });
});

document.querySelectorAll(".navigation li").forEach(function(item, i) {
    item.addEventListener('click', function() {
        window.scrollTo({
            top: i * windowHeight,
            behavior: 'smooth'
        })
    })
});


const ham = document.querySelector("#ham");
ham.addEventListener('click', () => {
    document.querySelector('#menuMobileDiv').style.right = 0
})

const exit = document.querySelector("#exit");
exit.addEventListener('click', () => {
    document.querySelector('#menuMobileDiv').style.right = '-50%'
})