const router = require('express').Router();
const { Team, Pokemon } = require('../../models');
const sessionAuth = require('../../utils/auth');



// GET /team of the user
router.get('/', sessionAuth, (req, res) => {
    console.log(req.session.user_id);
    Team.findOne({
        where: { user_id: req.session.user_id },
        include: [
            {
                model: Pokemon,
                attributes: ['pokedex', 'pokemon_name', 'pokemon_pic', 'hp', 'attack', 'defense', 'speed'],
            }]
    })
        .then(teamData => {
            if (teamData) {
                const userTeam = teamData.get({ plain: true });
                console.log(userTeam);
                res.render('battle-page', { userTeam, loggedIn: true, });
            } else {
               document.location.replace('/team');
            }
        })
        .catch(e => {
            console.log(e)
            res.status(400).json({ Error: e });
        });
});


module.exports = router;