import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import GetUsers from './components/GetUsers';
import CreateUser from './components/CreateUser';
import CreateUserForm from './components/CreateUserForm';


function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              GetUsers
            </NavLink>
          </li>
          <li>
            <NavLink to='/create-user' activeClassName='active'>
              CreateUsers
            </NavLink>
          </li>
          <li>
            <NavLink to='/create-user2' activeClassName='active'>
              CreateUsersForm
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}


function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<GetUsers />} />
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/create-user2' element={<CreateUserForm />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
