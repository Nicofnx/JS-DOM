export default function alarm(btnStarA,btnstopA){

    const d = document;

        
        const $btnStartA = d.querySelector(".alarm_star");
        const $audioPanel = d.createElement("audio");
        const $seccion1 = d.getElementById("s1");
        const $s1 = d.querySelector(".seccion-v");
        

    d.addEventListener("click",(e)=>{   
        
        let alarmaTempo;
        

        if(e.target.matches(btnStarA)){
            $btnStartA.setAttribute("disabled","");
            $seccion1.insertAdjacentElement("afterbegin",$audioPanel);
            $audioPanel.classList.add("audio_on");
            const qw = d.querySelector(".audio_on");
            qw.setAttribute("autoplay", "")
            
            alarmaTempo = setTimeout(() => {
                qw.setAttribute("loop", ""),
                qw.setAttribute("src", "alarma.mp3 ")
              }, 500); 
            
            
            
            
            
        }
    
    
    
        if(e.target.matches(btnstopA)){
            $btnStartA.removeAttribute("disabled")
            $s1.removeChild($audioPanel)
            clearTimeout(alarmaTempo);


        }})

        


        

















}