let str = "";
let picArr = [];
let score = 0
for (let i = 0; i < 10; i++) {
  picArr.push(i, i);
}
for (let i = 0; i < 20; i++) {
  let randomImg = Math.floor(Math.random() * picArr.length);
  str +=
    "<div class='card'><div class='card-face front'></div><img src='images/image" +
    picArr[randomImg] +
    ".jpeg' class='card-face back' /></div>";
  picArr.splice(randomImg, 1);
}
document.getElementsByClassName("cards")[0].innerHTML = str;
let sensor = -1;
let insertedImg = [];
let loseSong = new Audio("https://audio.code.org/losepoint2.mp3");
let winSong = new Audio("https://audio.code.org/win1.mp3");
document.querySelectorAll(".card").forEach((element) => {
  element.addEventListener("click", checkFlip);
});
function checkFlip() {
  if (sensor < 1) {
    picArr.push(this);
    sensor++;
    this.children[1].style.transform = "rotateY(0deg)";
    this.children[0].style.transform = "rotateY(180deg)";
    let pic = this;
    setTimeout(returnFlip, 1500, pic);
  }
}
async function returnFlip(pic) {
  pic.children[1].style.transform = "rotateY(180deg)";
  pic.children[0].style.transform = "rotateY(0deg)";
  if (picArr.length == 2) {
    if (
      picArr[0].children[1].attributes[0].nodeValue !=
      picArr[1].children[1].attributes[0].nodeValue
    ) {
      loseSong.play();
    } else {
      winSong.play();
      picArr[0].style.opacity = "0";
      picArr[1].style.opacity = "0";
      let remove = [picArr[0], picArr[1]];
      await removeCards(...remove);
      document.getElementsByTagName("li")[0].innerHTML="score : "+ ++score
    }
  }
  picArr.splice(sensor, 1);
  sensor--;
}
async function removeCards() {
  setTimeout(function () {
    arguments[0].style.visibility = "hidden";
    arguments[1].style.visibility = "hidden";
  }, 1500);
}
function returnToMain(){
  open('../index.html','_self')
}
