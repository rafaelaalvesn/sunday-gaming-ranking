import React, { useState } from "react";

export default function Partidas({ jogos, participantes, partidas, setPartidas }) {
  const [jogo, setJogo] = useState("");
  const [data, setData] = useState("");
  const [pontos, setPontos] = useState({});

  const salvarPartida = () => {
    if (!jogo || !data) return;
    setPartidas([...partidas, { jogo, data, pontos }]);
    setPontos({});
  };

  return (
    <section>
      <h2>Registrar Partida</h2>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <select value={jogo} onChange={e => setJogo(e.target.value)}>
          <option value="">Selecione um jogo</option>
          {jogos.map((j, i) => (
            <option key={i} value={j}>{j}</option>
          ))}
        </select>

        <input
          type="date"
          value={data}
          onChange={e => setData(e.target.value)}
        />
      </div>

      <h3>Pontos</h3>
      {participantes.length === 0 && <p>Cadastre participantes antes.</p>}
      {participantes.map((p, i) => (
        <div key={i} style={{ marginBottom: 8 }}>
          <label style={{ width: 160, display: "inline-block" }}>{p}:</label>
          <input
            type="number"
            value={typeof pontos[p] === "number" ? pontos[p] : ""}
            onChange={e =>
              setPontos({
                ...pontos,
                [p]: e.target.value === "" ? "" : Number(e.target.value)
              })
            }
            placeholder="Pontos"
            style={{ marginRight: 8, width: 120 }}
          />
          <button
            onClick={() => setPontos({ ...pontos, [p]: "Não jogou" })}
            title="Marcar que esta pessoa não jogou"
          >
            Não jogou
          </button>
        </div>
      ))}

      <button onClick={salvarPartida} style={{ marginTop: 12 }}>
        Salvar Partida
      </button>
    </section>
  );
}
