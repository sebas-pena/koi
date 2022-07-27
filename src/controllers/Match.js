const { Router } = require("express")
const Match = require("../models/Match")
const router = Router({ mergeParams: true })

const getAllMatches = async (req, res) => {
	const matches = await Match.find()
	res.json(matches)
}
const getMatchById = async (req, res) => {
	const match = await Match.findById(req.params.id)
	res.json(match)
}
const createMatch = async (req, res) => {
	const match = await Match.create(req.body)
	res.json(match)
}
const updateMatch = async (req, res) => {
	const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
	res.json(match)
}
const deleteMatch = async (req, res) => {
	const match = await Match.findByIdAndDelete(req.params.id)
	res.json(match)
}

module.exports = {
	getAllMatches,
	getMatchById,
	createMatch,
	updateMatch,
	deleteMatch,
}
