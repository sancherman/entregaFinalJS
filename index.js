let R;
let G;
let B;
let numOfSaveColour = 1;
let colourMix;

const arrayPallet = [];
// const arraySavePallet = [];
const buttons = document.getElementById('buttons');
const containerDiv = document.getElementById('containerDiv');
const sectionShowAllPallets = document.getElementById('sectionShowAllPallets');
const buttonShowPreviusSavedPallets = document.getElementById('buttonShowPreviusSavedPallets');
const buttonSaveColour = document.getElementById('buttonSaveColour');
const buttonSavePallet = document.createElement('button');
const buttonDeleteSavedPallets = document.createElement('button');
const buttonCleanScreen = document.createElement('button');
buttonCleanScreen.setAttribute('id',"buttonCleanScreen");
const buttonMoreR = document.getElementById('buttonMoreR');
const buttonMoreG = document.getElementById('buttonMoreG');
const buttonMoreB = document.getElementById('buttonMoreB');
const buttonLessR = document.getElementById('buttonLessR');
const buttonLessG = document.getElementById('buttonLessG');
const buttonLessB = document.getElementById('buttonLessB');
const Circle1ID = document.getElementById("Circle1ID");
const textR = document.getElementById("R");
const textG = document.getElementById("G");
const textB = document.getElementById("B");
const buttonDeletePallet = document.createElement('button');
buttonDeletePallet.setAttribute('id',"buttonDeletePallet");
buttonDeletePallet.innerText = "Eliminar Paleta";
buttons.append(buttonDeletePallet);
buttonDeletePallet.disabled = true;
buttonSavePallet.setAttribute('id',"buttonSavePallet");
buttonSavePallet.innerText = "Guardar Paleta";
buttons.append(buttonSavePallet);
buttonSavePallet.disabled = true;
buttonSaveColour.innerText = ('Guardar Color 1');
fillRandomColourData();
textR.value = R;
textG.value = G;
textB.value = B;
colourMix = 'rgb('+R+','+G+','+B+')';
Circle1ID.style.backgroundColor= colourMix;
// Swal.fire({
//         title: "Bienvenido a la creadora de paletas, para crear una debe guardar 5 colores...",
//         confirmButtonColor: '#6da800',
//     })
savedDataLocalStorage();
buttonDeletePallet.onclick= (e) =>{
    Toastify({
        text:`Paleta Eliminada`,
        duration: 3000,
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #9eee09, #9fa100)",
        },
    }).showToast()
    deleteSave(e.target.id);
}
buttonSavePallet.onclick = (e) =>{
    Toastify({
        text:`Paleta Guardada`,
        duration: 3000,
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #9eee09, #9fa100)",
        },
    }).showToast()
    deleteSave(e.target.id);
}
buttonSaveColour.onclick = () =>{
    fSaveColour();
}
buttonCleanScreen.onclick = () =>{
    cleanView();
    buttonShowPreviusSavedPallets.disabled = false;
    buttonDeleteSavedPallets.remove();
    buttonCleanScreen.remove();
}
buttonMoreR.onclick = (e) =>{
    verificationForMix(e.target.id);
}
buttonLessR.onclick = (e) =>{
    verificationForMix(e.target.id);
}
buttonMoreG.onclick = (e) =>{
    verificationForMix(e.target.id);
}
buttonLessG.onclick = (e) =>{
    verificationForMix(e.target.id);
}
buttonMoreB.onclick = (e) =>{
    verificationForMix(e.target.id);
}
buttonLessB.onclick = (e) =>{
    verificationForMix(e.target.id);
}
textR.oninput = (e) => {
    R = Number.parseFloat(e.target.value);
    verificationForMixText(R);
}
textG.oninput = (e) => {
    G = Number.parseFloat(e.target.value);
    verificationForMixText(G);
}
textB.oninput = (e) => {
    B = Number.parseFloat(e.target.value);
    verificationForMixText(B);
}
buttonDeleteSavedPallets.onclick = () =>{
    Toastify({
        text:`Elimino Todas Las Paletas Guardadas`,
        duration: 3000,
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #9eee09, #9fa100)",
        },
    }).showToast()
    localStorage.clear();
    cleanView();
    buttonDeleteSavedPallets.remove();
    buttonCleanScreen.remove();
}
buttonShowPreviusSavedPallets.onclick = () =>{
    createDivShowAllPallets();
    showSavedPalletsByCPFS();
    buttonSaveColour.disabled = true;
    buttonShowPreviusSavedPallets.disabled = true;
    buttonDeleteSavedPallets.innerText = "Eliminar Las Paletas Guardadas";
    buttonCleanScreen.innerText = "Limpiar Pantalla";
    containerDiv.append(buttonDeleteSavedPallets);
    containerDiv.append(buttonCleanScreen);
    buttonCleanScreen.disabled = false;
    buttonDeleteSavedPallets.disabled = false;
}
function savedDataLocalStorage(){    
    if (localStorage.length === 0 ){
        buttonShowPreviusSavedPallets.disabled = true;
        return true;
    }else{
        buttonShowPreviusSavedPallets.disabled = false;
        return false;
    }
}
function showSavedPalletsByCPFS(){
    
        const otro = localStorage.getItem('jSonSavedArrayPallets');
        const otroarray = JSON.parse(otro)
        console.log(otroarray)
        
    // for(iLocal=0;iLocal<localStorage.length;iLocal++){
    //     const showSavedArrayPallets = localStorage.getItem('jSonSavedArrayPallets'+iLocal);
    //     createPalletsForShow(JSON.parse(showSavedArrayPallets));
    // }
}

const arrayGral = []
function saveInLocalStorage(el){
    
    // if (localStorage.length===1){
    //     const otro = localStorage.getItem('jSonSavedArrayPallets');
    //     const otroarray = JSON.parse(otro)
    //     arrayDefinitive.push(otroarray)
    //     console.log(arrayDefinitive)
    // }else{
        // let i = 0
        // const palletObj = new palletConst(i,el)
        // i++
        // console.log(palletObj)
        // arrayDefinitive.push(palletObj)
        // console.log(arrayDefinitive)
        // arrayDefinitive.push(el)
        // console.log(arrayDefinitive)
        // const arrayDefinitiveJSON = JSON.stringify(arrayDefinitive)
        // console.log(arrayDefinitiveJSON)
        // localStorage.setItem('jSonSavedArrayPallets',arrayDefinitiveJSON);
        // const otro = localStorage.getItem('jSonSavedArrayPallets');
        // const otroarray = JSON.parse(otro)
        // console.log(otroarray)
        

        
        const jSonSavedArrayPallets = JSON.stringify(el);
        arrayGral.push(jSonSavedArrayPallets)
        console.log(arrayGral)
        localStorage.setItem('arrayGral',arrayGral);
        const otro = JSON.parse(localStorage.getItem('arrayGral'));
        console.log(otro)

    
}

class palletConst{
    constructor(id,pallet){
        this.id = id;
        this.pallet = pallet;
    }
}
// localStorage.clear();
let sectionPallets
function createPalletsForShow(e){
    sectionPallets = document.createElement('section');
    sectionPallets.setAttribute('id',"sectionPallets");
    sectionPallets.setAttribute('class',"sectionPallets");
    divShowAllPallets.append(sectionPallets);
    for(i=0;i<e.length;i++){
        let showR = document.createElement('h1');
        let showG = document.createElement('h1');
        let showB = document.createElement('h1');
        let inputR = document.createElement('input');
        let inputG = document.createElement('input');
        let inputB = document.createElement('input');
        let circleForShow = document.createElement('div');
        let eachPallets = document.createElement('div');
        eachPallets.setAttribute('id',"eachPallets");
        eachPallets.setAttribute('class',"eachPallets");
        sectionPallets.append(eachPallets);
        showR.innerText= "R";
        showR.setAttribute('id',"showR");
        showG.innerText= "G";
        showG.setAttribute('id',"showG");
        showB.innerText= "B";
        showB.setAttribute('id',"showB");
        inputR.value= e[i].a;
        inputR.setAttribute('id',"inputR");
        inputG.value= e[i].b;
        inputG.setAttribute('id',"inputG");
        inputB.value= e[i].c;
        inputB.setAttribute('id',"inputB");
        circleForShow.setAttribute('id',"circleForShow");
        circleForShow.setAttribute('class',"circleForShow");
        let colourForShow = 'rgb('+e[i].a+','+e[i].b+','+e[i].c+')';
        circleForShow.style.backgroundColor= colourForShow;
        eachPallets.append(showR);
        eachPallets.append(inputR);
        eachPallets.append(showG);
        eachPallets.append(inputG);
        eachPallets.append(showB);
        eachPallets.append(inputB);
        eachPallets.append(circleForShow);
    }
}
let divShowAllPallets
function createDivShowAllPallets(){
    divShowAllPallets = document.createElement('div');
    sectionShowAllPallets.append(divShowAllPallets);
}
function deleteSave(e){
    cleanView();
    if(e === "buttonSavePallet"){
        saveInLocalStorage(arrayPallet);
        savedDataLocalStorage();
        arrayPallet.splice(0,arrayPallet.length);
    }else{
        arrayPallet.splice(0,arrayPallet.length);
    }
}




    // let i = arrayDefinitive.length;
    // const palletObj = new palletConst(i,el)
    // arrayDefinitive.push(palletObj)
    // if(localStorage.length===0){
        
        
    //     const jSonSavedArrayPallets = JSON.stringify(arrayDefinitive);
    //     localStorage.setItem('jSonSavedArrayPallets',jSonSavedArrayPallets);
    //     const showSavedArrayPallets = localStorage.getItem('jSonSavedArrayPallets');
    //     console.log(JSON.parse(showSavedArrayPallets));
    // }else{
        
        
    //     const obtener = localStorage.getItem('jSonSavedArrayPallets');
    //     const obtenerJSON = (JSON.parse(obtener));
    //     console.log(obtenerJSON)
    //     console.log(arrayDefinitive)
    //     // console.log(arrayDefinitive)
    //     // const showSavedArrayPallets = localStorage.getItem('jSonSavedArrayPallets');
    //     // console.log(JSON.parse(showSavedArrayPallets));
    //     // console.log(arrayDefinitive)
    // }
    

function cleanView(){
    divShowAllPallets.remove();
    if(localStorage.length === 0){
        buttonShowPreviusSavedPallets.disabled = true;
    }
    buttonSavePallet.disabled = true;
    buttonDeletePallet.disabled = true;
    buttonSaveColour.disabled = false;
    buttonDeleteSavedPallets.disabled = true;
    buttonCleanScreen.disabled = true;
}
function showAllPallets(){
    createDivShowAllPallets();
    createPalletsForShow(arrayPallet);
    buttonSaveColour.disabled = true;
    buttonSavePallet.disabled = false;
    buttonDeletePallet.disabled = false;
}
function fSaveColour(){
    if(validateSave(textR.value,textG.value,textB.value)){
        let newColour = new myColourConst(numOfSaveColour,R,G,B)
        if (numOfSaveColour === 5){            
            arrayPallet.push(newColour);
            showAllPallets();
            buttonSaveColour.innerText = ('Guardar Color 1');
            numOfSaveColour = 1;
        }else{
            arrayPallet.push(newColour);
            numOfSaveColour = arrayPallet.length+1;
            buttonSaveColour.innerText = ('Guardar Color '+numOfSaveColour);
            
        }
    }
}
function mix(){
    colourMix = 'rgb('+R+','+G+','+B+')';
    Circle1ID.style.backgroundColor= colourMix;
}
function verificationForMix(e){
    switch (e) {
        case "buttonMoreR":
            if(validate(R) === true){
                R = R + 1;
                textR.value = R;
                mix()
            }else if(R === 0){
                R = R + 1;
                textR.value = R;
                mix()
            }
        break    
        case "buttonLessR":
            if(validate(R) === true){
                R = R - 1;
                textR.value = R;
                mix()
            }else if(R === 255){
                R = R - 1;
                textR.value = R;
                mix()
            }
        break  
        case "buttonMoreG":
            if(validate(G) === true){
                G = G + 1;
                textG.value = G;
                mix()
            }else if(G === 0){
                G = G + 1;
                textG.value = G;
                mix()
            }
        break    
        case "buttonLessG":
            if(validate(G) === true){
                G = G - 1;
                textG.value = G;
                mix()
            }else if(G === 255){
                G = G - 1;
                textG.value = G;
                mix()
            }
        break    
        case "buttonMoreB":
            if(validate(B) === true){
                B = B + 1;
                textB.value = B;
                mix()
            }else if(B === 0){
                B = B + 1;
                textB.value = B;
                mix()
            }
        break    
        case "buttonLessB":
            if(validate(B) === true){
                B = B - 1;
                textB.value = B;
                mix()
            }else if(B === 255){
                B = B - 1;
                textB.value = B;
                mix()
            }
        break    
    }
}
function verificationForMixText(e){
    if(validate(e) === true){
        mix()
    }else if(e === 0 || e === 255){
        mix()
    }
}
function validate(n){
    if (n >0 & n <255 ){
        return true;
    }else{
        return false;
    }
}
function validateSave(a,b,c){
    if(a === "" || b === "" || c === ""){
        Swal.fire("Solo puede ingresar numeros entre 0 y 255")
        return false;
    }else{
        if(a >= 0 & a <= 255 & b >= 0 & b <= 255 & c >= 0 & c <= 255){
            return true;
        }else{
            Swal.fire("Solo puede ingresar numeros entre 0 y 255")
            return false;
        }
    }
}
class myColourConst{
    constructor(id,a,b,c){
        this.id = id;
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
function randomRGB(){
    return Math.floor(Math.random() * 256);
}
function fillRandomColourData(){
    R = randomRGB();
    G = randomRGB();
    B = randomRGB();
}
const arrayPalletsFromAPI = [];
const buttonGetAPI = document.getElementById("buttonGetAPI");
buttonGetAPI.onclick = async () => {
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-center',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
    })
    Toast.fire({
        icon: 'success',
        title: 'Cargando Paleta'
    })
    await getPalletFromAPI()
    ventanaSecundaria()
    
}

async function getPalletFromAPI(){
    for(let i=0;i<5;i++){
        const colourMixForApi = 'rgb('+randomRGB()+','+randomRGB()+','+randomRGB()+')';
        const palletsFromAPI = await fetch(`https://www.thecolorapi.com/id?rgb=${colourMixForApi}`);
        const palletsFromAPIJSON = await palletsFromAPI.json()
        arrayPalletsFromAPI.push(palletsFromAPIJSON)
        // console.log(palletsFromAPIJSON.rgb.value);    
    }
    return arrayPalletsFromAPI;
}

function ventanaSecundaria(){ 
    window.open('./palletsAPI.html',"ventana1","width=800,height=800,scrollbars=NO")

}

