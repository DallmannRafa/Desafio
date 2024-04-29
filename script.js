// Variáveis para armazenar dados
let vagasCadastradas = [];

const cadastro1 = {
    placa: 'XYZ9876',
    nome: 'Maria Oliveira',
    numeroApartamento: 205,
    bloco: 'B',
    modelo: 'Honda Civic',
    cor: 'Preto',
    numeroVaga: 3
};

const cadastro2 = {
    placa: 'DEF4567',
    nome: 'Carlos Souza',
    numeroApartamento: 302,
    bloco: 'C',
    modelo: 'Ford Fiesta',
    cor: 'Azul',
    numeroVaga: 5
};

const cadastro3 = {
    placa: 'GHI7890',
    nome: 'Ana Santos',
    numeroApartamento: 104,
    bloco: 'A',
    modelo: 'Volkswagen Gol',
    cor: 'Vermelho',
    numeroVaga: 2
};

vagasCadastradas.push(cadastro1, cadastro2, cadastro3);

// Função para salvar cadastro
function salvarCadastro() {
    const placa = document.getElementById('placa').value;
    const nome = document.getElementById('nome').value;
    const numeroApartamento = document.getElementById('numeroApartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const numeroVaga = document.getElementById('numeroVaga').value;

    if (!placa || !nome || !numeroApartamento || !bloco || !modelo || !cor || !numeroVaga) {
        alert('Todos os campos do cadastro são obrigatórios.');
        return;
    }

    const cadastro = {
        placa,
        nome,
        numeroApartamento,
        bloco,
        modelo,
        cor,
        numeroVaga
    };

    vagasCadastradas.push(cadastro);

    console.log('Cadastro realizado:', cadastro);
    alert('Cadastro realizado com sucesso!');

    document.getElementById('cadastroForm').reset();
}

// Função para exibir vagas cadastradas
function exibirVagasCadastradas() {

    const listaVagasCadastradas = document.getElementById('vagasCadastradas');
    listaVagasCadastradas.innerHTML = '';

    vagasCadastradas.forEach((vaga, index) => {
        const item = document.createElement('li');
        item.textContent = `Placa: ${vaga.placa}, Nome: ${vaga.nome}, Número da Vaga: ${vaga.numeroVaga}`;

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.setAttribute('class', 'btn-excluir');
        btnExcluir.addEventListener('click', () => excluirCadastro(index));
        item.appendChild(btnExcluir);

        console.log(index);

        listaVagasCadastradas.appendChild(item);
    });
}

function excluirCadastro(index) {
    vagasCadastradas.splice(index, 1);
    exibirVagasCadastradas();
}

// Função para exibir vagas disponíveis
function exibirVagasDisponiveis() {
    const listaVagasDisponiveis = document.getElementById('vagasDisponiveis');
    //listaVagasDisponiveis.innerHTML = '';

    const totalVagas = 50;
    const vagasOcupadas = vagasCadastradas.length;
    const vagasLivres = totalVagas - vagasOcupadas;

    const item = document.createElement('li');
    item.textContent = `Vagas Ocupadas: ${vagasOcupadas}, Vagas Livres: ${vagasLivres}`;
    listaVagasDisponiveis.appendChild(item);
}

function retornarPaginaInicial() {
    window.location.replace("Desafio.html");
}

function paginaListagemVagas() {
    window.location.replace('Listagem.html');
}

function paginaDisponiveis() {
    window.location.replace('Disponiveis.html');
}

window.onload = function () {
    let urlCompleta = window.location.href;
    let nomeArquivo = urlCompleta.substring(urlCompleta.lastIndexOf('/') + 1);

    if (nomeArquivo === 'Desafio.html') {
        document.getElementById('cadastro').style.display = 'block';
    }

    if (nomeArquivo === 'Listagem.html') {
        exibirVagasCadastradas();
    }

    if (nomeArquivo === 'Disponiveis.html') {
        exibirVagasDisponiveis();
    }

}

