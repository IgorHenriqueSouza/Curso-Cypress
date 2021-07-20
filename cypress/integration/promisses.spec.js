const { some, reject } = require("async");

it('sem testes ainda', () => {})

//metodo com arrow
const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(13);
        }, 1000)
})
    
}

//sistema que utiliza o metodo
const system = async () => {
    console.log('init');
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')
     
}

system();