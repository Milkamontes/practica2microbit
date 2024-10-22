let temperatura: number;
let direccion: number;
let aceleracion: number;
// Configurar el radio
radio.setGroup(1)
basic.forever(function () {
    // Leer temperatura
    temperatura = input.temperature()
    // Leer dirección del compás
    direccion = input.compassHeading()
    // Leer aceleración
    aceleracion = input.acceleration(Dimension.Strength)
    // Mostrar temperatura en la pantalla LED
    basic.showNumber(temperatura)
    basic.pause(1000)
    // Mostrar dirección del compás
    basic.showNumber(direccion)
    basic.pause(1000)
    // Mostrar aceleración
    basic.showNumber(aceleracion)
    basic.pause(1000)
    // Enviar datos a través del radio
    radio.sendString("Temp: " + temperatura + "°C, Direc: " + direccion + ", Acel: " + aceleracion)
    basic.pause(2000)
})
