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
  <link rel='stylesheet' href='${dirString}styles/highlight.css'>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<div id='header'>
  <header>
    <ul id='header-ul-left'>
      <li class='header-element' ><a id='header-favicon'title='Mindustry Wiki Español' href=''><img src='${dirString}content/images/favicon.png' width='36' height='36' id='header-favicon'></a></li>
      <li class='header-element' ><a id='header-title' title='Página Principal' href=''>Mindustry Wiki Español</a></li>
    </ul>
    <ul id='header-ul-right'>
      <li class='header-element' ><a class='header-button' title='Guias para usuarios nuevos en algun tópico del juego' href='' target='_blank'>Guias</a></li>
      <li class='header-element' ><a class='header-button' title='Se parte de nuestra comunidad de Discord' href='${discordInvite}' target='_blank'>Discord</a></li>
      <li class='header-element' ><div id='header-search'><input id='header-search-input' type='text' placeholder='Buscar'></div></li>
      <li class='header-element' ><img id='config-icon'src='${dirString}content/images/config.png'></li>
    </ul>
  </header>
</div>
<div id='header-margin'></div>

<div id='container'>
  <div id='sidemenu'>
    <span id='sidemenu-category-objetos'>Objetos<span id='sidemenu-category-objetos-icon'class='fas fa-angle-right'></span></span><br>
    <ul id='sidemenu-category-objetos-ul'>
      <li><a href='https://esmindustrygame.github.io/wiki/pages/objetos/cobre/'><img src='${dirString}content/images/objetos/cobre.png'>Cobre</a></li>
    </ul>
    <span id='sidemenu-category-logica'>Logica<span id='sidemenu-category-logica-icon' class='fas fa-angle-right'></span></span><br>
    <ul id='sidemenu-category-logica-ul'>
      <li><a href='https://esmindustrygame.github.io/wiki/pages/logica/introduccion/'>Introducción</a></li>
      <li><a href='https://esmindustrygame.github.io/wiki/pages/logica/glosario/'>Glosario</a></li>
    </ul>
  </div>
  <div id='content'>
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

//sidemenu
//objetos
let objetosCategory = document.getElementById('sidemenu-category-objetos');
let objetosCategoryIcon = document.getElementById('sidemenu-category-objetos-icon')
let objetosCategoryUl = document.getElementById('sidemenu-category-objetos-ul');
objetosCategory.addEventListener('click', () => {
  if(objetosCategoryUl.style.display == 'block'){
    objetosCategoryUl.style.setProperty('display','none');
    objetosCategoryIcon.setAttribute('class','fas fa-angle-right');
  }
  else{objetosCategoryUl.style.setProperty('display','block')
  objetosCategoryIcon.setAttribute('class','fas fa-angle-right sidemenu-icon-rotated');
  }
})

//logica
let logicaCategory = document.getElementById('sidemenu-category-logica');
let logicaCategoryIcon = document.getElementById('sidemenu-category-logica-icon')
let logicaCategoryUl = document.getElementById('sidemenu-category-logica-ul');
logicaCategory.addEventListener('click', () => {
  if(logicaCategoryUl.style.display == 'block'){
    logicaCategoryUl.style.setProperty('display','none');
    logicaCategoryIcon.setAttribute('class','fas fa-angle-right');
  }
  else{logicaCategoryUl.style.setProperty('display','block')
  logicaCategoryIcon.setAttribute('class','fas fa-angle-right sidemenu-icon-rotated');
  }
})

})();
