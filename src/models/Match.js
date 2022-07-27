const { Schema, model } = require("mongoose")

const squadSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	nickname: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	champion: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: null,
	},
	kda: {
		type: string,
		default: null,
	},
})
const matchSchema = new Schema(
	{
		matchId: {
			type: String,
			required: true,
			unique: true,
		},
		matchDate: {
			type: Date,
			required: true,
		},
		result: {
			local: {
				type: number,
				required: true,
			},
			visitor: {
				type: number,
				required: true,
			},
		},
		local: {
			name: {
				type: String,
				required: true,
			},
			logo: {
				type: String,
				required: true,
			},
		},
		visitor: {
			name: {
				type: String,
				required: true,
			},
			logo: {
				type: String,
				required: true,
			},
		},
		squads: {
			local: {
				type: squadSchema,
				required: true,
			},
			visitor: {
				type: squadSchema,
				required: true,
			},
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
)
module.exports = model("Match", matchSchema)
