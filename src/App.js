import React from "react";
import CardVideo from "./components/CardVideo";
import "./styles.css";

export default function App() {

  const titulo = "Título vídeo"
  const link1 = "https://picsum.photos/400/400?a=1"
  const link2 = "https://picsum.photos/400/400?a=2"
  const link3 = "https://picsum.photos/400/400?a=3"
  const link4 = "https://picsum.photos/400/400?a=4"
  const link5 = "https://picsum.photos/400/400?a=5"
  const link6 = "https://picsum.photos/400/400?a=6"
  const link7 = "https://picsum.photos/400/400?a=7"
  const link8 = "https://picsum.photos/400/400?a=8"

  function reproduzVideo() {
    alert('O vídeo foi iniciado')
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            {CardVideo(link1, reproduzVideo, titulo)}
            {CardVideo(link2, reproduzVideo, titulo)}
            {CardVideo(link3, reproduzVideo, titulo)}
            {CardVideo(link4, reproduzVideo, titulo)}
            {CardVideo(link5, reproduzVideo, titulo)}
            {CardVideo(link6, reproduzVideo, titulo)}
            {CardVideo(link7, reproduzVideo, titulo)}
            {CardVideo(link8, reproduzVideo, titulo)}
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}