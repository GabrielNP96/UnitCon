function temperatureConverter(num,from,to) {
    if(isNaN(num) === false && typeof(from) === 'string' && typeof(to)=== 'string') {
        return console.log(`${num}, ${from}, ${to}`);
    } else {
        return console.log('Um dos dados está errado.');
    }
}

temperatureConverter(1,'k', 2);