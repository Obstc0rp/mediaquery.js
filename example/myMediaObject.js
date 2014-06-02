// JavaScript Document
var myMediaObject = {
    initialize: init,
	before: before,
	after: after,
	resizeXS: extraSmall,
	resizeSM: small,
	resizeMD: medium,
	resizeLG: large
}

function init(){
    console.log('init');
}

function before(){
	console.log('before');
}

function after(){
	console.log('after');	
}

function extraSmall(){
	console.log('extra small');
    document.getElementById('pTest').innerHTML = 'extra small';
}

function small(){
	console.log('small');
    document.getElementById('pTest').innerHTML =  'small';
}

function medium(){
	console.log('medium');
    document.getElementById('pTest').innerHTML = 'medium';
}

function large(){
	console.log('large');
    document.getElementById('pTest').innerHTML = 'large';
}

mediaqueryjs.mediaQueryAdd(myMediaObject);
