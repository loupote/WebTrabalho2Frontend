"use strict";
onload = () => {
    document.getElementById('insere').addEventListener('click', evento => {
        evento.preventDefault();
        const elements = document.getElementById('meuFormulario').elements;
        let data = {};
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            data[element.name] = element.value;
        }
        fetch(backendAddress + "participantes/umparticipante/", {
            method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' }
        })
            .then(response => {
            if (response.ok) {
                window.location.href = "listaParticipantes.html";
            }
            else {
                document.getElementById('mensagem').innerHTML = 'Dados inseridos com erro';
            }
        })
            .catch(error => { console.log(error); });
    });
};
