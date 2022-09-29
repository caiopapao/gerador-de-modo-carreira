alert('pqp')

const timesElites = [
    'Real Madrid', 'Barcelona', 'Atletico de Madrid',
    'City', 'Liverpoll', 'Tottenham', 'United',
    'Bayern', 'Borussia',
    'Juventus', 'Inter', 'Milan',
    'Benfica', 'Porto'
];
const timeEliteAleatorio = Math.floor(Math.random() * timesElites.length);


const missoesElite = [
    'ganhar a champions em 2 anos',
    'o título da liga nacional na primeira temporada',
    'Fazer mais de 80 gols na liga',
    'ter pelo menos 4 jogadores no time da temporada da liga na primeira temporada',
    'ganhar a champions com pelo menos 2 jogadores vindo da base em no máximo 3 temporadas'
    
]
const missaoEliteAleatoria = Math.floor(Math.random() * missoesElite.length);


const complicadoresElite = [
    'as contratações poderão ser apenas de times da mesma liga',
    'terá que vender ao menos 3 jogadores do time titular',
    'terá que contratar ao menos 1 jogador da América do Sul para o time titular',
    'as novas contratações serão com idade máxima a 24 anos',
    'os jogadores do banco de reservas terão idade máxima igual ou menor que 23 anos',
    'você só vai gastar com o que conseguir vendendo seus jogadores'

]
const complicadorEliteAleatorio = Math.floor(Math.random() * complicadoresElite.length);









document.write(`Sua missão é: escolher o time ${timesElites[timeEliteAleatorio]} e conseguir ${missoesElite[missaoEliteAleatoria]}, porém ${complicadoresElite[complicadorEliteAleatorio]}. `);




