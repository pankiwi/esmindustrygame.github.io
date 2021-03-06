/**Referencia al div content */
const content = document.getElementById('content');

/**Sobrescribe el contenido del div*/
const overwriteContent = (html) => {if(typeof html === 'string'){content.innerHTML = html}else{console.error('html debe ser tipo "String"')}};

/**Escribe contenido en el div */
const writeContent = (html) => {if(typeof html === 'string'){content.innerHTML = content.innerHTML + html}else{console.error('html debe ser tipo "String"');}}


/**Crea un texto <span>
 * @param {Object} data Datos del texto:
 * - data.content: (String) Contenido
 * - data.id: (String) Id
 * - data.class: (String) Clases
 * - data.style: (String) Estilo (.css)
 * - data.code: (Boolean) Si el texto es código
 * - data.codeBig: (Boolean) Si el texto es una página de código
 * @returns {String} <span>
*/
const span = (data) => {
  if(!data){console.error('Datos del span no definidos');}
  else if(typeof data === 'string'){
    data = data.replaceAll('\n','<br>')
    return `<span>${data}</span>`
  }else if(typeof data === 'object'){
    if(!data.content){data.content = '';}
    if(typeof data.content !== 'string'){console.error('data.content debe ser tipo "string"');}
    if(!data.class){data.class = '';}
    if(typeof data.class !== 'string'){console.error('data.class debe ser tipo "string"');}
    if(!data.id){data.id = '';}
    if(typeof data.id !== 'string'){console.error('data.id debe ser tipo "string"');}
    if(!data.style){data.style = '';}
    if(typeof data.style !== 'string'){console.error('data.style debe ser tipo "string"');}

    if(typeof data.code !== 'boolean' && typeof data.code !== 'undefined'){console.error('data.code debe ser tipo "Boolean"')}
    if(data.code){
      data.class = data.class + ' codeText ';
      data.content = data.content.replaceAll('<','&lt');
      data.content = data.content.replaceAll('>','&gt');
      data.content = data.content.replaceAll('&ltbr&gt','<br>');
    }

    if(typeof data.codeBig !== 'boolean' && typeof data.codeBig !== 'undefined'){console.error('data.codeBig debe ser tipo "Boolean"')}
    if(data.codeBig){
      data.class = data.class + ' codeTextBigger ';
      data.content = data.content.replaceAll('<','&lt');
      data.content = data.content.replaceAll('>','&gt');
      data.content = data.content.replaceAll('&ltbr&gt','<br>');
    }
    data.content = data.content.replaceAll('\n','<br>')
    return `<span id='${data.id}' class='${data.class}' style='${data.style}'>${data.content}</span>`
  } 
}
/**Crea un texto <a>
 * @param {Object} data Datos del texto:
 * - data.content: (String) Contenido
 * - data.id: (String) Id
 * - data.class: (String) Clases
 * - data.style: (String) Estilo (.css)
 * - data.href: (String) Enlace para redirección
 * - data.styledText = (Boolean) Si el texto tendrá aspecto de Link
 * - data.newTab (Boolean) Abrir el link en una nueva pestaña
 * @returns {String} <a>
*/
const a = (data) => {
  if(!data){return console.error('Datos del a no definidos');}
  else if(typeof data === 'string'){
    return `<a style='color: var(--main);' href='#'>${data}</a>`
  }else if(typeof data === 'object'){
    if(!data.content){data.content = '';}
    if(typeof data.content !== 'string'){console.error('data.content debe ser tipo "string"');}
    if(!data.href){data.href = '';}
    if(typeof data.href !== 'string'){console.error('data.href debe ser tipo "string"');}
    if(!data.class){data.class = '';}
    if(typeof data.class !== 'string'){console.error('data.class debe ser tipo "string"');}
    
    if(typeof data.styledText !== 'boolean' && typeof data.styledText !== 'undefined'){console.error('data.styledText debe ser tipo "Boolean"')}
    if(data.styledText === true || typeof data.styledText === 'undefined'){data.class = data.class + ' aLink ';}
    else{data.class = data.class + ' noDecoration'}
    
    if(!data.id){data.id = '';}
    if(typeof data.id !== 'string'){console.error('data.id debe ser tipo "string"');}
    if(!data.style){data.style = '';}
    if(typeof data.newTab !== 'boolean'&& typeof data.newTab !== 'undefined'){console.error('data.newTab debe ser tipo "Boolean"')}
    if(!data.newTab){data.newTab = '';}
    else{data.newTab = 'target="_blank"'}
    if(typeof data.style !== 'string'){console.error('data.style debe ser tipo "string"');}
    return `<a id='${data.id}' class='${data.class}' style='${data.styledText}${data.style}' href='${data.href}' ${data.newTab}>${data.content}</a>`
  } 
}
/**Crea un texto en italic/cursiva<p>
 * @param {Object} data Datos del texto italic:
 * - data.content: (String) Contenido
 * - data.id: (String) Id
 * - data.class: (String) Clases
 * - data.style: (String) Estilo (.css)
 * @returns {String} <i>
*/
const i = (data) => {
  if(!data){console.error('Datos del texto no definidos');}
  else if(typeof data === 'string'){
    return `<i>${data}</i>`
  }else if(typeof data === 'object'){
    if(!data.content){data.content = '';}
    if(typeof data.content !== 'string'){console.error('data.content debe ser tipo "string"');}
    if(!data.class){data.class = '';}
    if(typeof data.class !== 'string'){console.error('data.class debe ser tipo "string"');}
    if(!data.id){data.id = '';}
    if(typeof data.id !== 'string'){console.error('data.id debe ser tipo "string"');}
    if(!data.style){data.style = '';}
    if(typeof data.style !== 'string'){console.error('data.style debe ser tipo "string"');}
    return `<i id='${data.id}' class='${data.class}' style='${data.style}'>${data.content}</i>`
  } 
}
/**Crea un texto en bold/gruesita<p>
 * @param {Object} data Datos del texto bold:
 * - data.content: (String) Contenido
 * - data.id: (String) Id
 * - data.class: (String) Clases
 * - data.style: (String) Estilo (.css)
 * @returns {String} <i>
*/
const b = (data) => {
  if(!data){console.error('Datos del texto no definidos');}
  else if(typeof data === 'string'){
    return `<b>${data}</b>`
  }else if(typeof data === 'object'){
    if(!data.content){data.content = '';}
    if(typeof data.content !== 'string'){console.error('data.content debe ser tipo "string"');}
    if(!data.class){data.class = '';}
    if(typeof data.class !== 'string'){console.error('data.class debe ser tipo "string"');}
    if(!data.id){data.id = '';}
    if(typeof data.id !== 'string'){console.error('data.id debe ser tipo "string"');}
    if(!data.style){data.style = '';}
    if(typeof data.style !== 'string'){console.error('data.style debe ser tipo "string"');}
    return `<b id='${data.id}' class='${data.class}' style='${data.style}'>${data.content}</b>`
  } 
}
/**Muestra una imagen <img>
 * @param {Object} data Datos:
 * - data.img: (String) Directorio de la imagen
 * - data.width: (String) Ancho
 * - data.height: (String) Alto
 * - data.class: (String) Clases
 * - data.id: (String) Id
 * - data.style: (String) Estilo (.css)
 * - data.url: (Boolean) Si la imagen es una url de internet
 * - data.center: (Boolean) Si la imagen debe estar centrada
 * @returns {String} <img>
*/
const img = (data) => {
  if(!data){console.error('Datos de la imagen no definidos');}
  else if(typeof data === 'string'){
    return `<img src='${dirString}content/images/${data}'></img>`
  }else if(typeof data === 'object'){
    if(!data.img){return console.error('data.img debe estar definido (directorio de la imagen)');}
    if(typeof data.img !== 'string'){console.error('data.img debe ser tipo string');}
    if(!data.width){data.width = '';}
    if(typeof data.width !== 'string' && typeof data.width !== 'number' ){console.error('data.width debe ser tipo "string" o "number"');}
    if(!data.height){data.height = '';}
    if(typeof data.height !== 'string' && typeof data.height !== 'number' ){console.error('data.height debe ser tipo "string" o "number"');}
    if(!data.class){data.class = '';}
    if(typeof data.class !== 'string'){console.error('data.class debe ser tipo "string"');}
    if(!data.id){data.id = '';}
    if(typeof data.id !== 'string'){console.error('data.id debe ser tipo "string"');}
    if(!data.style){data.style = '';}
    if(typeof data.style !== 'string'){console.error('data.style debe ser tipo "string"');}
    if(typeof data.center !== 'boolean' && typeof data.center !== 'undefined'){console.error('data.center debe ser tipo "Boolean"')}
    if(data.center){data.class = data.class + ' imgCenter '}
    if(typeof data.url !== 'boolean'&& typeof data.url !== 'undefined'){console.error('data.url debe ser tipo "Boolean"')}
    if(!data.url){
      return `<img id='${data.id}' class='${data.class}' style='${data.style}' src='${dirString}content/images/${data.img}' width='${data.width}' height='${data.height}'>`
    }else{return `<img id='${data.id}' class='${data.class}' style='${data.style}' src='${data.img}' width='${data.width}' height='${data.height}'>`}
  }else{console.error('data debe ser tipo "string" o "object"{}');}
  
}
/**Crea un salto de linea*/
const br = () => {
  return '<br>'
}

/**Crea una tabla de objetos (Minerales) 
 * @param {Object} data Datos:
 * - data.content.explosividad: (String) Porcentaje de explosividad
 * - data.content.inflamabiidad: (String) Porcentaje de inflamabilidad
 * - data.content.radioactividad: (String) Porcentaje de radioactividad
 * - data.content.cargaElectrica: (String) Porcentaje de carga electrica
 * - data.content.nota: (String) Nota que trae consigo el objeto
 * - data.content.nombreInterno: (String) Nombre interno del objeto en el juego
 * - data.content.color: (String) Color en hex del objeto
 * - data.content.dureza: (String) Dureza del objeto
 * @return {String} <table>
*/
const tableObjetos = (data) => {
  if(typeof data !== 'object'){return console.error('data debe ser tipo "Object"')}
  else if(typeof data.content !== 'object'){return console.error('data.content debe ser tipo "Object"')}
  let float;
  if(data.float === 'right'){float = 'float: right;'}else{float = 'float: left;'}
  let tbl = `<div class="table-div" style='${float}'><table> <tr><th>Propiedad</th><th>Valor</th></tr>`;
  
  if(typeof data.content.descripcion !== 'string' && typeof data.content.descripcion !== 'undefined'){console.error('data.content.descripcion debe ser tipo "String"')}
  if((typeof data.content.explosividad !== 'number' && typeof data.content.explosividad !== 'string') && typeof data.content.explosividad !== 'undefined'){console.error('data.content.explosividad debe ser tipo "String" o "Int"')}
  if((typeof data.content.inflamabilidad !== 'number' && typeof data.content.inflamabilidad !== 'string') && typeof data.content.inflamabilidad !== 'undefined'){console.error('data.content.inflamabilidad debe ser tipo "String" o "Int"')}
  if((typeof data.content.radioactividad !== 'number' && typeof data.content.radioactividad !== 'string') && typeof data.content.radioactividad !== 'undefined'){console.error('data.content.radioactividad debe ser tipo "String" o "Int"')}
  if((typeof data.content.cargaElectrica !== 'number' && typeof data.content.cargaElectrica !== 'string') && typeof data.content.cargaElectrica !== 'undefined'){console.error('data.content.cargaElectrica debe ser tipo "String" o "Int"')}
  if(typeof data.content.nota !== 'string' && typeof data.content.nota !== 'undefined'){console.error('data.content.nota debe ser tipo "String"')}
  if(typeof data.content.nombreInterno !== 'string' && typeof data.content.nombreInterno !== 'undefined'){console.error('data.content.nombreInterno debe ser tipo "String"')}
  if(typeof data.content.color !== 'string' && typeof data.content.color !== 'undefined'){console.error('data.content.color debe ser tipo "String"')}
  if(typeof data.content.dureza !== 'string' && typeof data.content.dureza !== 'undefined'){console.error('data.content.dureza debe ser tipo "String"')}

  if(data.content.descripcion){if(!data.content.descripcion.endsWith('.')){data.content.descripcion = data.content.descripcion + '.'}}


  if(typeof data.content.descripcion !== 'undefined'){tbl = tbl + `<tr><td>Descripción</td><td>${data.content.descripcion}</td></tr>`}
  if(typeof data.content.explosividad !== 'undefined'){tbl = tbl + `<tr><td>Explosividad</td><td>${data.content.explosividad}%</td></tr>`}
  if(typeof data.content.inflamabilidad !== 'undefined'){tbl = tbl + `<tr><td>Inflamabilidad</td><td>${data.content.inflamabilidad}%</td></tr>`}
  if(typeof data.content.radioactividad !== 'undefined'){tbl = tbl + `<tr><td>Radioactividad</td><td>${data.content.radioactividad}%</td></tr>`}
  if(typeof data.content.cargaElectrica !== 'undefined'){tbl = tbl + `<tr><td>Carga eléctrica</td><td>${data.content.cargaElectrica}%</td></tr>`}
  if(typeof data.content.nombreInterno !== 'undefined'){
    data.content.nombreInterno = data.content.nombreInterno.replaceAll('<','&lt');
    data.content.nombreInterno = data.content.nombreInterno.replaceAll('>','&gt');
    data.content.nombreInterno = data.content.nombreInterno.replaceAll('&ltbr&gt','<br>');
    tbl = tbl + `<tr><td>Nombre Interno</td><td><span class='codeText'>${data.content.nombreInterno}</span></td></tr>`
  }
  if(typeof data.content.color !== 'undefined'){
    
    
    tbl = tbl + `<tr><td>Color</td><td><span class='codeText'>${data.content.color}</spans><div class='color-square', style='background-color: ${data.content.color};'></div></td></tr>`
  }
  if(typeof data.content.dureza !== 'undefined'){tbl = tbl + `<tr><td>Dureza</td><td>${data.content.dureza}</td></tr>`}
  if(typeof data.content.nota !== 'undefined'){tbl = tbl + `<tr><td>Nota</td><td>${data.content.nota}</td></tr>`}
  return tbl + '</table></div>';
}