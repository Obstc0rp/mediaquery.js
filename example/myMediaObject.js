// JavaScript Document
var myMediaObject = {
    initialize: init,
	before: vorher,
	after: nachher,
	resizeXS: extraKlein,
	resizeSM: klein,
	resizeMD: mittel,
	resizeLG: gross
}

function init(){
    console.log('init');
}

function vorher(){
	console.log('vorher');
}

function nachher(){
	console.log('nachher');	
}

function extraKlein(){
	console.log('extra klein');
    document.getElementById('pTest').innerHTML = 'extra klein';
}

function klein(){
	console.log('klein');
    document.getElementById('pTest').innerHTML =  'klein';
}

function mittel(){
	console.log('mittel');
    document.getElementById('pTest').innerHTML = 'mittel';
}

function gross(){
	console.log('gross');
    document.getElementById('pTest').innerHTML = 'gross';
}

mediaqueryjs.mediaQueryAdd(myMediaObject);