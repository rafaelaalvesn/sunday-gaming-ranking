import React from "react";

export default function Ranking({ participantes, partidas }) {
  const soma = {};
  participantes.forEach(p => (soma[p] = 0));

  partidas.forEach(partida => {
    Object.entries(partida.pontos).forEach(([nome, valor]) => {
      if (valor !== "Não jogou") {
        soma[nome] += Number.isFinite(valor) ? valor : 0;
      }
    });
  });

  return (
    <section>
      <h2>Ranking</h2>
      {participantes.length === 0 ? (
        <p>Cadastre participantes para ver o ranking.</p>
      ) : (
        <ul>
          {participantes.map((p, i) => (
            <li key={i}>
              {p}: <strong>{soma[p]}</strong> pontos
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
