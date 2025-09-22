import React, { useState } from "react";

export default function Participantes({ participantes, setParticipantes }) {
  const [nome, setNome] = useState("");

  const adicionar = () => {
    if (!nome.trim()) return;
    if (participantes.includes(nome.trim())) { setNome(""); return; }
    setParticipantes([...participantes, nome.trim()]);
    setNome("");
  };

  return (
    <section>
      <h2>Cadastrar Participante</h2>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Nome"
        />
        <button onClick={adicionar}>Adicionar</button>
      </div>
      <ul>
        {participantes.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </section>
  );
}
