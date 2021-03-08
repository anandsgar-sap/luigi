const appRef = require("@sap/approuter");
const app = appRef();

app.beforeRequestHandler.use("/getUseDetails", __getUserDetails);

// available only for current app
function __getUserDetails(req, res) {
    res.writeHead(200).end(JSON.stringify({ "id": req.user.id, "name": req.user.name }));
}

app.start();