import React from "react";

export default function Historico({ participantes, partidas }) {
  const formatDate = (iso) => {
    try {
      const d = new Date(iso + "T00:00:00");
      return d.toLocaleDateString("pt-BR");
    } catch {
      return iso;
    }
  };

  if (!partidas.length) {
    return (
      <section>
        <h2>Histórico de Partidas</h2>
        <p>Nenhuma partida registrada ainda.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Histórico de Partidas</h2>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={th}>Data</th>
              <th style={th}>Jogo</th>
              {participantes.map((p, i) => (
                <th key={i} style={th}>{p}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {partidas.map((partida, idx) => (
              <tr key={idx}>
                <td style={td}>{formatDate(partida.data)}</td>
                <td style={td}>{partida.jogo}</td>
                {participantes.map((p, i) => {
                  const val = partida.pontos?.[p];
                  const display = val === "Não jogou" ? "Não jogou" : (Number.isFinite(val) ? val : "—");
                  return <td key={i} style={td}>{display}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const th = {
  textAlign: "left",
  borderBottom: "1px solid #1f2937",
  padding: "8px"
};

const td = {
  borderBottom: "1px solid #111827",
  padding: "8px"
};
