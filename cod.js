var boton = document.getElementsByName("button");
var partida = 0;
var puntaje = 0;
var tiempo = 0;

function empezar(){
    tiempo = 0;
    var id_main = 
        "<div id='jugar'>" +
            "<div class='pelota' onclick = 'ganar()' onmouseover = 'random()'> </div>" +
        "</div>"
    document.querySelector("#juego").innerHTML = id_main;
    window.setInterval(function(){
        tiempo++;
    },1000);
}

document.addEventListener("DOMContentLoaded", function(){
    function random() {
        var pelota = document.querySelector(".pelota");
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;

        var posicion_x = Math.random() * (viewportWidth - 50);
        var posicion_y = Math.random() * (viewportHeight - 50);

        pelota.style.left = posicion_x + "px";
        pelota.style.top = posicion_y + "px";
    }
    window.random = random;
});

function ganar(){
    partida += 1;
    if(tiempo < 60){
        puntaje = 1000;
    }
    else if(tiempo > 60 && puntaje < 300){
        puntaje = 500;
    }
    else{
        puntaje = 200;
    }
    var juego_ganado = 
        "<p>Congratulation! You take the ball<p>" +
        "<table>" +
            "<thead>" +
                "<tr>" +
                    "<td>Match</td>" +
                    "<td>Time</td>" +
                    "<td>Points</td>" +
                "</tr>" +
            "</thead>" +
            "<tbody>" +
                "<tr>" +
                    "<td>" + partida + "</td>" +
                    "<td>" + tiempo + "</td>" +
                    "<td>" + puntaje + "</td>" +
                "</tr>" +
            "</tbody>" +
        "</table>" + "<br>" + "<br>" +
        "<button onclick=empezar()>Start again</button>";
    document.querySelector("#juego").innerHTML = juego_ganado;

    var tabla = document.getElementsByName("table");
    var encabezado = document.getElementsByName("thead");
    var nuevaFila = document.createElement("tr");
    var match = document.createElement("td");
    var time = document.createElement("td");
    var points = document.createElement("td");

    match.textContent = "dato 1";
    time.textContent = "dato 2";
    points.textContent = "dato 3";

    nuevaFila.appendChild(match);
    nuevaFila.appendChild(time);
    nuevaFila.appendChild(points);

}

document.getElementById("miSelect").addEventListener("change", function() {
    var opcion = this.value;
    window.location.href = opcion; // Redirigir a la URL seleccionada
  });