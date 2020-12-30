const vehiculo = [
    {
        id: 1,
        marca: "Peugeot",
        modelo: "206",
        puertas: 4,
        precio: 200000.00
    },
    {
        id: 2,
        marca: "Honda",
        modelo: "Titan",
        cilindrada: "125cc",
        precio: 60000.00
    },
    {
        id: 3,
        marca: "Peugeot",
        modelo: "208",
        puertas: 5,
        precio: 250000.00
    },
    {
        id: 4,
        marca: "Yamaha",
        modelo: "YBR",
        cilindrada: "160cc",
        precio: 80500.50
    }
];

function visualizarComoMoneda(numero) {
    var a = numero.toString();//4000.00 >> 4000 | 3000.70 >> 3000.7

    var listaCaract = a.split("");

    //Completo los 0 de los decimales 
    if (listaCaract[listaCaract.length - 2] == ".") { //".5" >> ".50" 
        listaCaract.push("0");
    }
    else if (listaCaract[listaCaract.length - 3] != ".") { //"4000" >> "4000.00" 
        listaCaract.push(".", "0", "0");
    }

    listaCaract[listaCaract.length - 3] = ",";

    if (listaCaract.length > 6) {

        for (i = listaCaract.length - 6; i >= 0; i -= 3) {
            listaCaract.splice(i, 0, ".");
        }
    }

    if (listaCaract[0] == ".") {
        listaCaract.splice(0, 1)
    }

    var resultado = "$";

    for (i = 0; i < listaCaract.length; i++) {
        resultado += listaCaract[i];
    }

    return resultado;
}

for (j = 0; j < vehiculo.length; j++) {
    var puertaCilindrada;

    if (vehiculo[j].puertas == null) {
        puertaCilindrada = "  // Cilindrada: " + vehiculo[j].cilindrada;
    }
    else {
        puertaCilindrada = " // Puertas: " + vehiculo[j].puertas.toString();
    }

    console.log("Marca: " + vehiculo[j].marca + " // Modelo: " + vehiculo[j].modelo + puertaCilindrada + " // Precio: " + visualizarComoMoneda(vehiculo[j].precio));
}

console.log("=============================");