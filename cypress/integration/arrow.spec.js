it('nada agora', function (){})

// Função mais basica
// function soma(a, b) {
//     return a + b;
// }
//________________________________________________________

// Função anonima com variavel
// const soma = function (a, b){
//     return a + b
// }
//________________________________________________________

// Arrow func basica
// const soma = (a, b) => {
//     return a + b
// }
//________________________________________________________

// Arrow func reduzida
// const soma = (a, b) => a + b
//________________________________________________________

// Arrow func reduzida
// const soma = (a) => a + a
//          _OU_
// const soma = a => a + a
//          _OU_
const soma = () => 5 + 5
//________________________________________________________


console.log(soma(1,4))


it('a function test...', function (){
    console.log('function', this)
})

it('an arrow test...', () => {
    console.log('function', this)
})



