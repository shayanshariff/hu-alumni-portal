import express from 'express';
import { createChat, getChatsByUser, getChatById, addMessageToChat } from '../controllers/chat.js';
import auth from '../middleware/auth.js';
import { io } from '../index.js';

const router = express.Router();

// Create a new chat (requires authentication)
router.post('/', auth, createChat);

// Get all chats for a user (requires authentication)
router.get('/:userId', auth, getChatsByUser);

// Get a specific chat by its ID (requires authentication)
router.get('/chat/:chatId', auth, getChatById);

// Add a message to a chat (requires authentication)
router.post('/chat/:chatId', auth, addMessageToChat);

// Socket.IO event listener for joining a chat room
io.on('connection', (socket) => {
  socket.on('join_room', (data) => {
    const { chatId } = data;
    socket.join(chatId);
  });
});

export default router;
