
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

    }
    
}
