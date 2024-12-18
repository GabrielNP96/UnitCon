import celsiusTo from "./celsiusTo.js";
import fahrenheitTo from "./fahrenheitTo.js";
import kelvinTo from "./kelvinTo.js";

export default function temperatureConverter(num, from, to) {
    if(isNaN(num) === false && typeof(from) === "string" && typeof(to) === "string" && from.length === 1 && to.length === 1) {
        const originalTemperature = from.toLowerCase();
        const newTemperature = to.toLowerCase();
        let convertedTemperature;
        
        if(originalTemperature === 'c') {
          return  convertedTemperature = celsiusTo(num, newTemperature);
        } else if (originalTemperature === 'f') {
            return convertedTemperature = fahrenheitTo(num, newTemperature);
        } else if (originalTemperature === 'k') {
            return convertedTemperature = kelvinTo(num,newTemperature);
        }

    } else {
        return 'Erro: parâmetros invalidos.';
    }

    

}