let Mmass , Mheight, Jmass, Jheight;
// Mmass = 78;
// Mheight = 1.69;
// Jmass = 92;
// Jheight = 1.95;

Mmass = 95;
Mheight = 1.88;
Jmass = 85;
Jheight = 1.76;

const MBMI = Mmass/(Mheight*Mheight);
const JBMI = Jmass/(Jheight*Jheight);
const markHigherBMI = Mmass/(Mheight*Mheight) > Jmass/(Jheight*Jheight);

if(markHigherBMI == true){
    console.log(`Mark's BMI ${MBMI} is higher than John's ${JBMI}!`);
}else{
    console.log(`John's BMI ${JBMI} is higher than Mark's ${MBMI}!`);
}
