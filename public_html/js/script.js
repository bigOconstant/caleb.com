
function showem(){
    
    document.getElementById("wrapper").remove();
    loadel("views/weep.html","container");
    loadel("views/header.html","header");
    
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
