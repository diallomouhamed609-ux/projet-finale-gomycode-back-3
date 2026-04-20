import express from 'express';
import Property from '../models/Property.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const properties = await Property.find().populate('createdBy', 'name email');
  res.json(properties);
});

router.post('/', protect, authorize('admin'), async (req, res) => {
  const { title, description, price, type, address, image } = req.body;
  if (!title || !description || !price || !type || !address) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs requis' });
  }

  const property = await Property.create({
    title,
    description,
    price,
    type,
    address,
    image,
    createdBy: req.user._id,
  });

  res.status(201).json({ message: 'Propriété créée', property });
});

router.get('/:id', async (req, res) => {
  const property = await Property.findById(req.params.id).populate('createdBy', 'name email');
  if (!property) {
    return res.status(404).json({ message: 'Propriété non trouvée' });
  }
  res.json(property);
});

export default router;
