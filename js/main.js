addEventListener("DOMContentLoaded", (e) => {

    alert("Favor abrir herramientas de desarrollo para ver la actividad por medio de la consola");
    console.group();
    console.log('METODOS DE CONSOLE' )
    console.log("El objeto  console puede ser accedido desde cualquier objeto global.Windows en el ambito de navegacion y workerGlobalScope_(en-US). Como  variantes especificas de  workes a traves de la propiedad console. Esta expuesto como Windows.console_(es-US), y puede ser rerenciado como console.");
    console.log('METODOS');
    console.log("console.assert(), registra un mensaje y envia una traza de error a la consola si el primer argumento es falso");
    console.log("console.clear(), limpia la consola");
    console.log("console.count(), registra el numero de veces que esta linea ha sido llamada con la etiqueda dada");
    console.log("console.countReset(), reinicia el valor del contador para la etiqueta dada");
    console.log("console.debug(), registra un mensaje con el nivel de debug");
    console.log("console.dir(), muestra un listado ineractivo de las propiedades de un objeto javaScript especifico, Este listado permite usar triangulos de lista desplegables para examinar el contenido de objetos hijo");
    console.log("console.dirxml(), muestra una representacion en forma de arbol de un elemento XML/HTML i es posible o la vista del objeto javaScript si no es posible");
    console.log("console.error(), muestra un mensaje de error. se pueden utilizar sustituciones de cadenas y argumentos adicionales con este metodo");
    console.log("console.group(), crea un nuevo grupo, identando toodos los mensajes subsecuentes un nuevo nivel, para retocede un nivle, se utiliza groupEnd()");
    console.log("console.groupCollapsed(),Crea un nuevo grupo identando todos los mensjaes subsecuentes en un nivel. A diferencia de group(), iniica con linea de gurpo y colopsada, requiriendo el uso de un boton de apertura para expandir el gurpo, para retroceder un nivel se utiliza groupEnd()");
    console.log("console.groupEnd(), finaliza el grupo Actual");
    console.log("console.info(), Muestra un mensaje de informacion en la consolosa, puedes usar sustituciones de cadenas y argumentos adicionales con este metodo");
    console.log("console.log(), para la salida general de la informacion registrada.Puedes usar sustituciones de cadenas y argumentos adicionales con este metodo");
    console.log("console.profile(), Inicia el profiler incluido del navegador(por ejemplo , la firefox performance tool) puedes especificar un nombre apcional para el perfil");
    console.log("console.profileEnd(), detiene el profiler. puedes ver el resultado en la herramienta de rendimiento del navegador( pro ejemplo, la firefox performance tool");
    console.log("consoloe.table(), muestra datos tabuladoresen forma de tabla");
    console.log("console.time(), Iniciaa un temporalizador con un nobre especificad como parametro. hasta  10000 temporizadores simultaneos puede ejecurtase en una pagina determinada");
    console.log("console.timeEnd, detiene el temporizador especificando y registrando el tiempo trancurrido en milisenguno desde que fue iniciado");
    console.log("console.timeLog(); Muestra el valor del temporizadore en la consola");
    console.log("console.timStamp(), agrega un marcador a las herramientas del navegador Timeline");
    console.log("console.trace(), muestra una traza de pila");
    console.log("console.warn(), muestra un mensaje de advertencia. puedes usar sustituciones de cadenas y argumentos adicionales con este metodo")
   console.groupEnd();

   document.querySelector("body").innerHTML=`
   <section>
   <h1>Presentacion</h1>
   <hr></hr>
  <h2>Informacion Personal</h2>
  <p>Mi nombre es <strong>WILMAR GUEVARA CABRERA</strong> Tengo 37 años, vivo en bucaramanga santander, Hace 8 años estoy casado y tengo dos hijos uno de 14 años y otro de 5 años</p>
  <hr></hr>
  <h3>Informacion Laboral</h3>
  <P>Actual mente estoy trabajando en una empresa metalmecanica dedicada a la fabricacion de paneles metalicos para el vaciado de muros en concreto, mi trabajo puntual es deliniante de constuccion. soy la persona que coordina las actividades en las cuales incluyen verificacion de planos estructurales y/o arquitectonicos para el levantamiento y cotizacion del producto</P>
  <hr></hr>
  <h3>Porque decidi estudiuar el tema de programacion en JavaScript</h3>
  <p>Actual mente estoy estudiando Analisis y desarrollo de software del sena (ADSO), este tema es de gran ayuda para complementar mi estudio el cual lo estoy realizando para cambiar mi entorno laboral y porque este tema me apaciona.</p>
  <hr></hr>
  <b>Oprime el boton para direccionar al contenido sobre console </b>
  <br>
  <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/console">
    <button>CONSOLE</button>
  </a> 
   </section>
   
   
`;

    

})