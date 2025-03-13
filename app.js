//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigo() {
    let inputNome = document.getElementById("nomeAmigo"); 
    let nome = inputNome.value.trim(); 

    if (nome) { 
        amigos.push(nome); 
        inputNome.value = ""; 
        atualizarLista(); 
    } else {
        alert("Por favor, insira um nome válido."); 
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); 

    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) { 
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceSorteado]; 

    let resultado = document.getElementById("resultadoSorteio"); 
    resultado.innerHTML = `🎉 O amigo sorteado foi: <strong>${amigoSorteado} 🎉</strong>`;
    resultado.classList.add("result-list"); 
}

