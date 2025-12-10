export function kalkulator(angka1, angka2, operator) {
switch (operator) {
case "+":
    return angka1 + angka2;  
    break;
// tambahkan case untuk pengurangan
case "-":
    return  angka1 - angka2;
    break;
// tambahkan case untuk perkalian
case "*":
    return angka1 * angka2;
    break;
// tambahkan case untuk pembagian
case "/":
    return angka1 / angka2;
    break; 
default:
return "Operator tidak valid!";
}
}