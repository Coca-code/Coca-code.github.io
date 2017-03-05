// $(document).ready(function() {
//     console.log("----- index.html run! -----");
//     //-----------
//     //变量&DOM
//     //-----------
//     var oLoading = $(".loading");
//     var oContentPrint = $(".c-body");
//     var oBtnPrint = $(".print");

//     //打印函数
//     function printHtml(html) {
//         var bodyHtml = document.body.innerHTML;
//         document.body.innerHTML = html;
//         window.print();
//         document.body.innerHTML = bodyHtml;
//     };

//     //打印
//     oBtnPrint.click(function(event) {
//         /* Act on the event */
//         var event = window.event || event;
//         event.preventDefault();
//         var _html = oContentPrint.html();
//         printHtml(_html);
//     });

//     oLoading.fadeOut(600);
// });
$(document).ready(function(){console.log("----- index.html run! -----");var d=$(".loading");var c=$(".c-body");var a=$(".print");function b(f){var e=document.body.innerHTML;document.body.innerHTML=f;window.print();document.body.innerHTML=e}a.click(function(f){var f=window.event||f;f.preventDefault();var e=c.html();b(e)});d.fadeOut(600)});
