import express from 'express';
import User from '../models/User.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, authorize('admin'), async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
});

router.get('/me', protect, async (req, res) => {
  res.json(req.user);
});

router.patch('/:id/role', protect, authorize('admin'), async (req, res) => {
  const { role } = req.body;
  if (!['admin', 'client'].includes(role)) {
    return res.status(400).json({ message: 'Rôle invalide' });
  }

  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé' });
  }

  user.role = role;
  await user.save();

  res.json({ message: 'Rôle mis à jour', user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});

export default router;
