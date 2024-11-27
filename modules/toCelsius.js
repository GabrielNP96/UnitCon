convertToCelsius(num, temperature) {
    const originalTemperaure = temperature;
    switch(originalTemperaure) {
        case 'K':
            return (originalTemperaure - 32) * 5/9;

}