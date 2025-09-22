import React, { useState, useEffect } from "react";
import Jogos from "./Jogos";
import Participantes from "./Participantes";
import Partidas from "./Partidas";
import Ranking from "./Ranking";
import Historico from "./Historico";

export default function App() {
  const [jogos, setJogos] = useState([]);
  const [participantes, setParticipantes] = useState([]);
  const [partidas, setPartidas] = useState([]);

  // Carregar do localStorage
  useEffect(() => {
    const savedJogos = localStorage.getItem("jogos");
    const savedParticipantes = localStorage.getItem("participantes");
    const savedPartidas = localStorage.getItem("partidas");
    if (savedJogos) setJogos(JSON.parse(savedJogos));
    if (savedParticipantes) setParticipantes(JSON.parse(savedParticipantes));
    if (savedPartidas) setPartidas(JSON.parse(savedPartidas));
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("jogos", JSON.stringify(jogos));
  }, [jogos]);

  useEffect(() => {
    localStorage.setItem("participantes", JSON.stringify(participantes));
  }, [participantes]);

  useEffect(() => {
    localStorage.setItem("partidas", JSON.stringify(partidas));
  }, [partidas]);


  return (
    <div className="container">
      <h1>Placar dos Jogos 🎲</h1>
      <div className="grid-2">
        <Jogos jogos={jogos} setJogos={setJogos} />
        <Participantes participantes={participantes} setParticipantes={setParticipantes} />
      </div>
      <Partidas
        jogos={jogos}
        participantes={participantes}
        partidas={partidas}
        setPartidas={setPartidas}
      />
      <Historico participantes={participantes} partidas={partidas} />
      <Ranking participantes={participantes} partidas={partidas} />
    </div>
  );
}
