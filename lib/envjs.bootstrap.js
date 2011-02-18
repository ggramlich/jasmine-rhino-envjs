load('lib/env.rhino.1.2.js');

Envjs.scriptTypes['text/javascript'] = true;
//window.location = 'SpecRunner.html';

Envjs.onScriptLoadError = function(script){
	print('Failed to load script ' + script.src );
	java.lang.System.exit(1);
}

var specFile;

for (i = 0; i < arguments.length; i++) {
    specFile = arguments[i];
    
    console.log("Loading: " + specFile);
    
    window.location = specFile
}
