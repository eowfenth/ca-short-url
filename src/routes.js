const Router = require("koa-router");
const shorter = require("./controllers/short").shorter;
const redirect = require("./controllers/short").redirect;

const router = new Router();

router.post("/encurta", shorter);
router.get("/encurta/:id", redirect);

module.exports = router;
