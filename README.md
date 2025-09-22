# Placar dos Jogos 🎲

App simples em React para cadastrar jogos, participantes, registrar partidas (com data, pontos e "Não jogou") e exibir o ranking com a soma dos pontos.

## Como rodar
1) Instale o Node.js (versão LTS) se ainda não tiver.
2) No VS Code, abra a pasta `pontos-jogos`.
3) No terminal, rode:
```
npm install
npm start
```
O navegador abrirá em `http://localhost:3000`.

## Estrutura
- `src/App.jsx` – componente principal
- `src/Jogos.js` – cadastro de jogos
- `src/Participantes.js` – cadastro de participantes
- `src/Partidas.js` – registro das partidas (data, pontos, "Não jogou")
- `src/Ranking.js` – soma dos pontos de cada participante
