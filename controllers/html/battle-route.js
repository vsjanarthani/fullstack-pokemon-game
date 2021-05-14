const router = require('express').Router();
const { Team, Pokemon } = require('../../models');
const sessionAuth = require('../../utils/auth');
// const fetch = require('node-fetch');
// const dev = (process.env.NODE_ENV != 'production');
// const server = dev ? 'http://localhost:5000' : process.env.SERVER_PROD;

// GET /team of the user
router.get('/', sessionAuth, async (req, res) => {
    if (req.query.id) {
        
        try {
            let userTeam = await Team.findOne({
                where: { user_id: req.session.user_id },
                include: [
                    {
                        model: Pokemon,
                        attributes: ['pokedex', 'pokemon_name', 'pokemon_pic', 'hp', 'attack', 'defense', 'speed'],
                    }]
            });

            let opponentTeam = await Team.findOne({
                where: { id: req.query.id },
                include: [
                    {
                        model: Pokemon,
                        attributes: ['pokedex', 'pokemon_name', 'pokemon_pic', 'hp', 'attack', 'defense', 'speed'],
                    }]
            });

            userTeam = userTeam.get({ plain: true });
            opponentTeam = opponentTeam.get({ plain: true });
            // res.status(200).json(team);
            res.render('battle-page', { userTeam, opponentTeam, loggedIn: true });

        } catch (e) {
            console.log(e);
            res.status(400).json({ Error: e });
        };
    }
    else {
        try {
            const teamData = await Team.findOne({
                where: { user_id: req.session.user_id },
                include: [
                    {
                        model: Pokemon,
                        attributes: ['pokedex', 'pokemon_name', 'pokemon_pic', 'hp', 'attack', 'defense', 'speed'],
                    }]
            });

            if (teamData) {
                const userTeam = teamData.get({ plain: true });
                console.log(`Console from server ${userTeam}`);
                res.render('battle-page', { userTeam, loggedIn: true });
            }
            else {
                document.location.replace('/team');
            }

        } catch (e) {
            console.log(e)
            res.status(400).json({ Error: e });
        };

    }

});


module.exports = router;