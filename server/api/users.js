const router = require('express').Router()
const {models: {User}} = require('../db/models/User')
module.exports = router


// Get users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
});

// Get single user
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {id: req.params.id},
      attributes: {
        exclude: ['password']
      }

    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

//Edit user
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const editedUser = await user.update(req.body);
    res.json(editedUser);
  } catch (err) {
    next(err);
  }
});

// Create user
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await User.create(req.body));
  } catch (err) {
    next(err);
  }
});

//Delete user
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(204).send(user.destroy())
  } catch (err) {
    next(err);
  }
});
