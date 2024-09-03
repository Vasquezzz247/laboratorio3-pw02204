const countVotes = (votes) => {
    let resultado = {};
    votes.forEach(vote => {
        resultado[vote.candidate] = (resultado[vote.candidate] || 0) + 1;
    });
    return resultado;
}

const showResults = (resultado) => {
    alert("Resultados de la votación");
    for (let candidate in resultado){
    alert(`${candidate}: ${resultado[candidate]} votes`);
    }
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    showResults(countVotes(votes));
}

main();
