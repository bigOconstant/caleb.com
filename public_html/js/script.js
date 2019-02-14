
function showem(){
    
    document.getElementById("wrapper").remove();
    loadel("views/weep.html","container");
    
}

function loadel(path,id) {
   fetch(path)
  .then((response) => response.text())
  .then(function(html) {
      document.getElementById(id).innerHTML = html;
  }).catch((error)=>{ console.log(error)});

}
