
const games = document.querySelectorAll(".game");
const shelves = document.querySelectorAll(".shelf");

// Make games draggable
games.forEach(function(game) {

  //To pick up the pngs in the  html file and move them around
    game.draggable = true;

    game.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", game.id);
    });

});

// Allow games to be placed on shelves
shelves.forEach(function(shelf) {

// Allows games to be dragged over the shelves and dropped onto them.
    shelf.addEventListener("dragover", function(event) {
        event.preventDefault();
    });

    shelf.addEventListener("drop", function(event) {
        event.preventDefault();

//changes the game from a cover image to a spin image, taking the ID and switching it
        const gameId = event.dataTransfer.getData("text/plain");
        const game = document.getElementById(gameId);
        //checks if the game even exists
        if (!game) return;

        game.src = game.dataset.spine;
        shelf.appendChild(game); //drops game onto the shelf
    });

});
