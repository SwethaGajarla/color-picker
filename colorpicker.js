let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let button = document.getElementById("clickBtn");
let colorDisplay = document.getElementById("colorDisplay");
 button.onclick = function (){
    let lengthOfArray = bgColorsArray.length;
    let index = Math.ceil(Math.random() * lengthOfArray)
    colorDisplay.style.backgroundColor = bgColorsArray[index]
}
