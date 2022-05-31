const uploadBtn = document.getElementById('upload-button');

const fileChosen = document.querySelector("#file-chosen")

const umbrella = document.getElementById("umbrella-image");
const logo = document.querySelector("#logo-image")
let activeColor = "blue"
let umbrellaColor = "Blue umbrella"
const loader = document.getElementById('loader');
let html = "";

//   logic for uploading logo
uploadBtn.addEventListener('change', function () {
    html = ""
    logo.src = ""
    umbrella.src = ""
    umbrella.style.width = 0
    logo.style.width = 0
    loader.style.display = "block"
    setTimeout(() => {
        console.log(this.files);
        if (this.files[0]) {
            logo.src = window.URL.createObjectURL(this.files[0])
        }
        else {
            logo.src = ""
        }

        umbrella.src = `../src/assets/${umbrellaColor}.png`
        logo.style.width = "100px"
        umbrella.style.width = 500
        loader.style.display = "none"
    }, 2000);
    html = `<img src="../src/assets/upload_icon.svg" height ="20" width="40" style="float:left;"/>${this.files[0].name}<button id="cancelButton(event)" onclick="cancelUpload()" style="float:right; background-color:white; z-index:2";>X</button>`
    fileChosen.innerHTML = html
    fileChosen.style.backgroundColor = activeColor
})

// function for cancel in upload button
function cancelUpload() {
    html = `<img src="../src/assets/upload_icon.svg" height ="20" width="40" style="float:left; z-index:1"/>UPLOAD LOGO`
    fileChosen.innerHTML = html
    fileChosen.style.backgroundColor = "indigo"
    logo.src = ""
   
}
//  function to change umbrella color including logic for loader
function changeUmbrellaColor(input) {

    if (input === "color-picker-pink") {
        umbrellaColor = "Pink umbrella"
        activeColor = "pink"
        fileChosen.style.backgroundColor = "pink"
    }
    else if (input === "color-picker-yellow") {
        umbrellaColor = "Yellow umbrella"
        activeColor = "light-yellow"
        fileChosen.style.backgroundColor = "yellow"
    }
    else if (input === "color-picker-blue") {
        umbrellaColor = "Blue umbrella"
        activeColor = "blue"
        fileChosen.style.backgroundColor = "blue"
    }
    else
        umbrellaColor = "Blue umbrella"

    umbrella.src = ""
    logo.style.display = "none"
    logo.style.width = 0
    loader.style.display = "block"
    umbrella.style.width = 0
    setTimeout(() => {
        logo.style.display = "block"
        if (logo.src !== "")
            logo.style.width = 100
        umbrella.src = `../src/assets/${umbrellaColor}.png`
        umbrella.style.width = 500
        loader.style.display = "none"
    }, 1500);
}

