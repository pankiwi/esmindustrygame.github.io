//Highlight (alpha (?))
(() => {
  let keywords = ['let','var','const','function','new','=>','true','false']
  let keywords2 = ['if','else','for','while','return','break','switch']
  let classes = ['BigInt','Number','String','Boolean','Function','Object']
  for(element of [...document.getElementsByClassName('languaje-js'), ...document.getElementsByClassName('languaje-javascript')]){
    
    let text = element.innerHTML;

    text = text.replace(/'/g,'"')
    //classes
    for(cls of classes){text = text.replaceAll(cls, `<span class='highlight-class'>${cls}</span>`)}
    //keyword
    for(keyword of keywords){text = text.replaceAll(keyword, `<span class='highlight-keyword'>${keyword}</span>`)}
    //int
    text = text.replace(/(\d)/g,`<span class='highlight-int'>$1</span>`)
    //keyword2
    for(keyword of keywords2){text = text.replaceAll(keyword, `<span class='highlight-keyword2'>${keyword}</span>`)}
    //string
    text = text.replaceAll(/"(.*?)"/g,`<span class='highlight-string'>&quot;$1&quot;</span>`);
    text = text.replaceAll(/`(.*?)`/g,`<span class='highlight-string'>&quot;$1&quot;</span>`);
    //comment
    text = text.replaceAll(/\/\*(.*?)\*\//g,`<span class='highlight-comment'>/*$1*/</span>`);
    text = text.replaceAll(/\/\/(.*?)\n/g,`<span class='highlight-comment'>//$1\n</span>`);

    element.innerHTML = text;
  }
})();