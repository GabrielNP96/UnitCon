export default function kelvinTo(num, to) {
    const newTemperature = to;
    let converted;
    switch(newTemperature) {
       case 'f':
          converted = (num  - 273.15) * 9/5 + 32;
          break;
       case 'c':
          converted = 0 - 273,15;
    }
 
    return converted;
 }