export function mapRounded(value : number, min1 : number, max1 : number, min2 : number, max2 : number) {
    return Math.round(min2 + (max2 - min2) * ((value - min1) / (max1 - min1)));
}

export function map(value : number, min1 : number, max1 : number, min2 : number, max2 : number) {
    const result = min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
    // if(result < min2) return min2;
    // if(result > max2) return max2;
    return result;
}

export const delay = (duration : number) => {
  return new Promise(resolve => setTimeout(resolve, duration));
}





