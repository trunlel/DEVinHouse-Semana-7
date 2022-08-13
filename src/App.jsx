import "./App.css";
import produtos from "../src/components/produtos.json";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Section nome="Saladas" produtos={produtos.entradas} />
        <hr />
        <Section
          nome="Pratos Principais"
          produtos={produtos.pratosPrincipais}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
