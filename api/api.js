const router = require('express').Router();

router.get('/test', (req, res) => {
  res.json({ test: 'data' });
});

module.exports = router;
