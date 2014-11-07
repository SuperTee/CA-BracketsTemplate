define(function (require, exports, module) {
    "use strict";
	
    var commandHTML = "newHtml";
    var commandCSS = "newCSS";
    var commandJS = "newJS";
	
    var commandNG_01 = "newController";
    var commandNG_02 = "newDirective";
    var commandNG_03 = "newFilter";

	var Menus = brackets.getModule("command/Menus");
	var CommandManager = brackets.getModule("command/CommandManager");
	var EditorManager = brackets.getModule("editor/EditorManager");
    
	var dm = brackets.getModule("document/DocumentManager");
	
	//var widget = brackets.getModule("widgets/Dialogs");
	
	var file_counter = 0;
	
    //--------------------------------------------------------
	function loadHTML() {	        
		var template = require('text!./template/html-template.html');
		var doc = dm.createUntitledDocument(++file_counter, ".html");			
		doc.setText(template);		
    }
	//--------------------------------------------------------
	function loadCSS() {
		var template = require('text!./template/css-template.html');
		var doc = dm.createUntitledDocument(++file_counter, ".css");			
		doc.setText(template);		
    }
	//--------------------------------------------------------
	function loadJS() {
		var template = require('text!./template/javascript-template.html');
		var doc = dm.createUntitledDocument(++file_counter, ".js");				
		doc.setText(template);				
    }
	//--------------------------------------------------------
    function loadController() {
		var template = require('text!./template/controller-template.html');
		var doc = dm.createUntitledDocument(++file_counter, ".js");				
		doc.setText(template);		
    }
	//--------------------------------------------------------
    function loadDirective() {		
		var template = require('text!./template/directive-template.html');
		var doc = dm.createUntitledDocument(++file_counter, ".js");				
		doc.setText(template);				
    }
	//--------------------------------------------------------
    function loadFilter() {		
		var template = require('text!./template/filter-template.html');
		var doc = dm.createUntitledDocument(++file_counter, ".js");				
		doc.setText(template);				
    }
	//--------------------------------------------------------
	function init(){		
		CommandManager.register("New HTML", commandHTML, loadHTML); 
		CommandManager.register("New CSS", commandCSS, loadCSS); 
		CommandManager.register("New JavaScript", commandJS, loadJS); 

		CommandManager.register("New Controller", commandNG_01, loadController);
		CommandManager.register("New Directive", commandNG_02, loadDirective);
		CommandManager.register("New Filter", commandNG_03, loadFilter);

		var menu = Menus.addMenu("CodeAddict-Template", "codeaddict.template" );
		
		menu.addMenuItem(commandHTML, "Ctrl-Alt-Shift-M");
		menu.addMenuItem(commandCSS, "Ctrl-Alt-Shift-C");
		menu.addMenuItem(commandJS, "Ctrl-Alt-Shift-J");
		menu.addMenuDivider();		
		menu.addMenuItem(commandNG_01, "Ctrl-Alt-Shift-N");
		menu.addMenuItem(commandNG_02, "Ctrl-Alt-Shift-D");
		menu.addMenuItem(commandNG_03, "Ctrl-Alt-Shift-F");
		
	};
	//--------------------------------------------------------
	init();
});


