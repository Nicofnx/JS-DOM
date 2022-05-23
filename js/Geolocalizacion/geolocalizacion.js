const d = document,
    n=navigator;

export default function getGeolocation(id){

    const $id= d.getElementById(id),
    options={
        timeout:5000,
        enableHighAccuracy:true,
        maximumAge:0
    };

    const success = (position) =>{
        let coords=position.coords;
        let accuracy = Math.round(coords.accuracy)
        $id.innerHTML=`
        <p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target=_blank>Ver en google maps</a>`
        
        console.log(position)
    }
    
    const error = (err)=>{
        $id.innerHTML=`<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log( `Error ${err.code}: ${err.message}`)
    }

    n.geolocation.getCurrentPosition(success, error, options)

}