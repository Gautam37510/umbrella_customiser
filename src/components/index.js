const uploadBtn = document.getElementById('upload-button');

const fileChosen = document.querySelector("#file-chosen")
const fileChosen2 = document.querySelector("#file-chosen2")

const umbrella = document.getElementById("umbrella-image");
const logo = document.querySelector("#logo-image")
let activeColor = "rgb(23, 29, 151)"
let umbrellaColor = "Blue_umbrella"
const loader = document.getElementById('loader');
let html = "";
let logoFlag = false

//   logic for uploading logo
uploadBtn.addEventListener('change', function () {
    html = ""
    logo.src = ""
    umbrella.src = ""
    umbrella.style.width = 0
    logo.style.width = 0
    loader.style.display = "block"
    const maxAllowedSize = 5 * 1024 * 1024;
    setTimeout(() => {

        if (this.files[0] && this.files[0].size < maxAllowedSize) {
            logo.src = window.URL.createObjectURL(this.files[0])
        }
        else if (this.files[0] && this.files[0].size > maxAllowedSize) {
            alert("File size exceeds maximum limit")
            this.value = ''
        }
        umbrella.src = `../src/assets/${umbrellaColor}.png`
        logo.style.width = "90px"
        logo.style.height = "25px"

        umbrella.style.width = 450
        loader.style.display = "none"
    }, 2000);
    if (this.files && this.files.length !== 0 && this.files[0].name && this.files[0].size < maxAllowedSize) {
        html = `<img src="../src/assets/upload_icon.svg"  id="uploadIcon"/>${this.files[0].name}<button id="cancelButton" onclick="cancelUpload()" ;>X</button>`
        fileChosen.innerHTML = html
        logoFlag = true
        logo.style.display = "block"
    }
    fileChosen.style.backgroundColor = activeColor
})

// function for cancel in upload button
function cancelUpload() {
    html = `<img src="../src/assets/upload_icon.svg" id="uploadIcon"/>UPLOAD LOGO`
    fileChosen.innerHTML = html
    fileChosen.style.backgroundColor = activeColor
    logo.src = ""
    logo.style.display = "none"
    logoFlag = false
}

//  function to change umbrella color including logic for loader
function changeUmbrellaColor(input) {

    if (input === "color-picker-pink") {
        umbrellaColor = "Pink_umbrella"
        activeColor = "rgb(199, 86, 135)"
        fileChosen.style.backgroundColor = "rgb(199, 86, 135)"
        document.getElementById("container").style.backgroundColor = "rgb(246, 223, 237)"
    }
    else if (input === "color-picker-yellow") {
        umbrellaColor = "Yellow_umbrella"
        activeColor = "rgb(214, 157, 78)"
        fileChosen.style.backgroundColor = "rgb(214, 157, 78)"
        document.getElementById("container").style.backgroundColor = "rgb(245, 242, 214)"
    }
    else if (input === "color-picker-blue") {
        umbrellaColor = "Blue_umbrella"
        activeColor = "rgb(23, 29, 151)"
        fileChosen.style.backgroundColor = "rgb(23, 29, 151)"
        document.getElementById("container").style.backgroundColor = "rgb(207, 207, 234)"
    }
    else
        umbrellaColor = "Blue_umbrella"

    umbrella.src = ""
    logo.style.display = "none"
    logo.style.width = 0
    logo.style.height = 0
    loader.style.display = "block"
    umbrella.style.width = 0
    setTimeout(() => {

        if (logo.src !== "" && logoFlag) {
            logo.style.display = "block"
            logo.style.width = 90
            logo.style.height = 25
        }

        umbrella.src = `../src/assets/${umbrellaColor}.png`
        umbrella.style.width = 450
        loader.style.display = "none"
    }, 1500);
}

