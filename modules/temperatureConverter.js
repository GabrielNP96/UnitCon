import chalk from "chalk";

function temperatureConverter(num,from,to) {
    if(isNaN(num) === false && typeof(from) === 'string' && typeof(to)=== 'string') {

        if(from.length === 1 && to.length === 1) {
            if(from.toLowerCase() == 'c') {
                
            } else {
                
            }
        } else {
            console.log(chalk.red('Erro: Nome abreviado de uma das temperaturas não bate'));
        }

    } else {
        return console.log(chalk.red('Um dos dados está errado.'));
    }
}

temperatureConverter(1, 2, 'f');