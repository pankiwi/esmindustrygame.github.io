//Chekea subDirs
if(!subDirs){var subDirs = 0;}else if(subDirs < 0 && typeof subDirs !== 'number'){subDirs = 0;}
let dirString = '';
for(let i = 0; i<subDirs; i++){dirString = dirString + '../';}

(() => {
const discordInvite = 'https://discord.gg/dgXjVpxWnn'

//Configure Themes
let themeMode = localStorage.getItem('themeMode');
if(themeMode === 'true'){
  //light
  document.documentElement.style.setProperty('--font-color',' #000');
  document.documentElement.style.setProperty('--background-light-light','var(--white-light-light)');
  document.documentElement.style.setProperty('--background-light','var(--white-light)');
  document.documentElement.style.setProperty('--background','var(--white)');
  document.documentElement.style.setProperty('--background-hover','var(--white-hover)');
  document.documentElement.style.setProperty('--shadow-color','#d1d1d1');
}else{
  //Dark
  document.documentElement.style.setProperty('--font-color',' #fff');
  document.documentElement.style.setProperty('--background-light-light','var(--dark-light-light)');
  document.documentElement.style.setProperty('--background-light','var(--dark-light)');
  document.documentElement.style.setProperty('--background','var(--dark)');
  document.documentElement.style.setProperty('--background-hover','var(--dark-hover)');
  document.documentElement.style.setProperty('--shadow-color','#505050');
}
let colorMode = localStorage.getItem('colorMode');
if(colorMode){
  document.documentElement.style.setProperty('--main-light-light', `var(--${colorMode}-light-light)`);
  document.documentElement.style.setProperty('--main-light', `var(--${colorMode}-light)`);
  document.documentElement.style.setProperty('--main', `var(--${colorMode})`);
  document.documentElement.style.setProperty('--main-hover', `var(--${colorMode}-hover)`);
}

//Replace HTML content
const content = document.getElementById('content');
(document.getElementById('main')).innerHTML = `
<head>
<script src="https://kit.fontawesome.com/f1c716e207.js" crossorigin="anonymous"></script>
  <meta charset='UTF-8'>
  <title>Mindustry Wiki Español</title>
  <link rel='stylesheet' href='${dirString}styles/style.css'>
  <link rel='stylesheet' href='${dirString}styles/content.css'>
  <link rel='stylesheet' href='${dirString}styles/highlight.css'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div id='header'>
  <header>
    <ul id='header-ul-left'>
      <li class='header-element' ><a id='header-favicon'title='Mindustry Wiki Español' href=''><img src='https://esmindustrygame.github.io/wiki/content/images/favicon.png' width='36' height='36' id='header-favicon'></a></li>
      <li class='header-element' ><a id='header-title' title='Página Principal' href=''>Mindustry Wiki Español</a></li>
    </ul>
    <ul id='header-ul-right'>
      <li class='header-element' ><a class='header-button' title='Guias para usuarios nuevos en algun tópico del juego' href='' target='_blank'>Guías</a></li>
      <li class='header-element' ><a class='header-button' title='Se parte de nuestra comunidad de Discord' href='${discordInvite}' target='_blank'>Discord</a></li>
      <li class='header-element' ><div id='header-search'><input id='header-search-input' type='text' placeholder='Buscar'></div></li>
      <li class='header-element' ><img id='config-icon'src='https://esmindustrygame.github.io/wiki/content/images/config.png'></li>
    </ul>
  </header>
</div>
<div id='header-margin'></div>

<div id='container'>
  <div id='sidemenu'>
    <details>
      <summary>Objetos</summary>
      <a href='https://esmindustrygame.github.io/wiki/pages/objetos/cobre/'><img src='https://esmindustrygame.github.io/wiki/content/images/objetos/cobre.png'>Cobre</a>
      <a href='https://esmindustrygame.github.io/wiki/pages/objetos/plomo/'><img src='https://esmindustrygame.github.io/wiki/content/images/objetos/plomo.png'>Plomo</a>
      <a href='https://esmindustrygame.github.io/wiki/pages/objetos/carbon/'><img src='https://esmindustrygame.github.io/wiki/content/images/objetos/carbon.png'>Carbón</a>
      <a href='https://esmindustrygame.github.io/wiki/pages/objetos/arena/'><img src='https://esmindustrygame.github.io/wiki/content/images/objetos/arena.png'>Arena</a>
      <a href='https://esmindustrygame.github.io/wiki/pages/objetos/torio/'><img src='https://esmindustrygame.github.io/wiki/content/images/objetos/torio.png'>Torio</a>
    </details>

    <details>
      <summary>Lógica</summary>
      <a href='https://esmindustrygame.github.io/wiki/pages/logica/glosario/'>Glosario</a>
      <a href='https://esmindustrygame.github.io/wiki/pages/logica/introduccion/'>Introducción</a>
      <!--
      <a href='https://esminudstrygame.github.io/wiki/pages/logica/escribirLeer/'><img src='https://esmindustrygame.github.io/wiki/content/images/logica/color1.png'>Escribir y leer datos</a>
      -->
      <a href='https://esmindustrygame.github.io/wiki/pages/logica/imprimirMensaje/'>Imprimir mensaje.</>
      </details>
    
    <details>
      <summary>Bloques</summary>
      <a href='https://esmindustrygame.github.io/wiki/pages/bloques/unidadDeMemoria/'><img https://esmindustrygame.github.io/wiki/content/images/bloques/logica/unidadDeMemoria.png>Unidad de memoria</a> 
      </details>
  </div>
  <div id='content'>
    <details id='index'><summary id='index-summary'>Índice</summary></details>
    ${content.innerHTML}
  </div>
</div>

<div id='overlay'>
  <div id='config' style='display: none;'>
    <ul>
      <li class='header-element config-title-li'><p class='config-title'>Iluminación</p></li>
      <li class='header-element'>
        <ul>
          <li class='header-element color-li'><input class='theme-button' id='theme-dark' type='button'></li>
          <li class='header-element color-li'><input class='theme-button' id='theme-white' type='button'></li>
        </ul>
      </li>
      <br><br>
      <li class='header-element config-title-li'><p class='config-title'>Color</p></li>
      <li class='header-element'>
        <ul>
          <li class='header-element color-li'><input class='color-button' id='color-red' type='button'></li>
          <li class='header-element color-li'><input class='color-button' id='color-orange' type='button'></li>
          <li class='header-element color-li'><input class='color-button' id='color-green' type='button'></li>
          <li class='header-element color-li'><input class='color-button' id='color-blue' type='button'></li>
          <li class='header-element color-li'><input class='color-button' id='color-purple' type='button'></li>
          <li class='header-element color-li'><input class='color-button' id='color-neutral' type='button'></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</body>
`;
content.remove();

//Configure the page config
const config = document.getElementById('config');
let configIsActive = false;
(document.getElementById('config-icon')).addEventListener('click', () => {
  if(configIsActive == true){
    config.setAttribute('style', 'display: none;');
    configIsActive = false;
  }else{
    config.setAttribute('style', 'display: block;');
    configIsActive = true;
  }
});
(document.getElementById('theme-dark')).addEventListener('click', () => {
  localStorage.setItem('themeMode', 'false');
  document.documentElement.style.setProperty('--font-color','#fff');
  document.documentElement.style.setProperty('--shadow-color','#505050');
  document.documentElement.style.setProperty('--background-light-light', `var(--dark-light-light)`);
  document.documentElement.style.setProperty('--background-light', `var(--dark-light)`);
  document.documentElement.style.setProperty('--background', `var(--dark)`);
  document.documentElement.style.setProperty('--background-hover', `var(--dark-hover)`);
});
(document.getElementById('theme-white')).addEventListener('click', () => {
  localStorage.setItem('themeMode', 'true');
  document.documentElement.style.setProperty('--font-color','#000');
  document.documentElement.style.setProperty('--shadow-color','#d1d1d1');
  document.documentElement.style.setProperty('--background-light-light', `var(--white-light-light)`);
  document.documentElement.style.setProperty('--background-light', `var(--white-light)`);
  document.documentElement.style.setProperty('--background', `var(--white)`);
  document.documentElement.style.setProperty('--background-hover', `var(--white-hover)`);
});
for(button of (document.getElementsByClassName('color-button'))){
  let colorName = button.id.slice(6, button.id.length);
  button.addEventListener('click', () => {
    localStorage.setItem('colorMode', colorName);
    document.documentElement.style.setProperty('--main-light-light', `var(--${colorName}-light-light)`);
    document.documentElement.style.setProperty('--main-light', `var(--${colorName}-light)`);
    document.documentElement.style.setProperty('--main', `var(--${colorName})`);
    document.documentElement.style.setProperty('--main-hover', `var(--${colorName}-hover)`);
  })  
}

//Index
[
  ...document.getElementsByTagName('h1'),
  ...document.getElementsByTagName('h2'),
  ...document.getElementsByTagName('h3'),
  ...document.getElementsByTagName('h4'),
  ...document.getElementsByTagName('h5'),
  ...document.getElementsByTagName('h6'),
].forEach(h => {h.classList.add('hIndex');});
let hTags = document.getElementsByClassName('hIndex');
let index = document.getElementById('index');
for(let h of hTags){
  let coord = h.getBoundingClientRect();
  index.innerHTML = index.innerHTML + `<div onclick='window.scroll({left:${coord.left},top:${coord.top},behavior:"smooth"});'>${h.textContent}</div>`;
}

//Add a > icon to all summary tags
let detailsTags = document.getElementsByTagName('details');
//console.log(detailsTags)
for(let d of detailsTags){
  if(d.firstElementChild.tagName == 'SUMMARY'){
    d.firstElementChild.innerHTML = d.firstElementChild.innerHTML + `<div style='float:right;' class='fas fa-angle-right sidemenu-icon'></div>`;
    d.addEventListener('click', () => {
      if(d.firstElementChild.lastElementChild.classList.contains('icon-rotated')){
        d.firstElementChild.lastElementChild.classList.remove('icon-rotated');
      }else{d.firstElementChild.lastElementChild.classList.add('icon-rotated');}
    }); 
  }
}

})();