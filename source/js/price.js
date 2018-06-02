
  var linkPenino = document.querySelector('.price__link--penino');
  var linkOrlovka = document.querySelector('.price__link--orlovka');
  var price = document.querySelector('.price');
  var activeLink = document.querySelector('.price__link--active');

  linkOrlovka.addEventListener("click", function(event) {
    event.preventDefault();
    price.classList.remove("price--penino"),
    activeLink.classList.remove("price__link--active");
    price.classList.add("price--orlovka");
    linkOrlovka.classList.add("price__link--active");
  });


  linkPenino.addEventListener("click", function(event) {
    event.preventDefault();
    price.classList.remove("price--orlovka");
    linkOrlovka.classList.remove("price__link--active");
    price.classList.add("price--penino");
    activeLink.classList.add("price__link--active");
  });
