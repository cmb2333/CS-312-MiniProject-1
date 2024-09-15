const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Parse URL encoded bodies
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));  

app.use(blogRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
