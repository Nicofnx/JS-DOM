export default function hamburgerMenu(menuBtn,secHidden,secVisible,btn){

const d = document;

d.addEventListener("click",(e)=>{
    if(e.target.matches(menuBtn)||e.target.matches(`${menuBtn} *`)||e.target.matches(btn)){
        d.querySelector(secHidden).classList.toggle("visible");
        d.querySelector(menuBtn).classList.toggle("open");
    }

    if(e.target.matches(secVisible)){
        d.querySelector(secHidden).classList.remove("visible");
        d.querySelector(menuBtn).classList.remove("open");
    }
})
}

