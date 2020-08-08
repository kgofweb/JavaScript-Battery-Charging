function chargeBattery () {
        let battery = document.getElementById('battery');
        let fas = document.querySelector('.fas');

        battery.innerHTML = "&#xf244;";

        setTimeout(function () {
                battery.innerHTML = "&#xf243;";
        }, 1000);
        
        setTimeout(function () {
                battery.innerHTML = "&#xf242;";
        }, 2000);
        
        setTimeout(function () {
                battery.innerHTML = "&#xf241;";
        }, 3000);
        
        setTimeout(function () {
                battery.innerHTML = "&#xf240;";
        }, 4000);
};

chargeBattery();

setTimeout(function() {
        setInterval(chargeBattery, 5000);
});