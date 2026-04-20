# Backend MERN KayeDeuk

## Installation

```bash
cd backend
npm install
```

## Démarrage

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:5000`.

## Routes principales

- `POST /api/auth/register` - inscription (`name`, `email`, `password`, `role`)
- `POST /api/auth/login` - connexion (`email`, `password`)
- `GET /api/auth/me` - profil de l'utilisateur connecté
- `GET /api/users` - liste des utilisateurs (admin uniquement)
- `PATCH /api/users/:id/role` - mise à jour du rôle (admin uniquement)
- `GET /api/properties` - liste des propriétés
- `POST /api/properties` - création de propriété (admin uniquement)
- `GET /api/properties/:id` - détail d'une propriété

## Variables d'environnement

Copiez `.env` et ajustez si nécessaire :

- `MONGO_URI`
- `JWT_SECRET`
- `PORT`
