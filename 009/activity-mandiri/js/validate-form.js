function validateEmail(a){
    let text = a;
    return text.search(/^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/i) == 0;
}
function fn_ValForm(){
    var sMsg = "";

    if(document.getElementById("name").value == ""){
        sMsg += "\n\n[!] ANDA BELUM ISI NAMA [!]"
    }
    if(!validateEmail(document.getElementById("email").value)){
        sMsg += "\n\n[!] FORMAT EMAIL BELUM BENAR [!]"
    }
    if(document.getElementById("message").value == ""){
        sMsg += "\n\n[!] ANDA BELUM ISI PESAN [!]"
    }

    if(sMsg!= ""){
        alert("Peringatan:\n " + sMsg);
        return false;
    }else {
        return true;
    }
    
}
