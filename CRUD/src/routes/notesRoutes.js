const express = require("express");
const router = express.Router();

const {getallnotes,
  createNotes,getOneNotes,
  updateNotes,
  deletNotes} = require("../controllers/notesControllers")

router.get("/", getallnotes);
router.get("/:id", getOneNotes );

router.post("/", createNotes);

router.put("/:id",  updateNotes);

router.delete("/:id",deletNotes);

module.exports = router;