// function cal() {
//     const num1 = +document.querySelector("#number1").Value;
//     const num2 = +document.querySelector("#number2").value;
//     const operator = document.querySelector("#operator").value;
//     const calculate_result = document.querySelector("#result")

   
//     switch (operator) {
//         case "+":
//             calculate_result.innerHTML = num1 + num2;
//             break;
//         case "-":
//             calculate_result.innerHTML = num1 - num2;
//             break;
//         case "*":
//             calculate_result.innerHTML = num1 * num2
//             break;
//         case "/":
//             calculate_result.innerHTML = num1 / num2;
//             break;

//         default:
//             calculate_result.innerHTML = "Error";
//     }


// }













function cal() {
        const num1 = +(document.querySelector("#number1").value);
        const num2 = +(document.querySelector("#number2").value);
        const operator = document.querySelector("#operator").value;
        const calculate_result = document.querySelector("#result");
    //     // console.log(num1);
    //     // console.log(num2);
    //     // console.log(operator);
        switch (operator) {
            case "+":
                calculate_result.innerHTML = num1 + num2;
                calculate_result
                break;
            case "-":
                calculate_result.innerHTML = num1 - num2;
                break;
            case "*":
                calculate_result.innerHTML = num1 * num2
                break;
    
            case "/":
                calculate_result.innerHTML = num1 / num2;
                break;
    
            default:
                calculate_result.innerHTML = "Error";
        }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    