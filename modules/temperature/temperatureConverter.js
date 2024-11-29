import chalk from "chalk";
import convertFromCelsius from "./fromCelsius.js";
import convertToCelsius from "./toCelsius.js";

export default function temperatureConverter(num,from,to) {
    if(isNaN(num) === false && typeof(from) === 'string' && typeof(to)=== 'string') {

        if(from.length === 1 && to.length === 1) {
            if(from.toLowerCase() == 'c') {
                return convertFromCelsius(num, to.toLowerCase())
            } else {
                const celsius = convertToCelsius(num, from.toLowerCase());
                return convertFromCelsius(celsius, to.toLowerCase())
            }
        } else {
            return console.log(chalk.red('Erro: Nome abreviado de uma das temperaturas não bate'));
        }

    } else {
        return console.log(chalk.red('Um dos dados está errado.'));
    }
}