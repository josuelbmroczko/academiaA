 
import './App.css';
import GlobalStyle from './GlobalStyle.js';
import { MediaCarousel } from './componetes/MediaCarousel/MediaCarousel.jsx';
import NossaEquipe from './componetes/NossaEquipe/NossaEquipe.js';
import Taekwondo from './componetes/Taekwondo/index.jsx';
import Contatos from './componetes/contatos/index.jsx';
import Footer from './componetes/footer/index.jsx';
import Mapa from './componetes/mapa/index.jsx';
import Section1 from './componetes/section1/index.jsx';
import Topo from './componetes/topo/topo.jsx';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
      <Topo/>
      <Section1/>
      <Taekwondo/>
      <NossaEquipe/>
       <MediaCarousel/>
      <Contatos/>
      <Mapa/>
      <Footer/>
    </div>
  );
}

export default App;
