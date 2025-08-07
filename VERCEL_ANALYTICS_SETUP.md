# 📊 Vercel Analytics - Configuration et Utilisation

## ✅ Installation terminée

Le package `@vercel/analytics` a été installé et configuré dans votre application.

## 🔧 Configuration effectuée

### 1. **Installation du package**
```bash
npm install @vercel/analytics
```

### 2. **Intégration dans l'application**
Le composant `Analytics` a été ajouté dans `src/App.tsx` :

```tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
          <Analytics /> {/* ← Composant ajouté ici */}
        </div>
      </Router>
    </HelmetProvider>
  );
}
```

## 🚀 Déploiement sur Vercel

### 1. **Activer Web Analytics dans Vercel**
1. Allez sur votre dashboard Vercel
2. Sélectionnez votre projet
3. Cliquez sur l'onglet **Analytics**
4. Cliquez sur **Enable** dans la boîte de dialogue

### 2. **Déployer votre application**
```bash
vercel deploy
```

Ou connectez votre repository Git pour des déploiements automatiques.

## 📈 Fonctionnalités disponibles

### **Métriques automatiques :**
- ✅ **Visiteurs** : Nombre de visiteurs uniques
- ✅ **Pages vues** : Nombre total de pages consultées
- ✅ **Sessions** : Sessions utilisateur
- ✅ **Temps sur site** : Durée moyenne des sessions
- ✅ **Taux de rebond** : Pourcentage de visiteurs qui quittent après une page
- ✅ **Sources de trafic** : D'où viennent vos visiteurs
- ✅ **Pays** : Géolocalisation des visiteurs
- ✅ **Appareils** : Desktop, mobile, tablette

### **Filtres disponibles :**
- 📅 **Période** : Aujourd'hui, 7 jours, 30 jours, 90 jours
- 🌍 **Pays** : Filtrer par pays
- 📱 **Appareil** : Desktop, mobile, tablette
- 🔗 **Source** : Direct, Google, Facebook, etc.

## 🎯 Événements personnalisés (Pro/Enterprise)

Pour les plans Pro et Enterprise, vous pouvez ajouter des événements personnalisés :

```tsx
import { track } from '@vercel/analytics';

// Exemple : Tracker un clic sur le bouton de commande
const handleOrderClick = () => {
  track('order_button_clicked', {
    product: 'ventilateur_portable',
    price: 25,
    currency: 'TND'
  });
};

// Exemple : Tracker une soumission de formulaire
const handleFormSubmit = (data) => {
  track('order_form_submitted', {
    product: 'ventilateur_portable',
    quantity: data.quantity,
    total_price: data.totalPrice
  });
};
```

## 📊 Accès aux données

### **Dashboard Vercel :**
1. Connectez-vous à [vercel.com](https://vercel.com)
2. Sélectionnez votre projet
3. Cliquez sur l'onglet **Analytics**
4. Explorez vos données après quelques jours de trafic

### **URLs de tracking :**
- `/_vercel/insights/view` : Requête de tracking des pages vues
- `/_vercel/insights/event` : Requête de tracking des événements

## 🔍 Vérification du fonctionnement

### **Test en développement :**
1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet **Network**
3. Visitez votre site
4. Vous devriez voir une requête vers `/_vercel/insights/view`

### **Test en production :**
1. Déployez votre application
2. Visitez votre site
3. Vérifiez dans le dashboard Vercel après quelques minutes

## 📱 Avantages pour votre business

### **Pour les ventes :**
- 📈 **Suivre les conversions** : Voir combien de visiteurs deviennent clients
- 🎯 **Optimiser les pages** : Identifier les pages qui convertissent le mieux
- 📊 **Analyser le trafic** : Comprendre d'où viennent vos clients
- ⏰ **Timing optimal** : Voir quand vos visiteurs sont les plus actifs

### **Pour le marketing :**
- 🌍 **Géolocalisation** : Cibler vos campagnes par région
- 📱 **Appareils** : Optimiser pour mobile/desktop
- 🔗 **Sources** : Investir dans les canaux qui marchent
- 📅 **Saisonnalité** : Voir les tendances par saison

## 🛡️ Confidentialité

Vercel Analytics respecte :
- ✅ **GDPR** : Conformité européenne
- ✅ **CCPA** : Conformité californienne
- ✅ **Cookieless** : Pas de cookies tiers
- ✅ **Anonymisation** : Données anonymisées par défaut

## 📞 Support

- 📚 [Documentation officielle](https://vercel.com/docs/analytics)
- 🐛 [Troubleshooting](https://vercel.com/docs/analytics/troubleshooting)
- 💬 [Support Vercel](https://vercel.com/support)

---

*Configuration terminée le : Décembre 2024*
*Version : 1.0* 