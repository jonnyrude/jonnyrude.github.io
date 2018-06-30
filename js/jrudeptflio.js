document.addEventListener("DOMContentLoaded", function() {

    $("#menuB").on('click', function(e) {
        $("#menu-small").toggleClass('open');
        e.stopPropagation();
        });
});