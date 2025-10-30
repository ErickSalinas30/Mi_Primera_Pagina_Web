
function mostrarHora() {
    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const horaActual = `${horas}:${minutos}:${segundos}`;
    document.getElementById("reloj").textContent = horaActual;
}

setInterval(mostrarHora, 1000);

mostrarHora();



window.onload = function() {
  const titulo = document.getElementById("titulo");

  if (!titulo) {
    console.error("No se encontró el elemento con id='titulo'");
    return;
  }

  const textos = ["HTML", "CSS", "JavaScript", "Mi Página Web"];
  let indice = 0;
  let escribiendo = false; 
  
  function escribirTexto(texto, callback) {
    titulo.textContent = ""; 
    let i = 0;
    escribiendo = true;

    const intervalo = setInterval(() => {
      titulo.textContent += texto.charAt(i);
      i++;
      if (i >= texto.length) {
        clearInterval(intervalo);
        escribiendo = false;
        if (callback) callback();
      }
    }, 100); 
  }

  titulo.addEventListener("click", () => {
    if (escribiendo) return; 
    indice = (indice + 1) % textos.length;
    const nuevoTexto = textos[indice];

    titulo.style.transition = "transform 0.3s ease, color 0.3s";
    titulo.style.transform = "scale(1.2)";
    titulo.style.color = "#00a47eff";

    escribirTexto(nuevoTexto, () => {
      setTimeout(() => {
        titulo.style.transform = "scale(1)";
        titulo.style.color = "";
      }, 300);
    });
  });
};


