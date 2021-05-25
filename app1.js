//LLAMANDO DEL DOM EL MAIN CONTAINER
const btnImagen = document.getElementById ('btn-imagen');
const solapaImagen= document.getElementById ('solapa-imagen');
const btnTexto = document.getElementById ('btn-texto');
const solapaTexto = document.getElementById ('solapa-texto');
const divAside = document.getElementById('div-aside');

btnImagen.addEventListener('click', () => {
    solapaImagen.style.display = 'block';
    solapaTexto.style.display = 'none';
    divAside.style.display = 'block';
});

btnTexto.addEventListener('click', () => {
    solapaTexto.style.display = 'block';
    solapaImagen.style.display = 'none';
    divAside.style.display = 'block';

});

// MODO NOCTURNO

const botonClaro = document.getElementById ('modo-claro');

const botonOscuro = document.getElementById ('modo-oscuro');

const cambiarModoClaro = () =>{
    document.body.classList.remove('cambiar-modo-oscuro');
    document.body.classList.add('cambiar-modo-claro');
};

const cambioModoOscuro = () =>{
    document.body.classList.remove('cambiar-modo-claro');
    document.body.classList.add('cambiar-modo-oscuro');
}

//URL

const urlImagen = document.getElementById 
('url-img-input'); 

const divUrl = document.getElementById ('imagen-meme');

urlImagen.addEventListener('input',() =>{
    const url = urlImagen.value;
    divUrl.style.backgroundImage = `url('${url}')`; 
});

//FONDO
const fondoImg = document.getElementById ('fondo-img');
const propFondoImg = document.getElementById ('prop-fondo-img');

fondoImg.addEventListener ('input', () =>{
    const colorFondo = fondoImg.value;
    divUrl.style.backgroundColor = colorFondo;
})

propFondoImg.addEventListener ('change', () =>{
    divUrl.style.backgroundBlendMode = propFondoImg.value;
})

//filtros

//llamando los input filtros

const brillo = document.getElementById ('brillo');
const opacidad = document.getElementById ('opacidad');
const contraste = document.getElementById ('contraste');
const desenfoque = document.getElementById ('desenfoque');
const escalaDeGrises = document.getElementById ('escala-de-grises');
const sepia = document.getElementById ('sepia');
const hue = document.getElementById ('hue');
const saturado = document.getElementById ('saturado');
const negativo = document.getElementById ('negativo');
const restablecerFiltros = document.getElementById ('restablecer-filtros');

const actualizarFiltros = ()=>{
    divUrl.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escalaDeGrises.value}%) sepia(${sepia.value}) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})`;
}

brillo.addEventListener('change', actualizarFiltros); 
opacidad.addEventListener('change', actualizarFiltros);
contraste.addEventListener('change', actualizarFiltros);
desenfoque.addEventListener('change', actualizarFiltros);
escalaDeGrises.addEventListener('change', actualizarFiltros);
sepia.addEventListener('change', actualizarFiltros);
hue.addEventListener('change', actualizarFiltros);
saturado.addEventListener('change', actualizarFiltros);
negativo.addEventListener('change', actualizarFiltros);

restablecerFiltros.addEventListener('click',()=>{
    brillo.value = 1;
    opacidad.value = 1;
    contraste.value = 100;
    desenfoque.value = 0;
    escalaDeGrises.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturado.value = 100;
    negativo.value = -1;
    actualizarFiltros();
})

//Aplicando innetHTML a los input

//LLAMANDO LOS INPUT DE TEXTO SUPERIOR E INFERIOR

const textoSuperior = document.getElementById('texto-superior');
const textoInferior = document.getElementById('texto-inferior');

//LLAMANDO LOS PARRAFOS DEL DIV

const pTextoSuperior = document.getElementById('p-texto-superior');
const pTextoInferior = document.getElementById('p-texto-inferior');

textoSuperior.addEventListener('input', ()=>{
    pTextoSuperior.innerText = textoSuperior.value;
});

textoInferior.addEventListener('input', ()=>{
    pTextoInferior.innerText = textoInferior.value;
});

//CHECKBOX TEXTO

const checkboxSuperior = document.getElementById('checkbox-superior');
const checkboxInferior = document.getElementById('checkbox-inferior');

checkboxSuperior.addEventListener ('click',()=>{
    if (checkboxSuperior.checked){
        pTextoSuperior.style.display = 'none'
        textoSuperior.disabled = true;
    }else{
        pTextoSuperior.style.display ='flex'
        textoSuperior.disabled = false;
    }
})

checkboxInferior.addEventListener('click',()=>{
    if (checkboxInferior.checked){
        pTextoInferior.style.display = 'none'
        textoInferior.disabled = true;
    }else{
        pTextoInferior.style.display = 'flex'
        textoInferior.disabled = false;
    }
});

//FUENTE TEXTO

const fuentesTexto = document.getElementById('fuentes-texto');

fuentesTexto.addEventListener ('input',()=>{
    pTextoSuperior.style.fontFamily = fuentesTexto.value;
    pTextoInferior.style.fontFamily = fuentesTexto.value;
});

//TAMAÑO DE TEXTO

const fontSize = document.getElementById ('font-size');

fontSize.addEventListener ('input',()=>{
    pTextoSuperior.style.fontSize = `${fontSize.value}px`;
    pTextoInferior.style.fontSize = `${fontSize.value}px`;
});

//alineación del texto

const textLeft = document.getElementById('text-left');
const textCenter = document.getElementById('text-center');
const textRight = document.getElementById('text-right');

textLeft.addEventListener('click', () =>{
    pTextoSuperior.style.textAlign = 'left';
    pTextoInferior.style.textAlign = 'left';
});

textCenter.addEventListener('click', () =>{
    pTextoSuperior.style.textAlign = 'center';
    pTextoInferior.style.textAlign = 'center';
});

textRight.addEventListener('click', () =>{
    pTextoSuperior.style.textAlign = 'right';
    pTextoInferior.style.textAlign = 'right';
});


//COLOR LETRA

const colorLetra = document.getElementById('color-letra');
const backgroundColor = document.getElementById('background-color');
const spanColorLetra = document.getElementById('span-color-letra');
const spanBackgroundColor = document.getElementById('span-background-color');

colorLetra.addEventListener ('input', ()=>{
    pTextoSuperior.style.color = colorLetra.value;
    pTextoInferior.style.color = colorLetra.value;
    spanColorLetra.textContent = `${colorLetra.value}`;
})

// BACKGROUND COLOR

backgroundColor.addEventListener('input', ()=>{
    pTextoSuperior.style.backgroundColor = backgroundColor.value;
    pTextoInferior.style.backgroundColor = backgroundColor.value;
    spanBackgroundColor.textContent = `${backgroundColor.value}`;
})

//CHECKBOX TRANSPARENTE

const checkboxTransparente = document.getElementById('fondo-transparente');

checkboxTransparente.addEventListener ('change',()=>{
    if(checkboxTransparente.checked){
        divUrl.style.backgroundColor = "transparent";
    }else{
        divUrl.style.backgroundColor = "black"; //ver esto
    }
});
        

//BOTON DESCARGA

const botonDescarga = document.getElementById('boton-descarga');

botonDescarga.addEventListener("click",()=>{
    domtoimage.toBlob(document.querySelector("#div-container-imagen")).then(function (blob) {
        window.saveAs(blob, "my-node.png");
      });
})

//CONTORNO

const contornoNone = document.getElementById ('contorno-none');
const contornoClaro = document.getElementById ('contorno-claro');
const contornoOscuro = document.getElementById ('contorno-oscuro');

contornoNone.addEventListener ('click', () =>{
    pTextoSuperior.style.textShadow = "none";
    pTextoInferior.style.textShadow = "none";
})

contornoClaro.addEventListener ('click', () =>{
    pTextoSuperior.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
    pTextoInferior.style.textShadow = "rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px";
})

contornoOscuro.addEventListener ('click', ()=>{
    pTextoSuperior.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px";
    pTextoInferior.style.textShadow = "rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px";
})

//INTERLINEADO

const espaciado = document.getElementById ('espaciado');

espaciado.addEventListener('input', ()=>{
    pTextoSuperior.style.padding = espaciado.value + 'px';
    pTextoInferior.style.padding = espaciado.value + 'px';
})

//INTERLINEADO 
const interlineado = document.getElementById('interlineado');

interlineado.addEventListener('input', ()=>{
    pTextoSuperior.style.lineHeight = interlineado.value;
    pTextoInferior.style.lineHeight = interlineado.value;
})


//ICONO CRUZ

//llamando al icono cruz


const iconCruz = document.getElementById ('icon-cruz');


iconCruz.addEventListener ('click', ()=>{
    divAside.style.display = 'none';
})
