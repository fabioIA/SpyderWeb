// Importando a variável e a função da tabela.js
import { video, NewTabela } from "./tabela.js";

// Chama essa função toda vez que uma tecla for levantada dentro da caixa de pesquisa
document.getElementById('pesquisa').onkeyup = () => {

        // Definindo variáveis
        let nome = document.getElementById('pesquisa').value.toLowerCase();
        let array = [];

        // Exibe todas as mídias
        if(nome === "@todos") {
                for(let i in video) {
                        array[i] = video[i].midia;
                }

                document.getElementById('tabela').innerHTML = '<table id="mesa" border="2"><thead><tr><th>N°</th><th>Nome</th><th>Tipo</th><th>Fase</th><th>Classificação</th><th colspan="3">Genêros</th></tr></thead></table>';
               
                NewTabela(array);
                return;
        }

        // Procurando palavras iguais
        for(let i in video) {

                for(let j in video[i].midia) {
                        if(nome === video[i].midia.substr(j, nome.length).toLowerCase()) {
                                array[array.length] = video[i].midia;
                                break;

                        }
                }
        }

        // Chama a função que cria a tabela
        if(nome !== "") {
                document.getElementById('tabela').innerHTML = '<table id="mesa" border="2"><thead><tr><th>N°</th><th>Nome</th><th>Tipo</th><th>Fase</th><th>Classificação</th><th colspan="3">Genêros</th></tr></thead></table>';
                
                NewTabela(array);
        }
}