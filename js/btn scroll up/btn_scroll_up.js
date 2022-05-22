const d = document;

export function btnScrollUp(btnScrollUp,btnFixed,btnArrow){

    
    
        
    window.addEventListener("scroll",(e)=>{
        
        if(window.scrollY>600){
            d.querySelector(btnScrollUp).classList.add("noHidden");
               
        }
        else{
            d.querySelector(btnScrollUp).classList.remove("noHidden")
            
        }




        // console.clear();
        // console.log("***** Evento Scroll *****")
        // console.log(window.scrollX);
        // console.log(window.scrollY);
        // console.log(event)
    })


    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnArrow)||e.target.matches(`${btnArrow} *`)){
            window.scrollTo({
                behavior:"smooth",
                top:0
            })


        }
    
    })






}
