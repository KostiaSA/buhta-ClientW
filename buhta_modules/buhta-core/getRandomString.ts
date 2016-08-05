
export function getRandomString(length: number = 24): string {
    return Math.random().toString(36).slice(2, 16);
}