const express = require("express")
const router = express.Router()

const { postdata,getalldata,login ,logout} = require("../controllers/userControllers")

router.post("/register", postdata)
router.get("/feed",getalldata)
router.post ("/login",login)
router.get("/logout",logout) 

module.exports = router;