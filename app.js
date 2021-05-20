function show (id){
    var valor = $('#'+id).attr("alt");
    document.getElementById('cielo').setAttribute('src','#' + id);
    $('#descripcion').attr("value", "Conoce " + valor);
}
