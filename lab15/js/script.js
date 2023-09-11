let population;

const country = "VietNam";
const continent = 'Asia';
population = 99;
const isIsland = false;
const language = 'VietNamese';



//  console.log('Country: ' + country );
//  console.log('Continent: ' + continent);
//  console.log('Population: ' + population + ' million.');

/*Lab 15.1*/
console.log('Type of isIsland is ' + typeof(isIsland));
console.log('Type of population is ' + typeof(population));
console.log('Type of country is ' + typeof(country));
console.log('Type of language is ' + typeof(language));

/*Lab 15.2*/
// isIsland = true;

/*Lab15.3*/
console.log(population / 2);
console.log(population + 1);

if(population > 6){
    console.log(population + ' miilion greater than 6 million' );
}else{
    console.log(population + ' miilion less than 6 million' );
}

if(population > 33){
    console.log(country + ' greater population than average population levels' );
}else{
    console.log(country + ' less population than average population levels' );
}

// const description = country +' and its '+ population + ' million people speak ' + language ;

/*Lab15.4*/
const description = `${country} and its ${population} million people speak ${language}` ;

/*Lab15.5*/

// population = 13;
// population = 130;

if(population > 33 ){
    console.log(country + 's population is above average');
}else{
    console.log(country+ 's population is < 33 - '+ population + ' million below average');
}
