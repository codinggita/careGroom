const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const errorHandler = require('./middleware/error');

// Route files
const auth = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging
app.use(express.json()); // Parse JSON bodies
app.use(mongoSanitize()); // Data sanitization against NoSQL injection
app.use(hpp()); // Prevent HTTP Parameter Pollution

// Mount routers
app.use('/api/auth', auth);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to CareGroom API' });
});

// Use global error handler
app.use(errorHandler);

module.exports = app;
