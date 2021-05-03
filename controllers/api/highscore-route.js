const router = require('express').Router();
const { Highscore, User } = require('../../models');

// GET /api/highscores
router.get('/', async (req, res) => {
  try {
    const allHighscore = await Highscore.findAll({
        include: [{
          model: User,
          attributes: ['username'] 
        }]
      });
    res.status(200).json(allHighscore);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// GET /api/highscores/id
router.get('/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const highscoreById = await Highscore.findOne({
      where: { id },
      include: [{
        model: User,
        attributes: ['username'] 
      }]
    });
    if (!highscoreById) {
      return res.status(404).json({ message: 'No Highscore found with this id' });
    }
    res.status(200).json(highscoreById);
  }
  catch (e) {
    res.status(400).json({ Error: e });
  }
});

// POST /api/highscores
router.post('/', async (req, res) => {
    try {
      const { user_id, score } = req.body;
      const newhighscore = await Highscore.create({ user_id, score });
      res.status(200).json(newhighscore);
    }
    catch (e) {
      res.status(400).json({ Error: e });
    }
  });

// DELETE /api/highscores/id
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const highscoreById = await Highscore.findOne({
        where: { id }
      });
      if (!highscoreById) {
        return res.status(404).json({ message: 'No highscore found with this id' });
      }
      await Highscore.destroy({ where: { id } });
      res.status(200).json({ Deleted: highscoreById });
  
    } catch (e) {
      res.status(400).json(e);
    }
  });

module.exports = router;