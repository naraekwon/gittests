# Introducion to Qoom Forms and Templates

## Rules:
1. Make page private (Need to be logged in):
	- Put `{{PRIVATE}}` in the page somewhere


## Authorization of APIs

```js

alert('hello');

```

```css

.codify_container {
	margin:20px;
	background-color: #282a36;
	border-radius:5px;
}

.codify_header {
	background-color: #282a36;
	border-radius: 5px 5px 0 0;
	display:flex;
	flex-direction: row;
	padding:5px 10px;
	align-items:center;
}

.codify_header .circle {
	border-radius:50px;
	width:12px;
	height:12px;
	margin:0 3px;
}

```

```js

window.renderers = [...document.querySelectorAll('script[src="/libs/renderer/src/codify.js"]')];
window.codifyloading =  window.codifyloading || false;

function load() {
	if(window.codifyloading) return;
	window.codifyloading = true;
	
	const renderlibs = ["/libs/renderer/src/codify.css", "/apps/editer/src/ace.js", "/apps/editer/src/ext-language_tools.js"]
	
	function loadLib() {
		if(!renderlibs.length) return;
		const lib = renderlibs.shift();
		if(document.querySelector(`script[src="${lib}"]`)) return;
		
		if(lib.endsWith('.css')) {
			const $link = document.createElement('link');
			$link.href = lib;
			$link.rel = 'stylesheet';
			document.head.appendChild($link);
			loadLib();
		} else {
			const $script = document.createElement('script');
			$script.src = lib;
			document.head.appendChild($script);		
			$script.onload = loadLib;
		}
		
		
	}
	loadLib();
}

```

```html

<div id="loader">
	<i class="ic-spinner-double white"></i>
</div>
<div id='mainContainer'>
	<div id="editorContainer">
	    <div id="editorTopRight" class="container"></div>
	    <div id="editor">||DATA||</div>
	    <div id="editorBottomRight" class="container"></div>
	</div>
</div>

```

<script src='/libs/renderer/src/codify.js' lang='html'>

<div id="loader">
	<i class="ic-spinner-double white"></i>
</div>
<div id='mainContainer'>
	<div id="editorContainer">
	    <div id="editorTopRight" class="container"></div>
	    <div id="editor">||DATA||</div>
	    <div id="editorBottomRight" class="container"></div>
	</div>
</div>


</script>

<script src='/libs/renderer/src/codify.js' lang='js'>

alert('HI')

</script>

<script src='/libs/renderer/src/codify.js' lang='html'>

<h1 class='big'>
	HELLO
</h1>

</script>

<script src='/libs/renderer/src/codify.js' lang='css'>

.body {
	
}

</script>

<script src='/libs/renderer/src/codify.js' lang='js'>

alert('HI')

</script>

<script src='/libs/renderer/src/codify.js' lang='html'>

<h1 class='big'>
	HELLO
</h1>

</script>

<script src='/libs/renderer/src/codify.js' lang='css'>

.body {
	
}

</script>

<script src='/libs/renderer/src/codify.js' lang='js'>

alert('HI')

</script>

<script src='/libs/renderer/src/codify.js' lang='html'>

<h1 class='big'>
	HELLO
</h1>

</script>

<script src='/libs/renderer/src/codify.js' lang='css'>

.body {
	
}

</script>

<script src='/libs/renderer/src/codify.js' lang='js'>

alert('HI')

</script>

<script src='/libs/renderer/src/codify.js' lang='html'>

<h1 class='big'>
	HELLO
</h1>

</script>

<script src='/libs/renderer/src/codify.js' lang='css'>

.body {
	
}

</script>

<script src='/libs/renderer/src/codify.js' lang='js'>

alert('HI')

</script>