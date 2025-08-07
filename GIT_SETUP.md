# 🔒 Configuration Git et Sécurité

## ✅ Fichiers créés et configurés

### **1. .gitignore**
Fichier créé pour ignorer les fichiers sensibles et temporaires :

```bash
# Variables d'environnement sensibles
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Dépendances et builds
node_modules/
dist/
build/

# Fichiers système
.DS_Store
.idea/
.vscode/

# Logs et cache
*.log
.cache/
.eslintcache
```

### **2. .env.example**
Fichier d'exemple pour les variables d'environnement :

```env
# Telegram Bot Configuration
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here

# Site URL for production
VITE_SITE_URL=https://your-domain.com
```

## 🔐 Fichiers sensibles protégés

### **Variables d'environnement (.env)**
- ✅ **VITE_TELEGRAM_BOT_TOKEN** : Token de votre bot Telegram
- ✅ **VITE_TELEGRAM_CHAT_ID** : ID de votre chat Telegram
- ✅ **VITE_SITE_URL** : URL de production de votre site

### **Pourquoi ces fichiers sont sensibles :**
- 🔑 **Tokens Telegram** : Permettent d'envoyer des messages
- 🌐 **URLs de production** : Informations sur votre infrastructure
- 💰 **Données business** : Informations commerciales sensibles

## 🚀 Configuration pour le déploiement

### **1. Variables d'environnement sur Vercel**
1. Allez sur votre dashboard Vercel
2. Sélectionnez votre projet
3. Onglet **Settings** → **Environment Variables**
4. Ajoutez vos variables :
   ```
   VITE_TELEGRAM_BOT_TOKEN=votre_vrai_token
   VITE_TELEGRAM_CHAT_ID=votre_vrai_chat_id
   VITE_SITE_URL=https://votre-domaine.vercel.app
   ```

### **2. Variables d'environnement locales**
Créez un fichier `.env` local (ne sera pas commité) :
```env
VITE_TELEGRAM_BOT_TOKEN=7883683089:AAFGAr6faCBIess4DNgpj4OS4owi9qy7Lxg
VITE_TELEGRAM_CHAT_ID=6541261984
VITE_SITE_URL=https://ventilateur.vercel.app/
```

## 📋 Checklist de sécurité

### **✅ Fichiers ignorés par Git :**
- [x] `.env` (variables sensibles)
- [x] `node_modules/` (dépendances)
- [x] `dist/` (build de production)
- [x] `.DS_Store` (fichiers système)
- [x] `*.log` (fichiers de logs)
- [x] `.cache/` (fichiers de cache)

### **✅ Fichiers inclus dans Git :**
- [x] `.env.example` (exemple sans valeurs sensibles)
- [x] `package.json` (dépendances)
- [x] `src/` (code source)
- [x] `public/` (assets publics)
- [x] `README.md` (documentation)

## 🔍 Vérification

### **Tester que .env est bien ignoré :**
```bash
git status
```
Le fichier `.env` ne doit **PAS** apparaître dans la liste.

### **Vérifier les fichiers trackés :**
```bash
git add .
git status
```
Seuls les fichiers non-sensibles doivent être listés.

## 🛡️ Bonnes pratiques

### **1. Ne jamais commiter :**
- ❌ Fichiers `.env` avec de vraies valeurs
- ❌ Tokens d'API
- ❌ Clés privées
- ❌ Mots de passe
- ❌ URLs de production sensibles

### **2. Toujours inclure :**
- ✅ `.env.example` avec la structure
- ✅ Documentation des variables
- ✅ Instructions de configuration

### **3. Pour l'équipe :**
- 📝 Documenter toutes les variables nécessaires
- 🔄 Maintenir `.env.example` à jour
- 🚨 Alerter en cas de fuite de données

## 📞 En cas de problème

### **Si vous avez commité des données sensibles :**
1. **Ne paniquez pas !**
2. Changez immédiatement vos tokens
3. Utilisez `git filter-branch` pour nettoyer l'historique
4. Forcez le push : `git push --force`

### **Pour révoquer un token Telegram :**
1. Allez sur @BotFather
2. `/mybots`
3. Sélectionnez votre bot
4. `/revoke`

---

*Configuration terminée le : Décembre 2024*
*Version : 1.0* 