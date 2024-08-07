import asyncHandler from 'express-async-handler';
import { Team } from '../models/team.js';
import { transformId } from '../utils/transformId.js';

export const getTeams = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;
    const search = req.query.search ? { name: { $regex: req.query.search, $options: 'i' } } : {};  // Case-insensitive search

    const totalTeams = await Team.countDocuments(search);
    const totalPages = Math.ceil(totalTeams / limit);
    const teams = await Team.find(search).skip(skip).limit(limit);

    res.status(200).json({
        teams: transformId(teams),
        totalPages,
        currentPage: page
    });
});

export const addTeam = asyncHandler(async (req, res) => {
    const { name } = req.body;
    const team = await Team.create({ name });

    res.status(201).json({ team: transformId(team) });
});

export const deleteTeam = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const team = await Team.findById(id);

    if (!team) {
        return res.status(404).json({ message: 'Team not found' });
    }
    if (team.members.length > 0) {
        return res.status(400).json({ message: 'Team cannot be deleted because it has members' });
    }
    await Team.findByIdAndDelete(id);

    res.status(200).json({ message: 'Team deleted successfully' });
});
