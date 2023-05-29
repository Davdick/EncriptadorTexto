function Encriptar(){
    
    var texto=document.getElementById("texto").value;
    texto = texto.toLowerCase();
    var arr = texto.split('');
    //var arr=ar.split('');

    for(let i=0; i<arr.length; i++){
        if(arr[i]=='a'){
            arr.splice(i,1,'ai')
        }
        if(arr[i]=='e'){
            arr.splice(i,1,'enter');
        }
        if(arr[i]=='i'){
            arr.splice(i,1,'imes');
        }
        if(arr[i]=='o'){
            arr.splice(i,1,'ober');
        }
        if(arr[i]=='u'){
            arr.splice(i,1,'ufat');
        }
    }
    
    res = document.getElementById("contenido");
    res.innerHTML = ""+arr.join("");
    console.log("Mensaje encriptado: "+arr);
}

function Desencriptar(){
    var texto=document.getElementById("texto").value;
    var arr = texto.split('');

    for(let i=0; i<arr.length; i++){
        if(arr[i]=='a' && arr[i+1]=='i'){
            arr.splice(i,2,'a');
        }
        if(arr[i]=='e' && arr[i+1]=='n' && arr[i+2]=='t' && arr[i+3]=='e' && arr[i+4]=='r'){
            arr.splice(i,5,'e');
        }
        if(arr[i]=='i' && arr[i+1]=='m' && arr[i+2]=='e' && arr[i+3]=='s'){
            arr.splice(i,4,'i');
        }
        if(arr[i]=='o' && arr[i+1]=='b' && arr[i+2]=='e' && arr[i+3]=='r'){
            arr.splice(i,4,'o');
        }
        if(arr[i]=='u' && arr[i+1]=='f' && arr[i+2]=='a' && arr[i+3]=='t'){
            arr.splice(i,4,'u');
        }
    }
    res = document.getElementById("contenido");
    res.innerHTML = ""+arr.join("");
    console.log("Mensaje desencriptado: "+arr);
}
function Copy() {
    var text = document.getElementById("contenido").value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}