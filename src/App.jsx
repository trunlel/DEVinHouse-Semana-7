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
        <Section nome="Hamburguers" produtos={produtos.Hamburguers} />

        <Section nome="Prensados" produtos={produtos.Prensados} />

        <Section
          nome="Cachorros Quentes"
          produtos={produtos["Cachorros Quentes"]}
        />

        <Section nome="Bebidas" produtos={produtos.Bebidas} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
