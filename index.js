const Koa = require("koa");
const Router = require("koa-router");
const _mainController = require('./controller/mainController');


const PORT = process.env.PORT || 3002
const app = new Koa();
const router = new Router();

router.get('/resources', _mainController.getResources);
router.get('/actions', _mainController.getActions);

app.use(router.routes());

app.listen(PORT, function () {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});




