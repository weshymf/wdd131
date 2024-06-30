document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;

    const temperature = 10; // Celsius
    const windSpeed = 5; // km/h

    function calculateWindChill(temp, speed) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
    }

    let windChillText = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillText = `${calculateWindChill(temperature, windSpeed)}°C`;
    }
    
    document.getElementById("windChill").textContent = windChillText;
});
