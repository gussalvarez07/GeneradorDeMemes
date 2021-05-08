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
const negativo= document.getElementById('negativo');
const saturado= document.getElementById('saturado');

const divColor = document.getElementById("divcolor");
const reestablecerFiltros = document.querySelector('#reestablecerFiltros');

const actualizarFiltros = (e) => {
  divColor.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${constraste.value}%) blur(${desenfoque.value}px) grayscale(${grises.value}%) sepia(${sepia.value}) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
};

brillo.addEventListener("change", actualizarFiltros);
opacidad.addEventListener("change", actualizarFiltros);
constraste.addEventListener("change", actualizarFiltros);
desenfoque.addEventListener("change", actualizarFiltros);
grises.addEventListener("change", actualizarFiltros);
sepia.addEventListener("change", actualizarFiltros);
hue.addEventListener("change", actualizarFiltros);
negativo.addEventListener("change", actualizarFiltros);
saturado.addEventListener("change", actualizarFiltros);



reestablecerFiltros.addEventListener('click', () =>{
  brillo.value = 1;
  opacidad.value = 1;
  contraste.value = 100;
  desenfoque.value = 0;
  grises.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturado.value = 100;
  negativo.value = 0;
  actualizarFiltros();
});





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

//Tamanio dl texto

const textoTamanio = document.querySelector("#text-size-input")

textoTamanio.addEventListener("change", () =>{
  topText.style.fontSize = `${textoTamanio.value}px`;
  bottomText.style.fontSize = `${textoTamanio.value}px`;
})
// Texto alineado
// Align text
const alignLeft = document.querySelector(".alignLeft");
const alignCenter = document.querySelector(".alignCenter");
const alignRight = document.querySelector(".alignRight");

alignLeft.addEventListener("click",() =>{
  topText.style.textAlign = `left`;
  bottomText.style.textAlign = `left`;
});
alignCenter.addEventListener("click",() =>{
  topText.style.textAlign = `center`;
  bottomText.style.textAlign = `center`;
});
alignRight.addEventListener("click",() =>{
  topText.style.textAlign = `right`;
  bottomText.style.textAlign = `right`;
});

//Color fuente
const textoColor = document.querySelector("#text-color-input")

textoColor.addEventListener("change", () => {
  topText.style.color = textoColor.value;
  bottomText.style.color = textoColor.value;
})
//Color fondo
const fondoColor = document.querySelector("#text-background-color-input")
const divsuperior = document.querySelector(".top")
const divinferior = document.querySelector(".bottom")

fondoColor.addEventListener("input", () => {
  divsuperior.style.backgroundColor = fondoColor.value;
  divinferior.style.backgroundColor = fondoColor.value;

});

// Fondo transparente
const checkboxBackground = document.querySelector("#text-no-background-checkbox");
checkboxBackground.addEventListener("change", () => {
  if(checkboxBackground.checked){
    divsuperior.style.backgroundColor = 'transparent'
    divinferior.style.backgroundColor = 'transparent'
  }else{
    divsuperior.style.backgroundColor = fondoColor.value;
    divinferior.style.backgroundColor = fondoColor.value;
  }
});

//Contorno text panel
const contornoNone = document.getElementById ('contorno-none');
const contornoClaro = document.getElementById ('contorno-claro');
const contornoOscuro = document.getElementById ('contorno-oscuro');


contornoNone.addEventListener ('click', () =>{
    topText.style.textShadow = "none";
   bottomText.style.textShadow = "none";
});

contornoClaro.addEventListener ('click', () =>{
    topText.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
  bottomText.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
});

contornoOscuro.addEventListener ('click', ()=>{
    topText.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px";
    bottomText.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -1px -2px";
});

//Espaciado panel texto
espaciado.addEventListener('input', ()=>{
    topText.style.padding = espaciado.value + 'px';
    bottomText.style.padding = espaciado.value + 'px';
  })

  //interlineado
  const interlineado = document.getElementById('interlineado');

interlineado.addEventListener('input', ()=>{
    topText.style.lineHeight = interlineado.value;
    bottomText.style.lineHeight = interlineado.value;
})
