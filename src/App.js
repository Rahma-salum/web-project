import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Event from './component/User/UserForm';
import ViewEvent from './component/User/ViewEvent';
import ChangeAccont from './component/User/ChangeAccont';
import DashAdmin from './component/Admin/DashAdmin';
import DashA from './component/Admin/DashA';
import EventList from './component/Admin/EventList';
import ChangeInfo from './component/Admin/ChangeInfo';
import UserForm from './component/User/UserForm';
import UserList from './component/Admin/UserList';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/dash' element={<Dashboard/>} >
          <Route index element={<UserForm/>} />
          <Route path='UserForm' element={<UserForm/>} />
          <Route path='view-Event' element={<ViewEvent/>} />
          <Route path='change' element={<ChangeAccont/>}/>
        </Route>

      <Route path='/admin-dash' element={<DashAdmin/>}>
        <Route index element={<DashA/>} />
      <Route path='admin' element={<DashA/>}/>
      <Route path='Event-List' element={<EventList/>}/>
      <Route path='change-info' element={<ChangeInfo/>}/>
      <Route path='userlist' element={<UserList/>}/>

      </Route>
       

      </Routes>
  );
}

export default App;
