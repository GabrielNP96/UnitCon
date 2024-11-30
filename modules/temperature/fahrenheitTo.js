export default function fahrenheitTo(num, to) {
    const newTemperature = to;
    let converted;
    switch(newTemperature) {
       case 'k':
          converted = (num - 32) * 5/9 + 273.15;
          break;
       case 'c':
          converted = (num - 32) * 5/9;
    }
 
    return converted;
 }