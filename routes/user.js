var express = require('express');
var router = express.Router();
const app = express();
/* GET users listing. */
app.get('/', (req, res) => {
	res.status(200).sendFile(__dirname +  '/views/user.pug');
});
module.exports = router;
