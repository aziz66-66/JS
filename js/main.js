var myTextArea=document.getElementById("myText");
var selectSize=document.getElementById("size");
var selectPolice=document.getElementById("police");

function Bold(){
    if(myTextArea.style.fontWeight=="bold"){
        myTextArea.style.fontWeight="normal";
    }
    else{
        myTextArea.style.fontWeight="bold";
    }
}

function Italic(){
    if(myTextArea.style.fontStyle=="italic"){
        myTextArea.style.fontStyle="normal";
    }
    else{
        myTextArea.style.fontStyle="italic";
    }
}

function Underline(){
    if(myTextArea.style.textDecoration=="underline"){
        myTextArea.style.textDecoration="";
    }
    else{
        myTextArea.style.textDecoration="underline";
    }
}

function Size(){
    myTextArea.style.fontSize=selectSize.value;
}

function Police(){
    myTextArea.style.fontFamily=selectPolice.value;
}