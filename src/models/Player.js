const { Schema, model } = require("mongoose")

const playerSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		nickname: {
			type: String,
			required: true,
		},
		nationality: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamp: true,
	}
)
module.exports = model("Match", matchSchema)
