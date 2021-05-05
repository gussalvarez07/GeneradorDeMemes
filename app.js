function saludar () {
  // código que se ejecuta después de que se cargó el documento
console.log('hola mundo!');
}



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
 document.getElementById("im").src = cambiarImg.value;
 }

cambiarImg.addEventListener('input',imagenUrl)

//Color imagen div
let color = document.getElementById("mezclador");
  function cambiarcolor( ){
 
   document.getElementById("divcolor").style.backgroundColor =`${color.value}`;
}

color.addEventListener('input', cambiarcolor)
//fondo imagen


//filtros imagen

const brillo = document.getElementById("brillo");
const opacidad = document.getElementById('opacidad');
const constraste = document.getElementById('contraste');
const desenfoque = document.getElementById('desenfoque');
const grises = document.getElementById('grises');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturado = document.getElementById('saturado');
const negativo= document.getElementById('negativo');

const divColor = document.getElementById("divcolor");

const actualizarFiltros = (e) => {
  console.log(e.target.value); 
  divColor.style.filter = `brightness(${e.target.value}) opacity(${opacidad.value}) contrast(${constraste.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) sepia(${sepia.value}) hue-rotate(${hue.value}deg) `;
};
//NO ME LEE DESENFOCAR, SATURADO NI NEGATIVO
brillo.addEventListener("change", actualizarFiltros);
opacidad.addEventListener("change", actualizarFiltros);
constraste.addEventListener("change", actualizarFiltros);
desenfoque.addEventListener("change", actualizarFiltros);
grises.addEventListener("change", actualizarFiltros);
sepia.addEventListener("change", actualizarFiltros);
hue.addEventListener("change", actualizarFiltros);
//saturado.addEventListener("change", actualizarFiltros);
negativo.addEventListener("change", actualizarFiltros);






//restablecerFiltros.addEventListener('click',()=>{
 // brillo.value = 1; 
  //actualizarFiltros();
//})


//Agregar textos 
const topText = document.querySelector(".title-superior");
const bottomText = document.querySelector(".title-inferior");
const topTextEdit = document.querySelector(".topTextEdit");
const bottomTextEdit = document.querySelector(".bottomTextEdit");


topTextEdit.addEventListener("input", () =>{
  topText.innerText = topTextEdit.value;
});

bottomTextEdit.addEventListener("input", () =>{
  bottomText.innerText = bottomTextEdit.value;
});
//
const checkboxSup = document.querySelector("#no-top-text-checkbox")
const checkboxInf = document.querySelector("#no-bottom-text-checkbox")


checkboxSup.addEventListener('change',() =>{
  if(checkboxSup.checked){
topText.classList.add("ocultar");
topTextEdit.disabled = true;
  }else{
    topTitle.classList.remove("ocultar");
    topTextEdit.disabled = false;
  }
  
})


checkboxInf.addEventListener('change',() =>{
  if(checkboxInf.checked){
bottomText.classList.add("ocultar");
bottomTextEdit.disabled = true;
  }else{
    bottomText.classList.remove("ocultar");
    bottomTextEdit.disabled = false;
  }
  
})