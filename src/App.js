import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import {NavBar} from "./components/navBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Próximamente: Vivero Orgánico"} />
      <div className="areaAlert">
      <Alert severity="success" color="warning" style={{fontSize: '1.1rem'}}>
        <AlertTitle style={{fontSize: '1.25rem'}}>Mientras tanto...</AlertTitle>
         Podés ir preparando todas tus macetas y un espacio con mucho sol!
      </Alert>
      </div>
    </div>
  );
}

export default App;
