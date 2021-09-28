Cualquier duda escrbirme a mí RexHm `612122239428722720`

# Crear & Editar Paginas del Wiki
Guía para editar y crear paginas para el wiki.

## Conocimientos necesarios
- Conocimiento intermedio de HTML (Obligatorio)
- Conocimiento intermedio de CSS y Javascript son recomendados
- Para utilizar plantillas se requerirá conocimientos de Javascript

## Herramientas necesarias
- Yo para la explicación estaré usando como IDE VsCode, si no lo tienes puedes descargarlo pulsando [aquí](https://code.visualstudio.com/download).

##### Notas
- Se debe comprender que estamos editando una página desde el código fuente, por lo cual algunas cosas parecerán complicadas o sin sentido, pero así es como funciona internamente.
- Se deben respetar los casos de mayusculas y minusculas en la escritura, la computadora lo toma en cuenta.

## Como crear una nueva página

### Definir la ruta/directorio

Primero que todo debemos definir en que ruta estará el archivo de nuestra página, para eso primero nos ubicaremos en la carpeta "pages", de aquí, buscaremos la carpeta con el nombre de la categoria perteneciente de nuestro objeto, por ejemplo, estamos haciendo la pagina de Cobre, entonces buscaremos la carpeta con el nombre de "Objetos", ya que ese es el nombre de la categoria en la que se encuentra Cobre.

> *Aquí se muestra la categoria del objeto*
![](https://cdn.discordapp.com/attachments/864933503682215936/889915967654723614/unknown.png)

> *Nuestra carpeta con el nombre "Objetos" deberia verse tal que así, en caso de que no exista debemos crearla dentro de "pages"*
![](https://cdn.discordapp.com/attachments/864933503682215936/889916309301772428/unknown.png)

Una vez ya tenemos ubicada la ruta de la categoria debemos ubicar la carpeta de la pagina que vamos a crear, en este caso como estamos haciendo Cobre, deberia haber una carpeta con el nombre "Cobre" dentro de "Objetos", en caso de que no exista la crearemos nosotros, (Respetando Mayusculas y Minusculas), y aquí crearemos nuestro archivo **index.html** donde crearemos la página.

## Configurando la página
Una vez creado nuestro directorio y archivo **index.html** procederemos a escribir dentro de el, para esto usarás un IDE (El de tu preferencia, personalmente recomiendo VsCode) y abrirás el archivo.

Bien, una vez dentro deberia verse tal que así, (VsCode, se verá similar en otros IDEs):

![](https://cdn.discordapp.com/attachments/864933503682215936/889918512284438538/unknown.png)

Dentro de el lo primero que deberemos hacer será definir el cuerpo básico de la página, en el que nuestra plantilla que cargaremos después creará la página.
Deberás escribir algo como esto:
```html
<html lang='es'>
  <meta charset='UTF-8'>
  <div id='main'></div>
  <div id='content'> </div>
</html>
```

Una vez escrito eso ya tenemos el cuerpo básico de la página, lo siguiente que deberemos hacer es crear 1 script para definir la cantidad de subcarpetas en donde se encuentra nuestro **index.html** Y nos servirá para poder cargar todos los recursos adecuadamente.

Primero debemos saber la cantidad de subdirectorios que hay entre nuestra pagina y la carpeta principal, para esto deberemos contar cuantas carpetas hay hasta llegar a pages, incluida esta, por ejemplo, desde la carpeta "Cobre" hasta "pages" hay 3 directorios: pages/Objetos/Cobre
entonces, la cantidad que tendremos que defibir de subdirectorios será 3.

Deberemos escribir algo como esto en el script.

(cantidad) = numero de subdirectorios
```html
<script>var subDirs = (cantidad);</script>
```

Bien, una vez definido la cantidad de subdirectorios que tenemos lo siguiente a hacer es cargar nuestros paquetes preload.js y afterload.js que se encargan de construir el resto de la página, para hacerlo solo deberemos recordar la cantidad de subdirectorios que tenemos y escribir por cada subdirectorio un "../" detras de preload.js y afterload.js, de esta forma (esto lo escribirás debajo de donde definiste los subdirectorios):

```html
<script src="../../../preload.js"></script>
<script src='../../../afterload.js'></script>
```

Un ejemplo de como ha quedado la base de la página Cobre:
```html
<html lang='es'>
  <meta charset='UTF-8'>
  <div id='main'></div>
  <div id='content'> </div>
</html>
<script>var subDirs = 3;</script>
<script src="../../../preload.js"></script>
```

## Usando Javascript

Debes agregar una etíqueta `<script></script>` entre `<script src='preload.js'></script>` y `<script src='afterload.js'></script>` para empezar a trabajar en la página con Javascript.

#### Variables:
- content (Referencia al div de "content")
- plantillas (Clase donde se encuentran todas las plantillas)
-- image({img : string, width : string, height: string }))
-- exampleAgregarTexto(texto : String)

### Editando el div content desde Javascript

Por defecto al crear una página del wiki y cargar el preload.js, te trae unas variables especiales, entre algunas tienes "content", que hace referencia al div de "content"

para editar content puedes usar la variable`content.innerHTML` o utilizar las funciones `overwriteContent` para sobrescribir todo el contenido del div "content" o `writeContent` para agregar contenido al div. (Reciben como parametro código HTML)

### Usando plantillas con Javascript

A traves de las distintas funciones importadas desde el preload.js podremos obtener objetos html que podremos integrar al contenido.
un ejemplo de como utilizar una plantilla es este:

```html
<script>
writeContent(p("Example Text"))
</script>
```
Con esto ya estariamos podiendo visualizar un parrafo con "Example Text" de contenido

Recomiendo editar el contenido html utilizando los strings multilineas \`\` de esta forma:
```html
writeContent(`
//Aquí puedes ingresar tanto código html como plantillas
<p>Este es un parrafo hecho con Html</p>
${p("Este es un parrafo hecho con Javascript")}
`)
```

#### Nota

${} se utiliza para agregar variables o funciones a un string hecho con \`\`