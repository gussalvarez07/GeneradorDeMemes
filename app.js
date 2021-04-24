//Modo oscuro y claro
      const boton = document.getElementById('boton');
      const textInfo = document.getElementById('textInfo');
      const body = document.querySelector('body');
      boton.addEventListener("click",()=>{
          body.classList.toggle("modoClaro");
          body.classList.toggle("modoOscuro");
          if(textInfo.textContent == "Modo Oscuro"){
            textInfo.textContent = "Modo Claro";
          }else{
            textInfo.textContent = "Modo Oscuro";
          }
      })
   //panel imagen - texto
   const botonImg = document.getElementById('panel1')
   const botonTexto = document.getElementById('panel2')
   const aside = document.querySelector('#aside')
   const paneli = document.querySelector('#aside-title')
   const panelt = document.querySelector('#aside-imagen')


   botonImg.addEventListener("click", ()=>{
   aside.classList.remove("ocultar");
   paneli.classList.add("ocultar");
   panelt.classList.remove("ocultar")
   });

   botonTexto.addEventListener("click", ()=>{
    aside.classList.remove("ocultar");
    panelt.classList.add("ocultar");
    paneli.classList.remove("ocultar")
    });
    //descarga de meme

    let descarga = document.getElementById("download-meme-button");
descarga.addEventListener("click", () => {
  domtoimage.toBlob(document.querySelector(".im")).then(function (blob){
    window.saveAs(blob, "my-node.png");
  });
});

//link para mostrar imagen en el background
let cambiarImg = document.getElementById("url-img");
function  imagenUrl() {
document.getElementById("im").style.backgroundImage = cambiarImg.value;}

cambiarImg.addEvenetListener('input',imagenUrl)



