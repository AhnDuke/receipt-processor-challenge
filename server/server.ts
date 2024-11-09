import express, {Request, Response, NextFunction} from 'express';
import router from './routes/ReceiptRoutes.js';
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const IP = process.env.localIp ? process.env.localIp : '';

// Parse JSON Bodies
app.use(express.json()); 

// Route Receipts
app.use('/receipts', router)

// Global Error Handler
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  // Log the error (useful for debugging)
  console.error('Error:', err.message);

  // Send a JSON response with error details
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
});


app.listen(PORT, IP, () => {
  console.log(`Server listening on port ${IP}:${PORT}`);
});
