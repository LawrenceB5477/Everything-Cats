(function() {
  var imgs = document.getElementsByTagName("img");
  var src = "";
  var ajax = new XMLHttpRequest();
  ajax.onload = function() {
     var res = this.response;
     src = res.match(/src=(".+")/g);
     for (var j = 0; j < src.length; j++) {
       src[j] = src[j].replace(/(src=|")/g, "");
     }
     console.log(src);
     for (var i = 0; i < imgs.length; i++) {
       imgs[i].src = src[i];
     }

   }
  ajax.open("GET", "http://thecatapi.com/api/images/get?format=html&api_key=MjYwNjY2&results_per_page=" + imgs.length);
  ajax.send();
})();
