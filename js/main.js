const campoIngreso = document.querySelector("#textoIngresado");
const campoResultado = document.querySelector("#textoResultado");

const matrizCifrado = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

campoIngreso.addEventListener("input", () => {
    campoIngreso.value = campoIngreso.value.replace(/[^a-z0-9\s]/g, "");
});


function BtnCifrar() {
    const texto = Cifrar(campoIngreso.value);
    campoResultado.value = texto;
};

function BtnDescifrar() {
    const texto = Descifrar(campoIngreso.value);
    campoResultado.value = texto;
};

function BtnCopiar() {
    campoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
    campoIngreso.value = "";
    campoResultado.value = "";
    campoIngreso.focus();
};

function Cifrar(fraseCifrada) {
    for (let i = 0; i < matrizCifrado.length; i++) {
        if (fraseCifrada.includes(matrizCifrado[i][0])) {
            fraseCifrada = fraseCifrada.replaceAll(
                matrizCifrado[i][0],
                matrizCifrado[i][1]
            )
        }
    }
    return fraseCifrada;
};

function Descifrar(fraseDescifrada) {
    const matrizDescifrado = [...matrizCifrado].reverse();
    for (let i = 0; i < matrizDescifrado.length; i++) {
        if (fraseDescifrada.includes(matrizDescifrado[i][0])) {
            fraseDescifrada = fraseDescifrada.replaceAll(
                matrizDescifrado[i][1],
                matrizDescifrado[i][0]
            )
        }
    }
    return fraseDescifrada;
};
