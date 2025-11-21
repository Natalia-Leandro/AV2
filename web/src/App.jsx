import NavBar from "./componentes/NavBar";
import AppRoutes from "./rotas/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: 32 }}>
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
