import hamburgerMenu from "./burger/menu_hamburger.js";
import reloj from "./Reloj&alarm/reloj.js";
import alarm from "./Reloj&alarm/alarm.js";
import {shortcut, moveBall} from "./EventoKeys/evento_Keys.js";
import { countdown } from "./Countdown/contador.js";
import { btnScrollUp }  from "./btn scroll up/btn_scroll_up.js";
import  day_night  from "./day-night/day-night.js";
import responsiveMedia from "./ResponsiveWeb/objeyo_responsiv.js";
import responsiveTester from "./ResponsiveTest/responsive_test.js"
import userDeviceInfo from "./Deteccion_dispositivos/deteccion_dispositivos.js"
import networkStatus from "./DeteccionRed/deteccion_red.js";
import webCam from "./DeteccionWebcam/deteccion_webcam.js";
import getGeolocation from "./Geolocalizacion/geolocalizacion.js";

const d = document;



d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".btn-menu",".secciones-oculto",".secciones-oculto a",".container-btn");
    reloj(".clock_star",".clock_stop");
    alarm(".alarm_star",".alarm_stop");
    countdown(".countdown","jan 01, 2023 00:00:00","Tenes que cambiar de laburo");
    btnScrollUp(".btn-scroll",".btn-fixed",".btn-arrow");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=1">Link al video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/oPqhF4so55uHFH1y8">Link al mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26277.78753466759!2d-58.454375060449166!3d-34.5858637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58dac955555%3A0x8e2a1defe83b15c0!2sGrupo%20Navent%20Srl!5e0!3m2!1ses!2sar!4v1643249472224!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`)
    responsiveTester(
        "responsive-tester"
    );
    userDeviceInfo(
        "user-device"
    )
    webCam(
        "webcam"
    )
    getGeolocation(
        "geolocation"
    )
    
    
});

d.addEventListener("keydown", e=>{
    shortcut(e);
    moveBall(e,".ball",".stage");
});

day_night(".btn-night", "dark-mode", ".stage", ".ball");

networkStatus()


