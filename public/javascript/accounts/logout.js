"use strict";
onload = (evento) => {
    const logoutButton = document.getElementById('logout');
    const backButton = document.getElementById('voltar');
    logoutButton.addEventListener('click', (evento) => {
        const token = localStorage.getItem('token');
        fetch(backendAddress + 'accounts/token-auth/', {
            method: 'DELETE',
            headers: {
                'Authorization': tokenKeyword + token,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            const mensagem = document.getElementById('mensagem');
            if (response.ok)
                window.location.assign('/');
            else
                mensagem.innerHTML = 'Erro ' + response.status;
        })
            .catch(erro => {
            console.log(erro);
        });
    });
    backButton.addEventListener('click', function () {
        window.location.assign('/');
    });
};
