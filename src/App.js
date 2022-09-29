import { NavBar, Main } from './components';
import './App.scss';

function App() {
  return (
    <div className="App" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/backgroundMain.jpg)`,
      backgroundSize: 'cover',
      backgroundBlendMode: 'darken'
    }}>
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
