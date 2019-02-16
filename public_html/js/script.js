
function showem(){
    
    document.getElementById("wrapper").remove();
    loadel("views/weep.html","container");
    //loadel("views/header.html","header");
    
}

function loadel(path,id) {
   fetch(path)
	.then((response) => response.text())
  .then(function(html) {
      document.getElementById(id).innerHTML = html;
      console.log("Html")
      console.log(html);
  }).catch((error)=>{ console.log(error)});

}

function dropDownNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function navSwitch(page){

    switch(page){
    case "contact":
	loadel("views/contact.html","container");
	break;
    case "about":
	loadel("views/weep.html","container")

    }
    switchActive(page);
    
}

function switchActive(page) {
    var nav = document.getElementById("myTopnav");
    var children = nav.children;

    for(var i = 0; i < children.length; i++) {
	var child = children[i];
	if (child.classList.contains("active")){
	    console.log("Removeing active");
	    child.classList.remove("active");
	}
	if(child.classList.contains(page)){
	    console.log("Adding active");
	    child.classList.add("active");
	}
	console.log(child);
    }
    
}
