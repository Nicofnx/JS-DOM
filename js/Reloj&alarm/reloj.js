export default function reloj(btnStarC,btnStopC){

    const d = document;

    const $clockPanel = d.createElement("div");
    const $btnStart = d.querySelector(".clock_star");
    const $seccion1 = d.getElementById("btns");
    const $s1 = d.querySelector(".seccion-v");
    
    
    d.addEventListener("click",(e)=>{        

        if(e.target.matches(btnStarC)){
            $seccion1.insertAdjacentElement("beforebegin",$clockPanel);          
            $clockPanel.classList.add("clock-active");
            const btnVisor = d.querySelector(".clock-active");
            $btnStart.setAttribute("disabled","");
            //e.target.disable = true; Esta es una mejor forma de desactivar el boton sin agregar el atributo
            let clockTempo;
            clockTempo = setInterval(function(){
                let data = new Date();
                btnVisor.innerHTML ="Hora: "+data.toLocaleTimeString();
            },1000);
            
        }});

        d.addEventListener("click",(e)=>{
            if(e.target.matches(btnStopC)){
                let btnVisor = d.querySelector(".clock-active");
                $s1.removeChild(btnVisor);
                $btnStart.removeAttribute("disabled","");
                //d.QuerySelector(btnStarC).disable = false; Para volver a habilitar el boton.
                
        }});


}