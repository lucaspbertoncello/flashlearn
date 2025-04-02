const { Router } = require("express");

const DeckController = require("./app/controllers/DeckController");
const CardController = require("./app/controllers/CardController");

const router = Router();

router.get("/decks", DeckController.index);
router.get("/decks/:id", DeckController.show);
router.post("/decks", DeckController.store);
router.put("/decks/:id", DeckController.update);
router.delete("/decks/:id", DeckController.delete);

router.get("/flashcards", CardController.index);
router.get("/flashcards/:id", CardController.show);
router.post("/flashcards", CardController.store);
router.put("/flashcards", CardController.update);
router.delete("/flashcards", CardController.delete);

module.exports = router;
