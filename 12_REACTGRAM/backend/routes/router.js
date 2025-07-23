const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoute"));
router.use("/api/photo", require("./PhotoRoutes"))

router.get("/", (req, res) => {
  res.send("API Working!");
});

module.exports = router;
