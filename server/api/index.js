const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/carts", require("./carts"));
router.use("/products", require("./products"));
router.use("/orders", require("./orders"));
router.use("/wishlists", require("./wishlists"));
router.use("/stripe", require("./stripe"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
