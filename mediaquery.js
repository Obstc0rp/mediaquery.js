window.onload = function(){ //TODO: check if there is a better function

	window.onresize = mediaResize;
	mediaResize();
};

//------------------------- variables -------------------------//
var xs = 767;
var sm = 991;
var md = 1199;
//var lg = rest;

//------------------------- resize function -------------------//
function mediaResize(){

	var doc_width = window.innerWidth;

	for(var i = 0; i < resizableObjects.length; i++){
		
		before(resizableObjects[i]);
		
		if(doc_width <= xs){
			resizeXS(resizableObjects[i]);
		}else if(doc_width <= sm){
			resizeSM(resizableObjects[i]);
		}else if(doc_width <= md){
			resizeMD(resizableObjects[i]);
		}else{
			resizeLG(resizableObjects[i]);
		}
		
		after(resizableObjects[i]);
	}
}

//--------------------- object array, add and remove ----------//
var resizableObjects = new Array();

function jMediaQueryAdd(resizableObject){
	resizableObjects.push(resizableObject);
}
function jMediaQueryRemove(object){
	resizableObjects.remove(object);
}

//------------------ set medium sizes --------------------------//
function setMaxXSWidth(width){
	xs = width;
}
function setMaxSMWidth(width){
	sm = width;
}
function setMaxLGWidth(width){
	lg = width;
}

//---------------------- resize functions ---------------------//
function resizeXS(object){
	if(object.resizeXS){
		object.resizeXS();
	}else if(object.resizeSM){
		object.resizeSM();
	}else if(object.resizeMD){
		object.resizeMD();
	}else if(object.resizeLG){
		object.resizeLG();
	}
}

function resizeSM(object){
	if(object.resizeSM){
		object.resizeSM();
	}else if(object.resizeMD){
		object.resizeMD();
	}else if(object.resizeLG){
		object.resizeLG();
	}
}

function resizeMD(object){
	if(object.resizeMD){
		object.resizeMD();
	}else if(object.resizeLG){
		object.resizeLG();
	}
}

function resizeLG(object){
	if(object.resizeLG){
		object.resizeLG();
	}
}

//----------------- before and after functions -----------------//
function before(object){
	if(object.before)
		object.before();
}

function after(object){
	if(object.after)
		object.after();
}

(function(){

})();

//TODO: documentation for functions