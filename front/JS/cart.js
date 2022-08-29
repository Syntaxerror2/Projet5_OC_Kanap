let data = [];

//récupération des données de l'API

const fetchKanap = async () => {
    await fetch(`http://localhost:3000/api/products`)
    .then((res) => res.json())
    .then((promise) => {data = promise; 
                        console.log(data);
                    });
};

//affichage des propriétés de l'objet
const displayKanap = async () => {
    await fetchKanap();
    let prices = data[2].price / 10;

    document.getElementById("cart__items").innerHTML = `<article class="cart__item" data-id="${data[2]._id}" data-color="{data[2].colors}">
    <div class="cart__item__img">
      <img src="${data[2].imageUrl}" alt="${data[2].altTxt}" />
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${data[2].name}</h2>
        <p>${data[2].colors[0]}</p>
        <p>${prices + "0 €"}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`;


    
};


//contrôle du mail
//function emailValidator(email) {
  //const regexMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //if (regexMail.test(email) == false) {
   // document.getElementById("emailErrorMsg").innerHTML = "email incorrect";
   // return false;
 // } else {
   // document.getElementById("emailErrorMsg").innerHTML = null;
   // return true;
//  }
//}

//document.getElementById("email").addEventListener("input", emailValidator(email));

displayKanap();