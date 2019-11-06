import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            pt:{
                translations: {
                    "Quintais": "Quintais do Caneiro",
                    "Empreendimento": "O Empreendimento",
                    "Galeria": "Galeria",
                    "Alojamento": "Alojamento",
                    "Localizacao": "A Localização",
                    "Comodidades": "Comodidades",
                    "Aloja": "Ver Alojamento",
                    "Natureza": "Natureza",
                    "AtividadesExterior": "Atividades exteriores",
                    "Caminho": "O Caminho",
                    "Reservas": "Reservas",
                    "Contactos": "Contactos",
                    "t1": "Aqui perto",
                    "t2": "Conheça os lugares perto dos Quintais do Caneiro",
                    "t3": "Notícias mais recentes",
                    "t4": "Notícias de todo o mundo",
                    "dataentrada": "Data Entrada",
                    "datasaida": "Data Saída",
                    "adultos": "Adultos",
                    "crianças": "Crianças",
                    "email": "Email",
                    "mais": "Mais",
                    "disponibilidade": "Ver disponibilidade",
                    "c1": "Telefone: ",
                    "c2": "Telemóvel: ",
                    "c5": "Morada: ",
                    "Contactus": "CONTACTE-NOS",
                    "placeh1": "asdasd",
                }
            },
            es:{
                translations:{
                    "Quintais": "Quintais do Caneiro",
                    "Empreendimento": "Vivienda",
                    "Galeria": "Galeria",
                    "Alojamento": "Vivienda",
                    "Localizacao": "Lugar",
                    "Comodidades": "Servicios",
                    "Aloja": "Ver alojamiento",
                    "Natureza": "Naturaleza",
                    "AtividadesExterior": "Actividades al aire libre",
                    "Caminho": "El camino",
                    "Reservas": "Reservas",
                    "Contactos": "Contactos",
                    "t1": "Cerca de Quintais do Caneiro",
                    "t2": "Conoce los lugares cercanos a la Quintais do Caneiro",
                    "t3": "Últimas noticias",
                    "t4": "Noticias de todo el mundo",
                    "dataentrada": "Fecha de entrada",
                    "datasaida": "Fecha de salida",
                    "adultos": "Adultos",
                    "crianças": "Niños",
                    "email": "Email",
                    "mais": "más",
                    "disponibilidade": "Ver disponibilidad",
                    "c1": "Número de teléfono: ",
                    "c2": "Teléfono móvil: ",
                    "c5": "Dirección: ",
                    "Contactus": "CONTÁCTE-NOS",
                }
            },
            fr:{
                translations:{
                    "Quintais": "Quintais do Caneiro",
                    "Empreendimento": "Logement",
                    "Galeria": "Galeria",
                    "Alojamento": "Le logement",
                    "Localizacao": "Lieu",
                    "Comodidades": "Servicios",
                    "Aloja": "Ver alojamiento",
                    "Natureza": "La nature",
                    "AtividadesExterior": "Actividades al aire libre",
                    "Caminho": "El camino",
                    "Reservas": "Les Réservations",
                    "Contactos": "Les Contacts",
                    "t1": "Près d'ici",
                    "t2": "Connaître les lieux près du Quintais do Caneiro",
                    "t3": "Dernières nouvelles",
                    "t4": "Nouvelles du monde entier",
                    "dataentrada": "Date d'entrée",
                    "datasaida": "Date de départ",
                    "adultos": "Les adultes",
                    "crianças": "Les enfants",
                    "email": "Email",
                    "mais": "Plus",
                    "disponibilidade": "Voir disponibilité",
                    "c1": "Numéro de téléphone: ",
                    "c2": "Téléphone portable: ",
                    "c5": "Adresse: ",
                    "Contactus": "CONTACTEZ-NOUS",
                }
            },
            gb:{
                translations:{
                    "Quintais": "Quintais do Caneiro",
                    "Empreendimento": "The Venture",
                    "Galeria": "Gallery",
                    "Alojamento": "Accommodation",
                    "Localizacao": "Location",
                    "Comodidades": "Accommodation",
                    "Aloja": "Ver alojamiento",
                    "Natureza": "Nature",
                    "AtividadesExterior": "Outdoor Activities",
                    "Caminho": "The way",
                    "Reservas": "Reservations",
                    "Contactos": "Contacts",
                    "t1": "Near Quintais do Caneiro",
                    "t2": "Know the best places near the Quintais do Caneiro",
                    "t3": "Latest news",
                    "t4": "Travel News from all over the world",
                    "dataentrada": "Entry date",
                    "datasaida": "Exit date",
                    "adultos": "Adults",
                    "crianças": "Children",
                    "email": "Email",
                    "mais": "More",
                    "disponibilidade": "See availability",
                    "c1": "Telephone: ",
                    "c2": "Mobile Phone: ",
                    "c5": "Address: ",
                    "Contactus": "CONTACT-US",
                }
            }
        },
        fallbackLng: "pt",
        debug: true,

        ns: ["translations"],
        defaultNS: "translations",
        
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;