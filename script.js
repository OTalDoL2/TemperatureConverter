function calculator(){
    let val1   = parseInt(document.getElementById("val1").value);
    let operacao  = document.getElementById("operacao").value;
    let result = document.getElementById("result");

    if(operacao == "CF")    result.value = (val1 *  9)/5 + 32;          // C para F
    if(operacao == "CK")    result.value = (val1 + 273.15);                // C para K
    if(operacao == "FC")    result.value = (val1 - 32) * 5/9;              // F para C
    if(operacao == "FK")    result.value = (val1 - 32) * 5/9 + 273.15;  // F para K
    if(operacao == "KC")    result.value = (val1 - 273.15);                 // K para C
    if(operacao == "KF")    result.value = (val1 - 273.15) * 9/5 + 32;  // K para F
    }