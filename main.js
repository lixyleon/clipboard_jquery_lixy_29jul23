$(document).ready(function(){

    // hacer dos funciones que agreguen y remuevan la clase en la etiqueta span
    function add(){
        $(".copied").addClass("bounce-effect")
        $(".copied").removeClass("d-none")
    }
    function remove(){
        $(".copied").removeClass("bounce-effect")
        $(".copied").addClass("d-none")
    }
    // llamamos a las funciones y copiamos el text con el clip en el boton
    $(".copy-btn").click(function(){
        $("#textField").select();
        document.execCommand("copy");

        add();
        setTimeout(remove,800);
    })
})

