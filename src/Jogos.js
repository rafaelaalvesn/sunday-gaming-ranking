import React, { useState } from "react";

export default function Jogos({ jogos, setJogos }) {
  const [nome, setNome] = useState("");

  const adicionar = () => {
    if (!nome.trim()) return;
    if (jogos.includes(nome.trim())) { setNome(""); return; }
    setJogos([...jogos, nome.trim()]);
    setNome("");
  };

  return (
    <section>
      <h2>Cadastrar Jogo</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Nome do jogo"
        />
        <button onClick={adicionar}>Adicionar</button>
      </div>
      <ul>
        {jogos.map((j, i) => <li key={i}>{j}</li>)}
      </ul>
    </section>
  );
}
