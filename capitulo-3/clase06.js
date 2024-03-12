let contador = 0

const llueve = () => Math.random() < 0.25

do{
    console.log("llueve");
}while(!llueve())

console.log('ya no llueve');