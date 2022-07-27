const { Router } = require("express")
const {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require("../controllers/StoreProduct")
const router = Router({ mergeParams: true })

router.get("/", getAllProducts)
router.post("/", createProduct)
router.get("/:id", getProductById)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router
