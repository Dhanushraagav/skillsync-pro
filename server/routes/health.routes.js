const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "SkillSync Pro API running" });
});

module.exports = router;
