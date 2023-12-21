export class Random {
    static number(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    static array<T>(array: T[]): T {
        return array[Math.floor(Math.random() * array.length)];
    };
};