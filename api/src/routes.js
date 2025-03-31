const { Router } = require("express");

const DeckController = require("./app/controllers/DeckController");

const router = Router();

router.get("/decks", DeckController.index);
router.get("/decks/:id", DeckController.show);
router.post("/decks", DeckController.store);
router.put("/decks/:id", DeckController.update);
router.delete("/decks/:id", DeckController.delete);

module.exports = router;
