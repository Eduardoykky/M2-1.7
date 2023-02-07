
try {
    let salarioBase
    let salarioAumentado
    function AumentarSalarios(salarioBase) {
        salarioBase = parseInt(prompt("Insira seu salário."))
        salarioAumentado = 0
        switch (true) {
            case salarioBase <= 1500:
                salarioAumentado = salarioBase + (salarioBase * 0.20)
                console.log("Seu salário atual é: " + salarioBase + " Mas foi aumentado para: " + salarioAumentado)
                break;
            case salarioBase >= 1501 && salarioBase <= 2000:
                salarioAumentado = salarioBase + (salarioBase * 0.15)
                console.log("Seu salário atual é: " + salarioBase + " Mas foi aumentado para: " + salarioAumentado)
                break;
            case salarioBase >= 2001 && salarioBase <= 3000:
                salarioAumentado = salarioBase + (salarioBase * 0.10)
                console.log("Seu salário atual é: " + salarioBase + " Mas foi aumentado para: " + salarioAumentado)
                break;
            case salarioBase >= 3001:
                salarioAumentado = salarioBase + (salarioBase * 0.05)
                console.log("Seu salário atual é: " + salarioBase + " Mas foi aumentado para: " + salarioAumentado)
                break;    
            default:
                throw new Error("Não pode ser texto")
                break;
        }
    }
    AumentarSalarios(salarioBase)
} catch (error) {
    console.log("Erro pois não pode ser um texto.");
}