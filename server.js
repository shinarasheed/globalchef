const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

connectDB();

console.log(process.env.NODE_ENV);

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server stated on port  ${port}`);
});
