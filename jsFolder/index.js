$(document).ready(function() {
    console.log("----- index.html run! -----");
    //-----------
    //变量&DOM
    //-----------
    var oLoading = $(".loading");
    var oBody = $(".c-body");
    var oBtnPrint = $(".print");

    //打印函数
    function printHtml(html) {
        var bodyHtml = document.body.innerHTML;
        document.body.innerHTML = html;
        window.print();
        document.body.innerHTML = bodyHtml;
    };

    oBtnPrint.click(function(event) {
        /* Act on the event */
        var event = window.event || event;
        event.preventDefault();
        var _html = oBody.html();
        printHtml(_html);
    });




    oLoading.fadeOut(600);
});
