// Ajoutez ici un établissement : un seul endroit suffit pour alimenter la future carte et les partenaires.
export const establishments = [
  // Exemple à compléter quand les premières adresses seront disponibles :
  // {
  //   name: 'Nom de l’établissement', // Nom affiché
  //   address: 'Adresse complète', // Adresse utilisée pour l’itinéraire
  //   openingHours: { // Laisser une journée vide si l’horaire est inconnu
  //     lundi: '', mardi: '', mercredi: '', jeudi: '', vendredi: '', samedi: '', dimanche: ''
  //   },
  //   logo: '', // Chemin du logo dans /partners/
  //   active: true, // false pour masquer temporairement l’établissement
  //   showOnMap: true, // true pour l’afficher sur la future carte
  //   showAsPartner: true // true pour l’afficher parmi les partenaires
  // }
];

export const visiblePartners = establishments.filter(
  (establishment) => establishment.active && establishment.showAsPartner
);

export const visibleMapLocations = establishments.filter(
  (establishment) => establishment.active && establishment.showOnMap
);
