const textInput=document.querySelector("#text-input");
const button=document.querySelector("#btn-translate");
const textOutput=document.querySelector("#output");

const serverUrl="https://api.funtranslations.com/translate/dothraki.json";

function getTranslatedUrl(text){
    return serverUrl+"?"+"text="+text;
}

function errorHandeler(err){
    alert("failed to load.please try again..");
}

function clickHandeler(){
    const input=textInput.value;
    fetch(getTranslatedUrl(input))
    .then(res=>res.json())
    .then(json=>{
        const translatedUrl=json.contents.translated;
        textOutput.innerText=translatedUrl;
    })
    .catch(errorHandeler)

}

button.addEventListener('click',clickHandeler);