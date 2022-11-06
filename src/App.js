import CardInput from "./components/CardInput/CardInput";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CardList from "./components/CardsList/CardList";
import CardForm from "./components/CardForm/CardForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/addCard" element={<CardForm />}></Route>
          <Route path="/getCards" element={<CardList />}></Route>
          <Route path="/" element={<CardInput />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
