$(document).ready(function() {
    console.log("----- index.html run! -----");
    //-----------
    //变量&DOM
    //-----------
    var oLoading = $(".loading");




    oLoading.fadeOut(600);
});


//$(document).ready(function(){var d=$(".loading");var c=$(".c-body");var a=$(".print");function b(f){var e=document.body.innerHTML;document.body.innerHTML=f;window.print();document.body.innerHTML=e}a.click(function(f){var f=window.event||f;f.preventDefault();var e=c.html();b(e)});d.fadeOut(600)});
