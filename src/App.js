import './App.css';
import Header from './components/layout/Header.js';
import Main from './components/layout/Main.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <>
      <Header title="Horned Beasts" />
      <Main />
      <Footer authorName="Robert Shepley" />
    </>
  );
}

export default App;
