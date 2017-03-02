// JavaScript Document
/*
**动态设置HTML标签的font-size值
*/
(function (doc, win) {
	'use strict';
	var FONTSIZE = 10,
		docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) {return;}
			docEl.style.fontSize = FONTSIZE * (clientWidth / 320) + 'px';
		};
	
	if (!doc.addEventListener) {return;}
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);