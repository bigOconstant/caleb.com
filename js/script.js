
function showem(){
    
    document.getElementById("wrapper").remove();
    loadel("views/weep.html","container");
    
}

function laughem(){
    var buttonel = document.getElementById("wrapper");
    buttonel.innerHTML = "<p align='center' style='color:#e0e0e0'> You can't</p>";
}

function loadel(path,id) {
   fetch(path)
	.then((response) => response.text())
  .then(function(html) {
      document.getElementById(id).innerHTML = html;
  }).catch((error)=>{ console.log(error)});

}
function loadinitialel(path,id){
    return fetch(path);
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
	    loadel("views/weep.html","container");
        break;
    case "home":
        loadel("views/home.html","container");
        break;
    
    case "projects" :
        loadel("views/projects.html","container");
        break;
    
    case "blog":
	loadel("views/blog.html","container");
	break;
    }
    switchActive(page);
    
}

function switchActive(page) {
    window.localStorage.setItem("page",page);
    var nav = document.getElementById("myTopnav");
    var children = nav.children;

    for(var i = 0; i < children.length; i++) {
	var child = children[i];
	if (child.classList.contains("active")){
	    child.classList.remove("active");
	}
	if(child.classList.contains(page)){
	    child.classList.add("active");
	}
    }

    console.log("page = "+getFragment());
    
}

function getFragment() {
    var fragment = '';
    if(this.mode === 'history') {
        fragment = this.clearSlashes(decodeURI(location.pathname + location.search));
        fragment = fragment.replace(/\?(.*)$/, '');
        fragment = this.root != '/' ? fragment.replace(this.root, '') : fragment;
    } else {
        var match = window.location.href.match(/#(.*)$/);
        fragment = match ? match[1] : '';
    }
    return clearSlashes(fragment);
}


function clearSlashes(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
}
