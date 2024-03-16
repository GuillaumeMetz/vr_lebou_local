let skybox = null;
let items = null;
let backButton = null;

let assetLobbyImg = document.addEventListener("DOMContentLoaded", function () {
    // Skybox
    skybox = document.querySelector("#skyboxbg");

    // Back button
    backButton = document.querySelector("#backButton");
    backButton.addEventListener("click", onBackButtonClick);

    // Items
    items = document.querySelectorAll(".item");
    items.forEach(function (entity) {
        entity.addEventListener("click", onItemClick);
    });
});

/**
 * Appelé au clic sur un item
 */
const onItemClick = (event) => {
    const el = event.target;
    const itemId = el.getAttribute("id");
    goToItemLocation(itemId);
};

/**
 * Go to an item location
 */
const goToItemLocation = (itemId) => {
    // Récupère l'url de l'image du lieu
    const imageURL = document
        .querySelector("#" + itemId + "BG")
        .getAttribute("src");

    // Change l'url de la skybox par celle du lieu
    skybox.setAttribute("src", imageURL);

    // Afficher le bouton de retour
    backButton.setAttribute("visible", true);

    // Cacher tous les items
    for (const item of items) {
        item.setAttribute("visible", false);
    }
};

/**
 * Appelé au clic sur le bouton retour
 */
const onBackButtonClick = () => {
    // Récupère l'url de l'image du lobby
    const imageUrl = document.querySelector("#lobbyBG").getAttribute("src");

    // Change l'url de la skybox par celle du lobby
    skybox.setAttribute("src", imageUrl);

    // Cacher le bouton de retour
    backButton.setAttribute("visible", false);

    // Afficher tous les items
    for (const item of items) {
        item.setAttribute("visible", true);
    }
};
