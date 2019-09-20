const app=require("./app.js");
// const upload = require('./bin/csv_reader').upload;
const PORT = app.get("port");
const environment = app.get("env");

app.listen(PORT,() => {
    console.log(`app listening on port ${PORT}!`)
    console.log(`app is running in ${environment}`);
    // upload()
});