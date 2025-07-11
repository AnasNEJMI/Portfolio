export function mapRounded(value : number, min1 : number, max1 : number, min2 : number, max2 : number) {
    return Math.round(min2 + (max2 - min2) * ((value - min1) / (max1 - min1)));
}

export function map(value : number, min1 : number, max1 : number, min2 : number, max2 : number) {
    return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
}

export const PathNames : Record<string, string> = {
    "/": "Bienvenue !",
    "/about": "Mon Parcours",
    "/projects": "Mes Projets",
    "/contact": "Me Contacter",
    "/projects/feetme" : "FettMe",
    "/projects/tandem" : "Tandem",
}

interface ProjectsDataType{
    href : string,
    title : string, 
    description : string,
    category : string,
    duration : string,
    startDate : string,
    stack : string[], 
    tech : {[k : string] : string}[], 
    features : {[k : string] : string[]}[]
}

export const ProjectsData : Record<string, ProjectsDataType> = {
    "feetme": {
        href : 'feetme',
        title : 'FeetMe',
        description : "title",
        category : 'Application Mobile',
        duration:"6 Mois",
        startDate : "11/09/2015",
        stack : ['Android', 'Java', 'SQlite', 'WebGL', 'Multi-Threading', 'OKHttp', 'XML'],
        tech : [{"h" : "h"}],
        features : [{"h" : ["h"]}]
    },
    "tandem": {
        href : 'tandem',
        title : 'Tandem',
        description : "Projet personnel réalisé sur 4 mois, Tandem est une application web conçue pour permettre à des utilisateurs individuels ou des groupes (familles, couples, colocataires, etc.) de mieux gérer leurs finances à travers une interface claire, personnalisable et centrée sur la collaboration.",
        category : 'Application Web',
        duration : "4 Mois",
        startDate : '06/01/2025',
        stack : ['React', 'Vite', 'InertiaJS', 'Laravel', 'PHP', 'MySQL', 'Shadcn UI', 'TailwindCSS'],
        tech : [
                    {
                        "Frontend" : "React + Vite, interface graphique construite avec ShadCN UI, stylisée via Tailwind CSS.",
                    },
                    {
                        "Backend" : "Laravel (PHP) avec base de données MySQL.",
                    },
                    {
                        "Sync" : "InertiaJS pour connecter le backend Laravel avec le frontend React, sans API REST intermédiaire.",
                    },
                    {
                        "Auth" : "Création d'un système complet d'inscription, de connexion, et de gestion de session, à l'aide du système d'authentification de Laravel."
                    }
                ],
        features : [
                        {
                            "Gestion des dépenses" : ["Interface intuitive pour ajouter, modifier et supprimer des dépenses, avec prise en compte du dépenseur, de la catégorie, du montant, de la date et du lieu.",
                                                      "Gestion optimisée de l&apos;état des formulaires avec feedback visuel fluide grâce aux composants ShadCN UI."],
                        },
                        {
                            "Objectifs financiers" :["Création d'objectifs de dépenses par catégorie, dépenseur ou période (mensuel, hebdomadaire, annuel).",
                                                     "Comparaison automatisée des objectifs avec les dépenses réelles."],
                        },
                        {    
                            "Statistiques & visualisation" : ["Génération de statistiques détaillées (graphiques et tableaux) selon différentes dimensions : période, catégorie, dépenseur.",
                                                              "Mise en place de nombreux filtres dynamiques pour affiner l'analyse des dépenses."],
                        },    
                        {
                            "Personnalisation" : ["Ajout/suppression de catégories de dépenses, personnalisation des couleurs par catégorie, création et édition des dépenseurs.",
                                                  "Personnalisation du format des nombres et dates, choix de la devise."]
                        },

                    ]
    },
}