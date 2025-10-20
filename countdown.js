// Fecha de la boda
const weddingDate = new Date("2025-12-13T17:00:00"); // Año-Mes-Día Hora:minutos:segundos

function updateCountdown() {
    const now = new Date();
    let totalSeconds = Math.floor((weddingDate - now) / 1000);

    if (totalSeconds < 0) {
        document.getElementById("countdown").innerHTML = "¡Nos casamos hoy! 🎉";
        return;
    }

    const days = Math.floor(totalSeconds / (24 * 3600));
    totalSeconds -= days * 24 * 3600;

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= hours * 3600;

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds - minutes * 60;

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Actualiza cada segundo
setInterval(updateCountdown, 1000);

// Inicializa la cuenta regresiva
updateCountdown();

