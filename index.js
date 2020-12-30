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

//Muestro en Consola la información de los vehículos
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

//Muestro las Comparaciones
vehiculo.sort(function (a, b) {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    // a must be equal to b
    return 0;
}
);

console.log("Vehículo más caro: " + vehiculo[vehiculo.length - 1].marca + " " + vehiculo[vehiculo.length - 1].modelo);

console.log("Vehículo más barato: " + vehiculo[0].marca + " " + vehiculo[0].modelo);

function marcaConY(array) {
    for (l = 0; l < array.length; l++) {
        if (array[l].marca.includes("Y")) {
            return array[l].marca + " " + array[l].modelo + " " + visualizarComoMoneda(array[l].precio);
        }
    }
}

console.log("Vehículo que contiene en el modelo la letra ‘Y’: " + marcaConY(vehiculo));

console.log("=============================");

console.log("Vehículos ordenados por precio de mayor a menor: ");

for (h = vehiculo.length - 1; h >= 0; h -= 1) {
    console.log(vehiculo[h].marca + " " + vehiculo[h].modelo);
}