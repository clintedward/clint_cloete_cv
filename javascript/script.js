//navbar button
$(document).ready(function(){function menu(){
  var menu = document.querySelector(".menu");
  var links = document.querySelector(".links");



  menu.addEventListener("click",function(e){
    e.preventDefault();
    if(!(this.classList.contains('active_menu'))){
      this.classList.toggle("active_menu");
      links.classList.add("active_links");
    } else {
      this.classList.remove("active_menu");
      links.classList.remove("active_links");
    }
  });
}
menu();
});


// .content-wrap h1{
//   position: relative;
//   top: 5em;
//   letter-spacing: 30px;
// }
