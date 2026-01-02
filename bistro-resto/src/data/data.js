export const translations = {
  en: {
    nav: { home: 'Home', menu: 'Menu', gallery: 'Gallery', reservations: 'Reservations', contact: 'Contact' },
    hero: { title: 'Bistro Moderne', subtitle: 'Experience Fine Dining with a Contemporary Twist', cta: 'Book a Table' },
    about: { title: 'Our Story', text: 'For over 15 years, Bistro Moderne has been crafting exceptional dining experiences that blend traditional French cuisine with modern innovation. Our passionate chefs use only the finest seasonal ingredients.' },
    menuSection: { title: 'Our Menu', starters: 'Starters', mains: 'Main Courses', desserts: 'Desserts' },
    reservationSection: { title: 'Make a Reservation', name: 'Full Name', email: 'Email', phone: 'Phone', date: 'Date', time: 'Time', guests: 'Number of Guests', submit: 'Reserve Table', success: 'Thank you! Your reservation has been received. We will confirm shortly.' },
    contact: { title: 'Visit Us', hours: 'Opening Hours', hoursDetail: 'Tue-Sun: 12:00 - 23:00 | Closed Mondays' }
  },
  fr: {
    nav: { home: 'Accueil', menu: 'Menu', gallery: 'Galerie', reservations: 'Réservations', contact: 'Contact' },
    hero: { title: 'Bistro Moderne', subtitle: 'Une Expérience Gastronomique Contemporaine', cta: 'Réserver une Table' },
    about: { title: 'Notre Histoire', text: 'Depuis plus de 15 ans, Bistro Moderne crée des expériences culinaires exceptionnelles qui mêlent cuisine française traditionnelle et innovation moderne. Nos chefs passionnés utilisent uniquement les meilleurs ingrédients de saison.' },
    menuSection: { title: 'Notre Menu', starters: 'Entrées', mains: 'Plats Principaux', desserts: 'Desserts' },
    reservationSection: { title: 'Faire une Réservation', name: 'Nom Complet', email: 'Email', phone: 'Téléphone', date: 'Date', time: 'Heure', guests: 'Nombre de Personnes', submit: 'Réserver', success: 'Merci! Votre réservation a été reçue. Nous confirmerons bientôt.' },
    contact: { title: 'Nous Rendre Visite', hours: 'Horaires d\'Ouverture', hoursDetail: 'Mar-Dim: 12:00 - 23:00 | Fermé le Lundi' }
  }
};

export const menuItems = {
  starters: [
    { name: 'Foie Gras Terrine', name_fr: 'Terrine de Foie Gras', price: '€18' },
    { name: 'French Onion Soup', name_fr: 'Soupe à l\'Oignon', price: '€12' },
    { name: 'Escargots de Bourgogne', name_fr: 'Escargots de Bourgogne', price: '€16' }
  ],
  mains: [
    { name: 'Coq au Vin', name_fr: 'Coq au Vin', price: '€28' },
    { name: 'Beef Bourguignon', name_fr: 'Bœuf Bourguignon', price: '€32' },
    { name: 'Pan-Seared Sea Bass', name_fr: 'Bar Poêlé', price: '€34' },
    { name: 'Duck Confit', name_fr: 'Confit de Canard', price: '€30' }
  ],
  desserts: [
    { name: 'Crème Brûlée', name_fr: 'Crème Brûlée', price: '€10' },
    { name: 'Tarte Tatin', name_fr: 'Tarte Tatin', price: '€11' },
    { name: 'Chocolate Soufflé', name_fr: 'Soufflé au Chocolat', price: '€12' }
  ]
};

export const galleryImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
  'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800',
  'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800',
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800'
];
