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
                    "Galeria": "galeria",
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
                    "dataentrada": "Date d'entrée",
                    "datasaida": "Date de départ",
                    "adultos": "Les adultes",
                    "crianças": "Les enfants",
                    "email": "Email",
                    "mais": "Plus",
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