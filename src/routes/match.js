const { Router } = require("express")
const {
	getAllMatches,
	getMatchById,
	createMatch,
	updateMatch,
	deleteMatch,
} = require("../controllers/Match")
const router = Router({ mergeParams: true })

router.get("/", getAllMatches)
router.post("/", createMatch)
router.get("/:id", getMatchById)
router.put("/:id", updateMatch)
router.delete("/:id", deleteMatch)

module.exports = router
