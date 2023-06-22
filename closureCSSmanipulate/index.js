function increaseSize(size) {
  return function () {
    console.log("size:", size);
    document.body.style.fontSize = size + "px";
  };
}
let size16 = increaseSize(16);
let size20 = increaseSize(20);
let size8 = increaseSize(8);

document.getElementById("size-16").onclick = size16;
document.getElementById("size-20").onclick = size20;
document.getElementById("size-8").onclick = size8;
