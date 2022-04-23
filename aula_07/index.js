$.support.cors = true;


$(document).ready(
    function(){
        $('#conteudo').load("pages/pagina1.html")
}


)


$('#btPagina1').click(
    function(){
    console.log("Clique pagina 1")
    $('#conteudo').load("pages/pagina1.html")

    }
)

$('#btPagina2').click(
    function(){
    console.log("Clique pagina 2")
    $('#conteudo').load("pages/pagina2.html")

    }
)


