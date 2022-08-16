import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className='App'>
      <Header title="Horned Beasts" />
      <Main />
      <Footer authorName="Robert Shepley" />
    </div>
  );
}

export default App;
