//hola jonu, me falta un poco, hice lo que fue saliendo. saludos!!
let txt = document.querySelector("input").value
let btn = document.getElementById("buscargoogle");
let ventana = document.getElementById("ventana")
let ul = document.createElement("ul")
let lista = document.createElement("li")
let contador= 5

btn.addEventListener("click", function(){
    let txt = document.querySelector("input").value
    if(txt!="" ){
        contador++;
        let ul = document.createElement("ul")
        let lista = document.createElement("li")
        ul.appendChild(lista);
        ventana.appendChild(ul);
        ul.textContent= txt
        }
    }
)

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        let txt = document.querySelector("input").value
        if(txt!="" ){
            contador++;
            let ul = document.createElement("ul")
            let lista = document.createElement("li")
            ul.appendChild(lista);
            ventana.appendChild(ul);
            ul.textContent= txt
            }







    }
});

