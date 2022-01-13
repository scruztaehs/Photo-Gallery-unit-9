var photogall = [];


$(".add").click(function() {
    
    var newpicture = $(".picture-url").val();
    photogall.push(newpicture);
    var newcaption = $(".caption").val();
    $(".gallery").append("<img src=" + newpicture + ">" + "<br>" + "<figcaption>" + newcaption + "</figcaption>");
    $(".picture-url").val("");
    $(".caption").val("");
});

$(".gallerybut").click(function() {
    $(".gallery").hide(photogall);
    for (var addedpic of photogall) {
        $(".gallery").show("<img src=" + addedpic + ">");
    }
    $(".gallery").show(photogall);

});