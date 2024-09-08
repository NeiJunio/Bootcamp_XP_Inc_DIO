 const lista = [
    {
        preco: 30,
        nome: 'sabão em pó',
    },
    {
        preco: 12,
        nome: 'cereal',
    },
    {
        preco: 30,
        nome: 'toalha',
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        // console.log('rodada', index+1);
        // console.log({prev});
        // console.log({current});
        
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));


/* COm a função reduce, pegou-se o saldo disponível, e foi percorrendo o array da lista, descontando os preços, ate finalizar o array e geral o "saldo final", que é igual ao saldo disponível menos o total de valores do array */