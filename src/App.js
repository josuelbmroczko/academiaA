 
import './App.css';
import Taekwondo from './componetes/Taekwondo/index.jsx';
import Contatos from './componetes/contatos/index.jsx';
import Footer from './componetes/footer/index.jsx';
import Mapa from './componetes/mapa/index.jsx';
import Section1 from './componetes/section1/index.jsx';
import Topo from './componetes/topo/topo.jsx';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Section1/>
      <Taekwondo/>
      <Contatos/>
      <Mapa/>
      <Footer/>
    </div>
  );
}

export default App;
