const fromUnit= document.getElementById('from')
const temp = document.getElementById('temperatura')
const toUnit = document.getElementById('To')
const result = document.getElementById('result')

function  DisplayResult (){
    if( temp.value && fromUnit.value && toUnit.value){
        const temperature = parseFloat(temp.value)
        const from = fromUnit.value
        const to = toUnit.value

        const resultConverted = convertTemperature(temperature, from, to)
        result.textContent = `${temperature} ${from} равна ${resultConverted.toFixed(2)}`
    }
    else{
        result.textContent= ""
    }
}
function convertTemperature(temperature, from, to){
    let result 

    if(from === to ) return temperature

    if(from === 'Chelsia'){
        if(to === 'Farengeit'){
            result = (temperature * 9/5) + 32
        }
        else if (to === 'Kelvin'){
            result = temperature + 273.15
        }
    }
    if(from === 'Farengeit'){
        if(to === 'Chelsia'){
            result = (temperature - 32) * 5/9
        }
        else if (to === 'Kelvin'){
            result = ((temperature - 32) * 5/9) + 273.15;
        }
    }
    if(from === 'Kelvin'){
        if( to === 'Farengeit'){
            result = ((temperature - 273.15) * 9/5) + 32;
        }
        if(to === 'Chelsia'){
            result = temperature - 273.15;
        }
    }
    return result
}