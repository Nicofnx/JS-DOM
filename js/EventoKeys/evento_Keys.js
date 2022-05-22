const d = document;

export function shortcut(e){
    //console.log(e.type)
    //console.log(e.key)
    //console.log(e.keyCode)
    //console.log(e.ctrlKey)
    //console.log(e.altKey)
    //console.log(e)

    
   if (e.key==="a" && e.altKey){
       alert("Haz lanzado una alerta con el teclado")
    }
   if (e.key==="p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado")
    }
    if (e.key==="c" && e.altKey){
        confirm("Haz lanzado un confrim con el teclado")
    }

 
}

    let x = 0,
        y = 0

export function moveBall(e,ball,stage){

    const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

    //console.log(e.keyCode)
    //console.log(e.key)
    //console.log(limitsBall,limitsStage)
    

    //const move = (direction)=>{

          

    switch(e.keyCode){
        //izq
        case 37:
            if(limitsBall.left > limitsStage.left){
                x--;   
                e.preventDefault()}; // Para no activar el scroll 
            break;
        //arriba
        case 38:
            if(limitsBall.top > limitsStage.top){
                y--;           
                e.preventDefault()};
            break;
        //der
         case 39:
            if(limitsBall.right < limitsStage.right){
                x++;
                e.preventDefault()};
            break;
        //abajo
         case 40:
            if(limitsBall.bottom < limitsStage.bottom){
                y++;
                e.preventDefault()};
            break;
        
    }
    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;

}

