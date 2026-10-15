export const contactTopics = ['information', 'quote', 'demo', 'other'] as const;

export const contactFormMessages = {
  es: {
    topics: ['Información', 'Presupuesto', 'Demo', 'Otro'],
    sending: 'Enviando…',
    success: 'Tu mensaje se ha enviado correctamente.',
    error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo.',
    invalid: 'Revisa los campos obligatorios y el formato del email.',
    limited: 'Has enviado varias solicitudes. Espera un minuto antes de intentarlo de nuevo.',
    back: 'Volver al formulario'
  },
  en: {
    topics: ['Information', 'Quote', 'Demo', 'Other'],
    sending: 'Sending…',
    success: 'Your message has been sent successfully.',
    error: 'Your message could not be sent. Please try again.',
    invalid: 'Check the required fields and email format.',
    limited: 'You have sent several requests. Wait a minute before trying again.',
    back: 'Back to the form'
  },
  fr: {
    topics: ['Informations', 'Devis', 'Démo', 'Autre'],
    sending: 'Envoi en cours…',
    success: 'Votre message a bien été envoyé.',
    error: 'Votre message n’a pas pu être envoyé. Veuillez réessayer.',
    invalid: 'Vérifiez les champs obligatoires et le format de l’adresse e-mail.',
    limited: 'Vous avez envoyé plusieurs demandes. Patientez une minute avant de réessayer.',
    back: 'Retour au formulaire'
  },
  de: {
    topics: ['Informationen', 'Angebot', 'Demo', 'Sonstiges'],
    sending: 'Wird gesendet…',
    success: 'Ihre Nachricht wurde erfolgreich gesendet.',
    error: 'Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    invalid: 'Prüfen Sie die Pflichtfelder und das E-Mail-Format.',
    limited: 'Sie haben mehrere Anfragen gesendet. Warten Sie eine Minute und versuchen Sie es erneut.',
    back: 'Zurück zum Formular'
  }
} as const;
