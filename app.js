function encrypt() {
    let inputText = document.getElementById("inputText").value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) + 1);
    }
    document.getElementById("outputText").value = outputText;

    // Muestra la imagen de relleno si no hay texto en el segundo textarea
    if (outputText.trim() === "") {
        document.getElementById("placeholderImage").style.display = "block";
    } else {
        document.getElementById("placeholderImage").style.display = "none";
    }
}

function decrypt() {
    let inputText = document.getElementById("outputText").value;
    let outputText = "";
    for (let i = 0; i < inputText.length; i++) {
        outputText += String.fromCharCode(inputText.charCodeAt(i) - 1);
    }
    document.getElementById("outputText").value = outputText;

    // Muestra la imagen de relleno si no hay texto en el segundo textarea
    if (outputText.trim() === "") {
        document.getElementById("placeholderImage").style.display = "block";
    } else {
        document.getElementById("placeholderImage").style.display = "none";
    }
}

//datos de encriptdo

// La lógica de encriptación y desencriptación se maneja en el archivo JavaScript. En este ejemplo, se utiliza un método muy simple de cifrado César, donde cada carácter se desplaza un lugar en el alfabeto (a se convierte en b, b se convierte en c, etc.) para encriptar y viceversa para desencriptar. Este es solo un ejemplo básico, y no debe utilizarse para fines de seguridad real, ya que es muy vulnerable a ataques de fuerza bruta. Para aplicaciones reales, es mejor utilizar algoritmos de encriptación más robustos y probados.