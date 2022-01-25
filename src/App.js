import logo from './logo.svg';
import Menu from './components/MenuComponents.js'
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante on Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
     
    </div>
  );
}

export default App;
