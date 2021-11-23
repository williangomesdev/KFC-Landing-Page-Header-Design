//Menu navegador
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

//Adicionar / remover classe active
toggle.onclick = function () {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
