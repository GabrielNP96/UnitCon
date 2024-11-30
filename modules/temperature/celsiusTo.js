export default function celsiusTo(num, to) {
   const newTemperature = to;
   let converted;
   switch(newTemperature) {
      case 'k':
         converted = num + 273.15;
         break;
      case 'f':
         converted = (num * 9/5) + 32;
   }

   return converted;
}

