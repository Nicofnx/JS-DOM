const $menuBtn = document.querySelector(".btn-menu")
let menuOpen = false;

const $menuVisible = document.querySelector(".secciones-oculto");
let menuSeccion = false;

const $selecSection = document.querySelector(".secciones-oculto");

$menuBtn.addEventListener("click",()=>{
    if(!menuOpen){
        $menuBtn.classList.add("open");
        $menuVisible.classList.add("visible");
        menuOpen = true;
        menuSeccion = true;
     }
    else{   
        $menuBtn.classList.remove("open");
        $menuVisible.classList.remove("visible");
        menuOpen = false;
        menuSeccion = false;
     }
    

})

$selecSection.addEventListener("click",()=>{
    $menuBtn.classList.remove("open");
    $menuVisible.classList.remove("visible");
    menuOpen = false;
    menuSeccion = false;
    
})
