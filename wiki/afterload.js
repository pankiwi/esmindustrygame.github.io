//Highlight
(() => {
  for(element of [...document.getElementsByClassName('languaje-js'), ...document.getElementsByClassName('languaje-javascript')]){
  
  let text = element.innerHTML;

  text = text.replace(/'/g,'"')
  let keywords = ['let','var','const','function','new']
  for(keyword of keywords){text = text.replaceAll(keyword, `<span class='highlight-keyword'>${keyword}</span>`)}

  text = text.replace(/(\d)/g,`<span class='highlight-int'>$1</span>`)
  
  let keywords2 = ['if','else','for','while','return','break','switch']
  for(keyword of keywords2){text = text.replaceAll(keyword, `<span class='highlight-keyword2'>${keyword}</span>`)}
  
  //text = text.replaceAll(/(\s)(.*?)\((.*?)\)/g,`$1<span class='highlight-function'>$2</span>($3)`);

  text = text.replaceAll(/"(.*?)"/g,`<span class='highlight-string'>&quot;$1&quot;</span>`);
  text = text.replaceAll(/`(.*?)`/g,`<span class='highlight-string'>&quot;$1&quot;</span>`);
  
  text = text.replaceAll(/\/\*(.*?)\*\//g,`<span class='highlight-comment'>/*$1*/</span>`);
  text = text.replaceAll(/\/\/(.*?)\n/g,`<span class='highlight-comment'>//$1\n</span>`);

  element.innerHTML = text;
}
})();