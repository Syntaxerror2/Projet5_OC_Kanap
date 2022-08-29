
//On récupère l'ID propre à l'article dans l'URL
let params = new URL(document.location).searchParams;
let id = params.get("id");
console.log(id);

//on récupère les caractéristiques de l'article grâce au paramètre de son id
function displayProduct() {
    fetch(`http://localhost:3000/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        document.querySelector(".item__img").innerHTML = `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        document.querySelector("#title").innerHTML = data.name;
        document.querySelector("#price").innerHTML = data.price;
        document.querySelector("#description").innerHTML = data.description;
        let color = document.querySelector("#colors");

// On effectue une boucle pour récupérer l'ensemble des couleurs
        for(i = 0; i < data.colors.length; i++) {
            color.innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`
        }
    })
}


// Reste à désactiver le bouton si les champs ne sont pas remplis
// Reste à donner la possibilité d'ajouter un article au pannier (mettre en tableau, itérer dans le tableau, comme d'hab)


displayProduct();