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
}
