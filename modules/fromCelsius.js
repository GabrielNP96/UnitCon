export default function convertFromCelsius(num, temperature) {
    const originalTemperaure = temperature;
    switch(originalTemperaure) {
        case 'f':
            return (num * 9/5) + 32;
        case 'k':
            return 0 + 273,15;
        case 'c':
            return num;
        }
}