
//This code is owned and has been created by HyperNylium 🙌😎


// ====== BTN 1 ====== //

const anibtn = document.querySelector("[data-anibtn]")
const svg = document.querySelector("[data-svg]")
const SendingLinkRequest = document.querySelector("[data-text1]")
const GeneratingLink = document.querySelector("[data-text2]")
const Verifying1 = document.querySelector("[data-text3]")
const Verifying2 = document.querySelector("[data-text4]")
const Verifying3 = document.querySelector("[data-text5]")
const Verifying4 = document.querySelector("[data-text6]")
const TransferingFile = document.querySelector("[data-text7]")


anibtn.addEventListener("click", function () {

  anibtn.classList.add("animating");
  svg.classList.remove("display-none");
  anibtn.classList.remove("transition");

  setTimeout(function () {
    SendingLinkRequest.classList.remove("display-none")
  }, 50)

  setTimeout(function () {
    SendingLinkRequest.classList.add("display-none")
    GeneratingLink.classList.remove("display-none")
  }, 1050)

  setTimeout(function () {
    GeneratingLink.classList.add("display-none")
    Verifying1.classList.remove("display-none")
  }, 1500)

  setTimeout(function () {
    Verifying1.classList.add("display-none")
    Verifying2.classList.remove("display-none")
  }, 1800)

  setTimeout(function () {
    Verifying2.classList.add("display-none")
    Verifying3.classList.remove("display-none")
  }, 2000)

  setTimeout(function () {
    Verifying3.classList.add("display-none")
    Verifying4.classList.remove("display-none")
  }, 2300)

  setTimeout(function () {
    Verifying4.classList.add("display-none")
    Verifying1.classList.remove("display-none")
  }, 2600)

  setTimeout(function () {
    Verifying1.classList.add("display-none")
    Verifying2.classList.remove("display-none")
  }, 2900)

  setTimeout(function () {
    Verifying2.classList.add("display-none")
    Verifying3.classList.remove("display-none")
  }, 3200)

  setTimeout(function () {
    Verifying3.classList.add("display-none")
    Verifying4.classList.remove("display-none")
  }, 3500)

  setTimeout(function () {
    Verifying4.classList.add("display-none")
    Verifying1.classList.remove("display-none")
  }, 3800)

  setTimeout(function () {
    Verifying1.classList.add("display-none")
    Verifying2.classList.remove("display-none")
  }, 4100)

  setTimeout(function () {
    Verifying2.classList.add("display-none")
    Verifying3.classList.remove("display-none")
  }, 4400)

  setTimeout(function () {
    Verifying3.classList.add("display-none")
    Verifying4.classList.remove("display-none")
  }, 4700)

  setTimeout(function () {
    Verifying4.classList.add("display-none")
    Verifying1.classList.remove("display-none")
  }, 5000)

  setTimeout(function () {
    Verifying1.classList.add("display-none")
    Verifying2.classList.remove("display-none")
  }, 5300)

  setTimeout(function () {
    Verifying2.classList.add("display-none")
    Verifying3.classList.remove("display-none")
  }, 5600)

  setTimeout(function () {
    Verifying3.classList.add("display-none")
    Verifying4.classList.remove("display-none")
  }, 5900)

  setTimeout(function () {
    Verifying4.classList.add("display-none")
    Verifying1.classList.remove("display-none")
  }, 6200)

  setTimeout(function () {
    Verifying1.classList.add("display-none")
    Verifying2.classList.remove("display-none")
  }, 6500)

  setTimeout(function () {
    Verifying2.classList.add("display-none")
    Verifying3.classList.remove("display-none")
  }, 6800)

  setTimeout(function () {
    Verifying3.classList.add("display-none")
    Verifying4.classList.remove("display-none")
  }, 7100)

  setTimeout(function () {
    Verifying4.classList.add("display-none")
    TransferingFile.classList.remove("display-none")
  }, 7400)

  setTimeout(function () {
    anibtn.classList.add("display-none");
  }, 8525);

  setTimeout(function () {
  anibtn.classList.remove("animating");
  svg.classList.add("display-none");
  anibtn.classList.remove("display-none");
  anibtn.classList.add("transition")
  TransferingFile.classList.add("display-none");
}, 15000);

  setTimeout(function (){
    window.location.href='#'
  }, 10000)
})

// ====== BTN 1 End ====== //


// pop up start //

const closesvg = document.querySelector("[data-closesvg]")
const openbtn = document.querySelector("[data-btn]")
const container = document.querySelector("[data-container]")


openbtn.addEventListener("click", function () {

  openbtn.classList.add("display-none")
  
  setTimeout(function () {
    container.classList.remove("display-none")
  }, 10)

  setTimeout(function () {
    container.classList.add("active")
  }, 20)
})

closesvg.addEventListener("click", function () {

  container.classList.remove("active")


  setTimeout(function () {
    openbtn.classList.remove("display-none")
  }, 105)

  setTimeout(function () {
    container.classList.add("display-none")
  }, 300)
})


// pop up start //

const closesvg2 = document.querySelector("[data-closesvg2]")
const openbtn2 = document.querySelector("[data-btn2]")
const container2 = document.querySelector("[data-container2]")


openbtn2.addEventListener("click", function () {

  openbtn2.classList.add("display-none")
  
  setTimeout(function () {
    container2.classList.remove("display-none")
  }, 10)

  setTimeout(function () {
    container2.classList.add("active")
  }, 20)
})

closesvg2.addEventListener("click", function () {

  container2.classList.remove("active")


  setTimeout(function () {
    openbtn2.classList.remove("display-none")
  }, 105)

  setTimeout(function () {
    container2.classList.add("display-none")
  }, 300)
})