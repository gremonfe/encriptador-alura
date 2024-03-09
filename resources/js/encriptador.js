//-Seleccion de elementos html
const botonEncriptar = document.querySelector(".botonEncriptar");
const textoEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".textoAviso");
const textoEncriptado = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjetaContenedor");
const botonCopiar = document.querySelector(".botonCopiar");

const botonDesencriptar = document.querySelector(".botonDesencriptar");


botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    
    if(texto ==""){
        aviso.style.background = "#0a3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent= "El campo de texto no debe estar vacio !!"
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else if(texto !== txt){
        aviso.style.background = "#0a3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent= "El texto no debe tener acentos ni caracteres especiales !!"
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent= "El texto debe ser en minúsculas !!"
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        textoEncriptado.innerHTML = texto
        botonCopiar.style.visibility = "inherit";
        contenido.remove();

    }

});

botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textoEncriptar.value;
    let txt = texto.normalize("NFD").replace( /[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    
    if(texto ==""){
        aviso.style.background = "#0a3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent= "El campo de texto no debe estar vacio !!"
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else if(texto !== txt){
        aviso.style.background = "#0a3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent= "El texto no debe tener acentos ni caracteres especiales !!"
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871"
        aviso.style.color = "#FFFF"
        aviso.style.fontWeight = "800"
        aviso.textContent= "El texto debe ser en minúsculas !!"
        
        setTimeout(()=>{
            aviso.removeAttribute("style")
        },1500);
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        textoEncriptado.innerHTML = texto
        botonCopiar.style.visibility = "inherit";
        contenido.remove();

    }
});

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = textoEncriptado;
    copiar.select();
    document.execCommand("copy");
});