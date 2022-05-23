const d = document,
n= navigator,
ua= n.userAgent;

export default function userDeviceInfo(id){

    const $id=d.getElementById(id),
    isMobile={
        android: ()=>ua.match(/android/i),
        ios: () =>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any: function(){
            return this.android()||this.ios()||this.windows();
        },
    },
    isDesktop={
        linux: ()=>ua.match(/linux/i),
        mac: () =>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any: function(){
            return this.linux()||this.mac()||this.windows();
        },
    },
    isBrowser={
        chrome: ()=>ua.match(/chrome/i),
        safari: () =>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera: () =>ua.match(/opera|opera mini/i),
        ie: () =>ua.match(/msie|iemobile/i),
        edge: () =>ua.match(/edge/i),
        any: function(){
            return (
                this.ie()||
                this.edge()||
                this.chrome()||
                this.safari()||
                this.opera()||
                this.firefox()

            );
        },
    };
    

    /*console.log(isMobile.android())
    console.log(isDesktop.windows())*/

    $id.innerHTML=`
    <ul class="agent_ul">
        <li>User Agent: <b>${ua}</b><li/>
        <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b><li/>
        <li>Browser: <b>${isBrowser.any()}</b> <li/>
    <ul/>
    `
    // if(isBrowser.chrome()){
    //     $id.innerHTML += `<p>Aqui voy a agregar la imagen de cada browser</p>`
    // }

}