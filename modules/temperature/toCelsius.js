export default function convertToCelsius(num, temperature) {
    temperature = temperature;
    switch(temperature) {
        case 'f':
            return (num - 32) * 5/9;
        case 'k':
            return num - 273,15;
    }
}