# Utiliser une image officielle Node.js
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet dans le conteneur
COPY . .

# Exposer le port 3000 (port par défaut pour React)
EXPOSE 3000

# Démarrer l'application React
CMD ["npm", "start"]
