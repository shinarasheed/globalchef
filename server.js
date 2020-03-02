const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

connectDB();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }



const port = process.env.PORT; 

app.listen(port, ()=>{
    console.log(`Server stated on port  ${port}`);
});
