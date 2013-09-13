//	HYPE.documents["tryBaby"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "tryBaby.hyperesources";
	var documentName = "tryBaby";
	var documentLoaderFilename = "trybaby_hype_generated_script.js";
	var mainContainerID = "trybaby_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"Mybaby_logo.png",p:1}};
	
	var scenes = [{x:0,onSceneKeyPressActions:[{type:5}],p:"600px",c:"#FF9A47",v:{"2":{o:"content-box",Q:0,h:"0",a:49,R:"#232323",q:"100% 100%",x:"visible",j:"absolute",r:"inline",c:114,k:"div",z:"1",d:114,T:3,b:49,e:"0.000000",S:3},"3":{a:173,z:"2",b:130,c:159,K:"Solid",L:"Solid",d:19,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"3_pressed",D:"#A0A0A0",t:13,F:"center",G:"#000000",aP:"pointer",w:"\u5b89\u88c5<div><br></div>",aB:[{type:5,goToURL:"itms-services://?action=download-manifest&url=http://zxm9988.github.io/Mybaby/Mybaby.plist",openInNewWindow:false}],x:"visible",I:"Solid",aC:[{type:0}],y:"preserve",J:"Solid"},"4":{aU:8,G:"#000000",c:291,aV:8,r:"inline",d:18,e:"0.000000",aW:"0.000000",t:16,Z:"break-word",w:"Mybaby1.0",j:"absolute",x:"visible",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:179,b:49}},n:"Untitled Scene",T:{"3_pressed":{d:0,i:"3_pressed",n:"3_pressed",a:[],f:30},kTimelineDefaultIdentifier:{d:3.13,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:3.13,i:"e",e:"1.000000",s:"0.000000",o:"2"},{f:"2",t:0,d:3.13,i:"e",e:"1.000000",s:"0.000000",o:"3"},{f:"2",t:0,d:3.13,i:"e",e:"1.000000",s:"0.000000",o:"4"}],f:30}},o:"1"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

