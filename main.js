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
	//var widget = brackets.getModule("editor/InlineWidget");
	var widget = brackets.getModule("widgets/Dialogs");
	
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
				
		//showModalDialogUsingTemplate("<h2>Title H2</h2>", "title", "message");
		//showModalDialog();
		//alert("loadDirective");
		//loadDialog("new-directive-dialog.html");		
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
	/*
	function loadDialog(name){
		
		var dialogPath = "text!./widget/"+name;		
		alert(dialogPath);
		
		//var tt = require('text!./widget/new-directive-dialog.html');
		var tt = require(dialogPath);
		alert("tt : "+tt);

	}
	*/
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
		
		$(document).ready(function(){
			
			//var html = "<div style='position: absolute; top: 0; left: 0; width: 500px; height: 500px; background-color: #808080;'><h1>Title</h1><input type='text' id='txt-name' value='XXX' /></div>";			
			var html = "<div style='visibility: visible;position: fixed;left: 0;top: 0;width: 100%;height: 100%;text-align:center;z-index: 200;background-color: black;opacity:0.9;'><h1>Title</h1><input type='text' id='txt-name' value='XXX' /></div>";			
			$(this).append(html);
			
			//var $html = $(html);
			/*
			widget.showModalDialogUsingTemplate(html);
			
			var name = $html.find("input[id=txt-name]").val();
			alert(name);
			*/
			
			//var popup = brackets.getModule("widgets/PopUpManager");			
			//popup
			
		});
	};
	//--------------------------------------------------------
	init();
});


