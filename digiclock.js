const clock = document.getElementById('clock');

setInterval(function() {
    let date = new Date();  // Corrected 'date' instantiation
    clock.innerHTML = date.toLocaleTimeString();  // Corrected method name
}, 1000);