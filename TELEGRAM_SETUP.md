# Configuration Telegram pour les Notifications de Commandes

## 🚀 Étapes de Configuration

### 1. Créer un Bot Telegram
1. Ouvrez Telegram et cherchez `@BotFather`
2. Envoyez `/newbot`
3. Suivez les instructions pour créer votre bot
4. Récupérez le `BOT_TOKEN` fourni

### 2. Obtenir votre Chat ID
1. Parlez à votre bot (envoyez un message)
2. Visitez cette URL dans votre navigateur :
   ```
   https://api.telegram.org/bot<BOT_TOKEN>/getUpdates
   ```
3. Remplacez `<BOT_TOKEN>` par votre token
4. Cherchez votre `chat_id` dans la réponse JSON

### 3. Configurer les Variables d'Environnement
Créez un fichier `.env` à la racine du projet :

```env
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

**Important :** Pour Vite, les variables d'environnement doivent commencer par `VITE_`

### 4. Tester la Configuration
1. Redémarrez votre serveur de développement
2. Soumettez une commande via le formulaire
3. Vérifiez que vous recevez le message sur Telegram

## 📱 Format du Message Telegram

Le message inclura :
- 📅 Date et heure de la commande
- 👤 Informations du client (nom, téléphone, adresse)
- 📧 Email (si fourni)
- 📝 Note spéciale (si fournie)
- 💰 Détails de la commande (produit, prix, livraison)

## 🔧 Fonctionnalités

- ✅ Notification instantanée sur Telegram
- ✅ Formatage HTML avec emojis
- ✅ Gestion d'erreurs avec fallback
- ✅ Toast notifications pour l'utilisateur
- ✅ État de chargement pendant l'envoi

## 🛠️ Dépannage

### Problème : Message non reçu
1. Vérifiez que le bot token est correct
2. Vérifiez que le chat ID est correct
3. Assurez-vous d'avoir parlé au bot au moins une fois

### Problème : Erreur CORS
- Les appels à l'API Telegram sont autorisés depuis le navigateur
- Si problème, utilisez un proxy ou backend

### Problème : Variables d'environnement
- Redémarrez le serveur après modification du .env
- Vérifiez que les variables commencent par `VITE_` (pas REACT_APP_)
- Assurez-vous que le fichier .env est à la racine du projet

### Problème : Erreur "process is not defined"
- Cette erreur est maintenant corrigée
- Assurez-vous d'utiliser `VITE_` au lieu de `REACT_APP_` 