export function rgbaToHex(rgba:string) {
    // Extraer los valores de rgba usando una expresión regular
    const [_, r, g, b] = rgba.match(/rgba?\((\d+), (\d+), (\d+)/) || [];

    // Convertir los valores RGB a hexadecimal
    const hex = (c:string) => Number(c).toString(16).padStart(2, "0");
    return `#${hex(r)}${hex(g)}${hex(b)}`;
}