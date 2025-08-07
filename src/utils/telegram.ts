// Configuration Telegram
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID';

export interface OrderData {
  fullName: string;
  phone: string;
  address: string;
  email?: string;
  note?: string;
  quantity: number;
}

export const sendTelegramNotification = async (orderData: OrderData) => {
  try {
    const message = formatOrderMessage(orderData);
    
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du message Telegram');
    }

    return true;
  } catch (error) {
    console.error('Erreur Telegram:', error);
    return false;
  }
};

const formatOrderMessage = (orderData: OrderData): string => {
  const timestamp = new Date().toLocaleString('fr-FR');
  const totalPrice = orderData.quantity * 25; // Prix unitaire de 25 dinars
  
  return `
🛒 <b>NOUVELLE COMMANDE REÇUE !</b>

📅 <b>Date:</b> ${timestamp}

👤 <b>Client:</b> ${orderData.fullName}
📱 <b>Téléphone:</b> ${orderData.phone}
📍 <b>Adresse:</b> ${orderData.address}

${orderData.email ? `📧 <b>Email:</b> ${orderData.email}\n` : ''}
${orderData.note ? `📝 <b>Note:</b> ${orderData.note}\n` : ''}

💰 <b>Produit:</b> Ventilateur Portable
📦 <b>Quantité:</b> ${orderData.quantity}
💵 <b>Prix unitaire:</b> 25 dinars
🚚 <b>Livraison:</b> Gratuite

🎯 <b>Total:</b> ${totalPrice} dinars

---
<i>Commande automatique via le site web</i>
  `.trim();
};

// Fonction alternative avec plus de détails
export const sendDetailedTelegramNotification = async (orderData: OrderData) => {
  try {
    const totalPrice = orderData.quantity * 25;
    const message = `
🛒 <b>NOUVELLE COMMANDE VENTILATEUR</b>

⏰ <b>Heure:</b> ${new Date().toLocaleString('fr-FR')}
🆔 <b>ID:</b> ${Date.now()}

👤 <b>INFORMATIONS CLIENT</b>
• Nom: ${orderData.fullName}
• Téléphone: ${orderData.phone}
• Adresse: ${orderData.address}
${orderData.email ? `• Email: ${orderData.email}` : ''}

📝 <b>DÉTAILS COMMANDE</b>
• Produit: Ventilateur Portable Mini
• Quantité: ${orderData.quantity}
• Prix unitaire: 25 dinars
• Livraison: Gratuite
• Total: ${totalPrice} dinars

${orderData.note ? `📋 <b>NOTE SPÉCIALE:</b>\n${orderData.note}\n` : ''}

🎯 <b>ACTION REQUISE:</b>
1. Contacter le client
2. Confirmer la commande
3. Organiser la livraison

---
<i>Notification automatique - Site Web</i>
    `.trim();

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      throw new Error('Erreur Telegram');
    }

    return true;
  } catch (error) {
    console.error('Erreur Telegram:', error);
    return false;
  }
}; 