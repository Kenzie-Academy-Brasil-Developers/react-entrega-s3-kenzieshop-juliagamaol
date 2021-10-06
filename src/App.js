import GlobalStyle from './styles/global'
import './App.css'
import Routes from "./routes";
import Header from './pages/Home/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
