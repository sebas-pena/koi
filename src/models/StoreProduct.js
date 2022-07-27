const { Schema, model } = require("mongoose")

const storeProductSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamp: true,
	}
)

module.exports = model("StoreProduct", storeProductSchema)
