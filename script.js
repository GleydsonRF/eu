const Body = document.body;
const Menu = document.querySelector(".Menu");
const Hamburger = document.querySelector(".Hamburger");
const Modal = document.querySelector(".Modal");
const CloseModal = document.querySelector(".CloseModal");
const ModalConteudo = document.querySelector(".ModalConteudo");
const Plus = document.querySelector(".Plus");
const YTButton = document.querySelector("#YTButton");

const Video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Di-qI09MdB8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

Hamburger.addEventListener("click", function () {
    Menu.classList.add("Visible")
    Body.classList.add("NoScroll");
})

Menu.addEventListener("click", function () {
    Menu.classList.remove("Visible")
    Body.classList.remove("NoScroll");
})

Plus.addEventListener("click", function () {
    AddModal(" Olá, isso é apenas um texto para testar o Modal &#x1F600, pode ser usado para várias coisas.")
});

YTButton.addEventListener("click", function () {
    AddModal(Video)
});

CloseModal.addEventListener("click", function () {
    Body.classList.remove("NoScroll");
    Modal.classList.remove("Visible");
    ModalConteudo.innerHTML = "";
})

function AddModal(item) {
    ModalConteudo.innerHTML = item;
    Body.classList.add("NoScroll");
    Modal.classList.add("Visible");
    return
}