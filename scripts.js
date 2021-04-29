const text = document.getElementById("input-text");
const k = document.getElementById("k-size");
const out = document.getElementById("output");

var button = document.getElementById("btn");

button.addEventListener("click", function(){
    str = text.value;
    text_output = "";
    k_value = Number(k.value);
    for(var i = 0; i < str.length; i++){
        c_i = str[i];
        if(c_i != ' '){
            c = str.charCodeAt(i)
            if(c >= 65 && c <= 90){
                shift = ((c - 65 + k_value) % 26) + 65;
            }
            else if(c >= 97 && c <= 122){
                shift = ((c - 97 + k_value) % 26) + 97;
            }
        c_i = String.fromCharCode(shift);
        }
        text_output += c_i;
    }
    out.innerHTML = text_output;
}); 
