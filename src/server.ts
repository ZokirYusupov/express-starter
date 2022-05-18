import express from 'express';
import cors from 'cors'

const app = express();

// core middlewears for post req body
app.use( cors() ) 
app.use( express.json() );
app.use( express.urlencoded( {extended: true} ) )

// static files
app.use(express.static('public'))

// middlewears


// routes build


// server is building
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
})