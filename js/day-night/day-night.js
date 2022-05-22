
const d=document;
const ls=localStorage;


export default function day_night (btnNight,classDark, stage, ball){

    const $btnNight = d.querySelector(btnNight);
    const $selector = d.querySelectorAll("[data-dark]"); 
    const $stage = d.querySelector(stage);
    const $ball = d.querySelector(ball);

    let sun = "☀️",
        moon = "🌙";

    const lightMode=()=>{

        $selector.forEach(el=>el.classList.remove(classDark))
        $btnNight.textContent=moon;
        ls.setItem("theme","light")
        $stage.classList.remove("stage_dark")
        $ball.classList.remove("ball_dark")

    }

    const darkMode=()=>{

        $selector.forEach(el=>el.classList.add(classDark))
        $btnNight.textContent=sun;
        ls.setItem("theme","dark")
        $stage.classList.add("stage_dark")
        $ball.classList.add("ball_dark")

    }

    d.addEventListener("click",(e)=>{     

        if(e.target.matches(btnNight)){  
            
            if($btnNight.textContent===moon){                
                darkMode()
            }
            else{
                lightMode()
            }
            
          
        }
        
        
        
    })

    d.addEventListener("DOMContentLoaded",(e)=>{
        
        if(ls.getItem("theme")===null)ls.setItem("theme","light")        
        if(ls.getItem("theme")==="light")lightMode();  
        if(ls.getItem("theme")==="dark")darkMode();



        
    })

}



