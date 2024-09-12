export function mapRounded(value, min1, max1, min2, max2) {
    return Math.round(min2 + (max2 - min2) * ((value - min1) / (max1 - min1)));
}

export function map(value, min1, max1, min2, max2) {
    return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
}