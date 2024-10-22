// Função para trocar o conteúdo com base no link clicado
function mostrarConteudo(secao) {
    const conteudoDiv = document.getElementById('conteudo');

    // Limpa o conteúdo antes de exibir o novo
    conteudoDiv.innerHTML = '';

    // Verifica qual seção foi clicada e insere o conteúdo correspondente
    if (secao === 'sobre') {
        conteudoDiv.innerHTML = '<h2>Sobre Mim</h2><p>Olá,  me chamo Fábio André dos Santos Nogueira, sou Pai do Pedro, do André, do João e Marido da Ney...Tenho 41 anos, sou industrial. Meu Hobby é está com minha família fazendo qualquer coisa, de segunda a sexta traba-lho na indústria, mas no final de semana viro o master chef a cozinha fica por minha conta... Dou uma folga para minha esposa e atendo os pedidos deles. Gosto de um bom filme e uma boa comida.. Gosto de assistir ani-mes com meus filhos e séries com minha esposa.</p>';
    } else if (secao === 'formacao') {
        conteudoDiv.innerHTML = '<h2>Formação</h2><p>Sou Bacharel em Administração com Pós em Engenharia de Produção e Ciência de Dados e Big Data Analytics...Tenho também formação Técnica em Mineração e sou especialista e Green Belt Falo inglês e consigo me comunicar em espanhol, francês, malaio, alemão, norueguês,chinês e japonês</p>';
    } else if (secao === 'portfolio') {
        conteudoDiv.innerHTML = '<h2>Portfólio</h2><p>Veja alguns dos meus trabalhos: <a href="https://fbio29.github.io/Fbio.github.io/">Trabalho de Aplicações Web</a>.</p>';
    } else if (secao === 'contato') {
        conteudoDiv.innerHTML = `
            <h2>Contato</h2>
            <form>
                <label for="nome">Nome:</label><br>
                <input type="text" id="nome" name="nome"><br><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br><br>
                <label for="mensagem">Mensagem:</label><br>
                <textarea id="mensagem" na-me="mensagem"></textarea><br><br>
                <input type="submit" value="Enviar">
            </form>
        `;
    }
}
