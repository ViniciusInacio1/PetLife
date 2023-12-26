var elementosDuvida = document.querySelectorAll(".Duvida")

elementosDuvida.forEach(function (Duvida) {
    Duvida.addEventListener('click', function(){
        Duvida.classList.toggle("ativa")
    })
})