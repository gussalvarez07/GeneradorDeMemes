# Observaciones

Agus, felicitaciones por la entrega de tu trabajo. Estoy muy contenta recorriendolo, se nota que pusiste mucho esfuerzo en que te quedara lo mejor posible. El funcionamiento está muy bien, el codigo es claro y se nota el esfuerzo puesto a cada paso. Una observacion general es una desprolijidad generalizada en tu web, en su aspecto visual, y tambien en tu HTML, CSS y JS. Hay extensiones de VSCode que te corrigen eso (te recomiendo prettier), pero tambien es bueno que te acostumbres vos a escribir codigo prolijo de una. Te dejo varios comentarios al respecto.

## Estructura correcta de documento HTML

Varias observaciones.

Utilizás ocasionalmente etiquetas `br` para separar las cosas: no llegué a comentarlo en clase, pero esto es incorrecto. Esa etiqueta es un resabio de viejas épocas en las cuales css no era tan poderoso como ahora, pero usarla hoy viola uno de los principios básicos de programación: la separación de responsabilidades. Los estilos se dan con css, la estructura se da con html. Una decisión de estilo como un espaciado entre dos elementos debe controlarse con css -flex, elementos en bloque, etc, no con `br`.

Tenés una orden mal escrita en tu header, lo que puede afectar el responsive en celulares.

El lenguaje de tu documento está en inglés.

Te dejé varios otros comentarios a lo largo del código.

## Respeta el diseño dado

No cumplido en el formulario. Entiendo que el menú era desafiante, pero tomá en cuenta para futuros trabajos, y para el mundo laboral si deseas seguir una carrera en esta industria, que el diseño nunca es optativo, ni una sugerencia: debemos seguirlo a rajatabla. Este punto es el que más puntaje te quita de la nota final, ya que si bien el codigo esta fantastico, consideramos este requisito muy importante para prepararlas para las exigencias de la industria.

## Respeta el funcionamiento

Los filtros no funcionan bien, te dejé escrito en el HTML por qué. 

## Responsive funciona correctamente

Cumplido

## Buena estructura de proyecto

Falta con urgencia un favicon. Los nombres no deben ser index1, app1, deben ser index.html, app.js y style.css. Borrá la carpeta .vscode antes de una entrega.

## Código bien indentado

Muy desprolijo en html, css y js. 

Recordá que siempre podés hacerlo automaticamente con VSCode haciendo click derecho + format document, pero yo te recomiendo que te acostumbres a tabular bien sola. Es muy importante para entender qué cosa está adentro de otra. Cada vez que abris una etiqueta, el contenido de esa etiqueta debe ir un espaciado hacia adentro. O sea, en lugar de esto:

```html
<div>
    <h3 class="tittle-box-aside">Fondo</h3>
<div class="box-aside-color-select">
<div class="color-ffff">
        <input aria-label="Color de fondo de la imagen" type="color" id="fondo-img" value="#fffff">
        <span>#FFFFF</span>
</div>

<!-- PROPIEDADES DEL FONDO -->
<div class="panel-control-column">
        <select aria-label="Modo de mezcla de fondo de imagen" id="prop-fondo-img" class="panel-control-input">
            <option value="unset">Ninguno</option>
            <option value="lighten">Aclarar</option>
            <option value="darken">Oscurecer</option>
            <option value="difference">Diferencia</option>
            <option value="Luminosity">Luminosidad</option>
            <option value="multiply">Multiplicar</option>
        </select>
</div>
</div>
</div>    
```
deberias tener esto:

```html
<div>
  <h3 class="tittle-box-aside">Fondo</h3>
  <div class="box-aside-color-select">
    <div class="color-ffff">
      <input aria-label="Color de fondo de la imagen" type="color" id="fondo-img" value="#fffff">
        <span>#FFFFF</span>
    </div>
    <div class="panel-control-column">
      <select aria-label="Modo de mezcla de fondo de imagen" id="prop-fondo-img" class="panel-control-input">
        <option value="unset">Ninguno</option>
        <option value="lighten">Aclarar</option>
        <option value="darken">Oscurecer</option>
        <option value="difference">Diferencia</option>
        <option value="Luminosity">Luminosidad</option>
        <option value="multiply">Multiplicar</option>
      </select>
    </div>
  </div>
</div>    
```

A veces no dejas el espaciado correcto en cada orden de css. En lugar de escribir por ejemplo `.name{`, deja un espacio entre el nombre de la clase y la llave: `.name {`

En CSS se cumplen las mismas reglas que en html, si dejas tabulado significa que estas adentro de otra cosa (por ejemplo una media query).


## Comentarios que permiten mejorar la legibilidad del código

Cumplido.

## Uso correcto de etiquetas semánticas

Cumplido salvo por reemplazar los label del form por h3, una mala decision que impacta negativamente en la accesibilidad, y el div en lugar de botón. 

## Buenos nombres de clases

Cuando decimos que un nombre de clase debe ser descriptivo, lo decimos en un sentido funcional: qué rol cumple este elemento en el código. Los colores de los elementos, su forma, su estilo, su posición, todas esas cosas pueden cambiar y efectivamente cambian todo el tiempo en las webs que hacemos. El botón que hoy es un circulo mañana será cuadrado; la sección que estaba primera mañana estará tercera. Esos factores no son buenos descriptores, y no deberían ser parte de nuestros nombres de clases.

Ocasionalmente usas etiquetas de html como nombres de clase (div-container-imagen por ejemplo). Los nombres de clase describen funcionalidades, no codigo. Qué hace ese div en tu pagina? Que funcion cumple? "contenedor-imagen" es mas correcta.

En resumen, a la hora de darle un nombre de clase a algo, pensá qué es ese elemento en tu web, qué función cumple en tu página.

Mantené siempre la costumbre de separar las palabras con-guiones en HTML, eso incluye a los nombres de clase y a los ids. La sintaxis camelCase se reserva para javascript.

## Buenos nombres de funciones y variables

Cumplido.

## Reutilización de estilos

No cumplido del todo. Dejo un par de comentarios en tu CSS. Aprovechá que tus clases son reutilizables! Si dos elementos son iguales **deben tener el mismo nombre de clase**. 

## Funciones pequeñas

Cumplido.

## Accesibilidad

La pagina esta en español, pero el lenguaje del documento es ingles. Un lector de pantalla trataria de leerla en ingles (va a leer "yiniradour di mims") y buscadores como google van a recomendar esta web a angloparlantes. El `lang` del documento debe coincidir con el lenguaje que usan los usuarios de esta pagina.

- Los label del formulario deben o bien rodear al elemento, o bien tener el atributo "for". Eso es asi para que el lector de pantalla pueda identificar a que elemento se esta describiendo.
- Esto tambien impacta en la usabilidad. Cuando el label rodea al elemento, el click en el label es un click en el elemento. Esto ayuda por ejemplo a usuarios con dificultades motrices: es dificil hacer click en un checkbox chiquitito, pero mas facil hacer click en el label. Eso no ocurre en tu pagina.
  Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento.
  En muchisimas ocasiones esto no se cumple en su trabajo y eso impacta en la accesibilidad.

- Los titulos no son label, ni viceversa. Un titulo es el encabezado de una seccion. Un elemento de formulario es descripto por un label. El lector de pantalla separa los titulos de los elementos de formulario - como puede saber el usuario del lector de pantalla para que sirve el input de tipo color si no tiene ni label, ni aria-label?

- Faltan aria label en todos los elementos que en el diseño original no tienen label, como los botones de alineacion de texto y la imagen en si.

- el boton de descarga es un div, en lugar de un boton! eso significa que no se puede usar con el teclado.

## Commits con mensajes adecuados

Muy poquitos commit con nombres inadecuados, "arreglos" no sirve, me tenes que aclarar qué arreglos hiciste. Pensá que sos el jefe de un grupo de 10 desarrolladores que tocan el codigo todo el tiempo: necesitas encontrar el commit en donde se modificó el h1 de la pagina. Como lo haces si los mensajes de commit son: "arreglos", "cambios", "segundo cambio"? Tus commits deben describir adecuadamente lo que hiciste, y deben ser breves para poder encontrar rapidamente lo que buscas. 

Hace falta con urgencia un readme. Cosas como esta, el favicon, los commits, estan en las consignas, e impactan en tu nota final. Chequeá estos puntos en proximos trabajos!

# Nota final: 7
