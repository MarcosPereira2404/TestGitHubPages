document.getElementById("open-list").addEventListener("click", async (event) => {

    debugger;
    let pessoas = await ObterDados("Pessoa");
    const container = document.getElementById('tabela-container');

    // Cria a tabela
    const tabela = document.createElement('table');

    // Cabeçalho
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Nome', 'Idade'];
    headers.forEach(texto => {
        const th = document.createElement('th');
        th.textContent = texto;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    tabela.appendChild(thead);

    // Corpo da tabela
    const tbody = document.createElement('tbody');
    pessoas.forEach(pessoa => {
        const row = document.createElement('tr');
        const tdNome = document.createElement('td');
        tdNome.textContent = pessoa.Nome;
        const tdIdade = document.createElement('td');
        tdIdade.textContent = pessoa.Idade;
        row.appendChild(tdNome);
        row.appendChild(tdIdade);
        tbody.appendChild(row);
    });
    tabela.appendChild(tbody);

    // Adiciona a tabela ao DOM
    container.appendChild(tabela);
});


async function ObterDados(entidade) {

    return await fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            if (entidade === "Pessoa") {
                return data.Pessoa;
            }
        })
        .catch(erro => console.error("Erro ao carregar Dados:", erro));
}