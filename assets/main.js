const form = document.getElementById('form-user');
const inputPhoneNumber = document.getElementById('user-phone-number');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

inputPhoneNumber.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona os parênteses em volta do DDD
    value = value.replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Adiciona o hífen no número de telefone
    e.target.value = value;
});

function adicionaLinha() {
    const inputNomeUser = document.getElementById('name-user');
    const inputPhoneNumberUser = document.getElementById('user-phone-number');

    let linha = '<tr>';
    linha += `<td>${inputNomeUser.value}</td>`;
    linha += `<td>${inputPhoneNumberUser.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;

    inputNomeUser.value = '';
    inputPhoneNumberUser.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};