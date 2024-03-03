const campoIngreso = document.querySelector("#textoIngresado");
const campoResultado = document.querySelector("#textoResultado");

const matrizCifrado = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

campoIngreso.addEventListener("input", () => {
    campoIngreso.value = campoIngreso.value.replace(/[^a-z0-9]/g, "");
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
            fraseCifrada = fraseCifrada.replace(
                matrizCifrado[i][0],
                matrizCifrado[i][1]
            );
        }
    }
    return fraseCifrada;
};

function Descifrar(fraseDescifrada) {
    for (let i = 0; i < matrizCifrado.length; i++) {
        if (fraseDescifrada.includes(matrizCifrado[i][0])) {
            fraseDescifrada = fraseDescifrada.replace(
                matrizCifrado[i][1],
                matrizCifrado[i][0]
            );
        }
    }
    return fraseDescifrada;
};