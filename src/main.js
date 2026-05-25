document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupération des valeurs du formulaire
    const eventType = document.getElementById('eventType').value;
    const guests = document.getElementById('guests').value;
    const eventDate = document.getElementById('eventDate').value;
    
    // Formatage de la date (de YYYY-MM-DD à DD/MM/YYYY)
    const dateObj = new Date(eventDate);
    const formattedDate = dateObj.toLocaleDateString('fr-FR');

    // Numéro de téléphone cible (Format international sans le + ou le 00)
    // À REMPLACER : Mets ton numéro WhatsApp professionnel ici
    const phoneNumber = "212668197671"; 

    // Construction du message de Neuromarketing B2B
    const message = `Bonjour Foodji Events, \n\nJe souhaite obtenir un devis rapide. Voici les détails de ma demande :\n\n📌 *Type :* ${eventType}\n👥 *Convives :* ${guests}\n📅 *Date :* ${formattedDate}\n\nPouvons-nous échanger pour finaliser cette commande ?`;

    // Encodage de l'URL pour WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirection
    window.open(whatsappUrl, '_blank');
  });
});
