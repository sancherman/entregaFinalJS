const divGral = document.getElementById('divGral')
const sectionGral = document.createElement('section')
sectionGral.setAttribute('id',"sectionGral");
sectionGral.setAttribute('class',"sectionGral");
const buttonSavePallet = document.createElement('button');
buttonSavePallet.setAttribute('id','buttonSavePallet');
buttonSavePallet.innerText = "Guardar Paleta";
const dataFromLocalStorage = localStorage.getItem('dataFromAPIJSON');
const dataFromLocalStorageJSON = JSON.parse(dataFromLocalStorage)
divGral.append(buttonSavePallet);
divGral.append(sectionGral)
class myColourConst{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
const arrayForSave = [];
function createRGBForSave(a,b,c){
    const colourForSave = new myColourConst(a,b,c)
    console.log(colourForSave)
    arrayForSave.push(colourForSave)
}
function createPalletsForShow(e){
const sectionPallets = document.createElement('section');
sectionPallets.setAttribute('id',"sectionPallets");
sectionPallets.setAttribute('class',"sectionPallets");
    for(i=0;i<e.length;i++){
        const R = e[i].rgb.r;
        const G = e[i].rgb.g;
        const B = e[i].rgb.b;
        
        createRGBForSave(R,G,B);
        let XYZ = document.createElement('h4');
        let cmyk = document.createElement('h4');
        let hex = document.createElement('h4');
        let hsl = document.createElement('h4');
        let hsv = document.createElement('h4');
        let rgb = document.createElement('h4');
        let XYZp = document.createElement('p');
        let cmykp = document.createElement('p');
        let hexp = document.createElement('p');
        let hslp = document.createElement('p');
        let hsvp = document.createElement('p');
        let rgbp = document.createElement('p');
        let circleForShow = document.createElement('div');
        let eachPallets = document.createElement('div');
        eachPallets.setAttribute('id',"eachPallets");
        eachPallets.setAttribute('class',"eachPallets");
        sectionPallets.append(eachPallets);
        let colourForShow = e[i].rgb.value;
        let textOfCircle = document.createElement('p')
        textOfCircle.innerText = e[i].name.value;
        textOfCircle.setAttribute('id',"textOfCircle");
        textOfCircle.setAttribute('class',"textOfCircle");
        circleForShow.append(textOfCircle)
        circleForShow.style.backgroundColor= colourForShow;
        XYZ.innerText= "XYZ";
        XYZ.setAttribute('id',"XYZ");
        cmyk.innerText= "cmyk";
        cmyk.setAttribute('id',"cmyk");
        hex.innerText= "hex";
        hex.setAttribute('id',"hexp");
        hsl.innerText= "hsl";
        hsl.setAttribute('id',"hsl");
        hsv.innerText= "hsv";
        hsv.setAttribute('id',"hsv");
        rgb.innerText= "rgb";
        rgb.setAttribute('id',"rgb");
        XYZp.innerText= e[i].XYZ.value;
        XYZp.setAttribute('id',"XYZp");
        cmykp.innerText= e[i].cmyk.value;
        cmykp.setAttribute('id',"cmykp");
        hexp.innerText= e[i].hex.value;
        hexp.setAttribute('id',"hexp");
        hslp.innerText= e[i].hsl.value;
        hslp.setAttribute('id',"hslp");
        hsvp.innerText= e[i].hsv.value;
        hsvp.setAttribute('id',"hsvp");
        rgbp.innerText= e[i].rgb.value;
        rgbp.setAttribute('id',"rgbp");
        circleForShow.setAttribute('id',"circleForShow");
        circleForShow.setAttribute('class',"circleForShow");
        eachPallets.append(circleForShow);
        eachPallets.append(XYZ);
        eachPallets.append(XYZp);
        eachPallets.append(cmyk);
        eachPallets.append(cmykp);
        eachPallets.append(hex);
        eachPallets.append(hexp);
        eachPallets.append(hsl);
        eachPallets.append(hslp);
        eachPallets.append(hsv);
        eachPallets.append(hsvp);
        eachPallets.append(rgb);
        eachPallets.append(rgbp);

    }
    sectionGral.append(sectionPallets);
}
createPalletsForShow(dataFromLocalStorageJSON);
deleteItemFromLS();
function deleteItemFromLS(){
    if(dataFromLocalStorageJSON){
        localStorage.removeItem('dataFromAPIJSON');
    }
}
buttonSavePallet.onclick = () =>{
    Toastify({
        text:`Paleta Guardada`,
        duration: 3000,
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #9eee09, #9fa100)",
        },
    }).showToast()
    let i = localStorage.length;
    const jSonSavedArrayPallets = JSON.stringify(arrayForSave);
    localStorage.setItem('jSonSavedArrayPallets'+i,jSonSavedArrayPallets);
}
