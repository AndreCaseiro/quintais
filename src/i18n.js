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
                    "Empreendimento": "Empreendimento",
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

                }
            },
            es:{
                translations:{
                    "Quintais": "Quintais do Caneiro",
                    "Empreendimento": "Aventurarse",
                    "Galeria": "Galeria",
                    "Alojamento": "alojamiento",
                    "Localizacao": "Ubicación",
                    "Comodidades": "Servicios",
                    "Aloja": "Ver alojamiento",
                    "Natureza": "La naturaleza",
                    "AtividadesExterior": "Actividades al aire libre",
                    "Caminho": "El camino",
                    "Reservas": "Reservaciones",
                    "Contactos": "Contactos",
                    "t1": "Cerca de Quintais do Caneiro",
                    "t2": "Conoce los lugares cercanos a la Quintais do Caneiro",
                    "t3": "Últimas noticias",

                }
            },
            gb:{
                translations:{
                    "Quintais": "Quintais do Caneiro",
                    "Empreendimento": "Venture",
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