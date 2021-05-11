const router = require('express').Router();
const { Team, Pokemon } = require('../../models');
const sessionAuth = require('../../utils/auth');

// GET /team
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
                const team = teamData.get({ plain: true });
                const disable = team.pokemons.length >= 6;
                console.log(team, disable);
                res.render('team', { team, loggedIn: true, disable: disable});
            } else {
                console.log('no team');
                res.render('team', { team: false, loggedIn: true});
            }
        })
        .catch(e => {
            console.log(e)
            res.status(400).json({ Error: e });
        });
});

// POST team
router.post('/', sessionAuth, (req, res) => {
    Team.create({
        team_name: req.body.team_name,
        team_logo: req.body.team_logo,
        user_id: req.session.user_id,
    })
        .then(teamData => {
            req.session.save(() => {
                req.session.team_id = teamData.id;
                req.session.team_name = teamData.team_name;
                const team = teamData.get({ plain: true });
                res.render('team', { team, loggedIn: true });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE team
router.delete('/:id', sessionAuth, (req, res) => {
    Team.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(teamData => {
            if (teamData) {
                const team = teamData.get({ plain: true });
                res.render('team', { team, loggedIn: true });
            } else {
                res.render('team', { team: false, loggedIn: true });
            }
        })
        .catch(e => {
            console.log(e)
            res.status(400).json({ Error: e });
        });
});


module.exports = router;