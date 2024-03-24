const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/test');

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://himatrooshe01:mynamewasoshe01@cluster0.83lzwcp.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/api', routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
