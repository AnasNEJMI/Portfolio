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
    "/contact": "Contact",
    "/projects/feetme" : "FeetMe",
    "/projects/tandem" : "Tandem",
}

interface ProjectsDataType{
    href : string,
    title : string, 
    description : string,
    banner : {src : string, width : number, height : number,  type : 'image' | 'video'},
    phoneDisplay1 : {src : string, width : number, height : number, type : 'image' | 'video'},
    phoneDisplay2 : {src : string, width : number, height : number,  type : 'image' | 'video'},
    bigScreenSrc? : string,
    laptopSrc? : string,
    category : string,
    duration : string,
    startDate : string,
    githubRepo? : string,
    stack : string[], 
    tech : {[k : string] : string}[], 
    features : {[k : string] : string[]}[]
}

export const ProjectsData : Record<string, ProjectsDataType> = {
    "feetme": {
        href : 'feetme',
        title : 'FeetMe',
        description : "Dans le cadre d'une mission de 6 mois chez FeetMe, j'ai développé une application mobile Android en Java et Kotlin, conçue pour intéragir avec les semelles intelligentes fabriquées par l'entreprise, destinées aux professionnels de la podologie et aux athlètes.",
        category : 'Application Mobile',
        duration:"6 Mois",
        banner : {
                    src : '/images/feetme/feetme-banner.webp',
                    width : 900,
                    height : 1440,
                    type : 'image'
                    },
        phoneDisplay1 : {
                    src : '/images/feetme/feetme-1.webp',
                    width : 371,
                    height : 850,
                    type : 'image'
                    },
        phoneDisplay2 : {
                    src : '/images/feetme/feetme-2.webp',
                    width : 373,
                    height : 845,
                    type : 'image'
                    },
        startDate : "11/09/2015",
        stack : ['Android', 'Java', 'SQlite', 'WebGL', 'Multi-Threading', 'OKHttp', 'XML'],
        tech : [
                    {
                        "Connexion Bluetooth" : "Implémentation d'un système de connexion stable entre l'application et les semelles intelligentes via Bluetooth, avec gestion des états de connexion et reconnexion automatique en cas de coupure.",
                    },
                    {
                        "Affichage des données" : "Intégration de WebGL pour le rendu en temps réel des données de marche (pression, répartition, mouvement), offrant une visualisation fluide et interactive adaptée à une utilisation médicale.",
                    },
                    {
                        "Recording" : "Mise en place d'un processus de collecte et d'enregistrement des données de marche, structuré autour du multi-threading pour garantir la performance et la fiabilité même en cas de longues sessions de mesure.",
                    },
                    {
                        "Stockage & Sync" : "Enregistrement local des données dans une base de données SQL embarquée, puis synchronisation vers un backend distant via des appels réseau gérés par la librairie OkHttp."
                    },
                    {
                        "UI" : "Création d'interfaces ergonomiques et responsives à l'aide de layouts XML, avec attention portée à la clarté, l'accessibilité et la fluidité des interactions, dans un contexte d'usage médical."
                    }
                ],
        features : [
                        {
                            "Suivi précis de la marche" : ["les professionnels peuvent observer instantanément les paramètres biomécaniques du patient pendant la marche, ce qui facilite les ajustements immédiats."],
                        },
                        {
                            "Aide au diagnostic podologique" :["l'analyse détaillée des données collectées permet de détecter des anomalies de posture ou de marche, essentielles pour la prévention et le traitement des troubles locomoteurs."],
                        },
                        {    
                            "Historisation des données patients" : ["chaque session est sauvegardée localement et peut être transmise pour un suivi longitudinal, offrant ainsi un historique des progrès ou des détériorations."],
                        },
                    ]
    },
    "tandem": {
        href : 'tandem',
        title : 'Tandem',
        description : "Projet personnel réalisé sur 4 mois, Tandem est une application web conçue pour permettre à des utilisateurs individuels ou des groupes (familles, couples, colocataires, etc.) de mieux gérer leurs finances à travers une interface claire, personnalisable et centrée sur la collaboration.",
        category : 'Application Web',
        banner : {
                    src : '/images/tandem/tandem-banner.webp',
                    width : 900,
                    height : 1440,
                    type : 'image'
                    },
        phoneDisplay1 : {
                    src : '/videos/tandem/tandem-video-1.mp4',
                    width : 410,
                    height : 912,
                    type : 'video'
                    },
        phoneDisplay2 : {
                    src : '/videos/tandem/tandem-video-2.mp4',
                    width : 410,
                    height : 912,
                    type : 'video'
                    },
        bigScreenSrc :'/images/tandem/tandem-big-screen.webp',
        laptopSrc :'/images/tandem/tandem-laptop.webp',
        duration : "4 Mois",
        startDate : '06/01/2025',
        githubRepo : "https://github.com/AnasNEJMI/Tandem",
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