import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-project">
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
