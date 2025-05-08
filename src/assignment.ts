

function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}



function concatenateArrays<all>(...arrays: all[][]): all[] {
    return ([] as all[]).concat(...arrays);
}



class Vehicle {
    constructor(public make: string, public year: number) { }

    getInfo() {
        return `Make: ${this.make}, year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make: string, year: number, public model: string) {
        super(make, year);
    }

    getModel() {
        return `Model: ${this.model}`;
    }
}




function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else if (typeof value === "number") {
        return value * 2;
    }
    return 0;
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    const maxPrice = Math.max(...products.map(product => product.price));
    return products.find(product => product.price === maxPrice) || null;
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}



async function squareAsync(n: number): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (n < 0) {
        throw new Error("Negative number not allowed");
    }
    return n * n;
}
