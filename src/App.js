import { useEffect, useState } from 'react';
import Students from '../src/Components/Students';
import './App.css';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import UpdateStudents from './Components/UpdateStudents';
import AddStudents from './Components/AddStudents';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage';
import NoPage from './Components/Nopage';


function App() {
  
  const [students,setStudents]=useState([]);
  useEffect(()=>{
    const getStudents=async()=>{
      const response=await fetch("https://644b33c517e2663b9deab9c8.mockapi.io/users",{
        method:"GET",
      });
      const data =await response.json();
      if(data){
        setStudents(data);
      }
    }
    getStudents();
  },[])
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route path='/students'>
          <Students
          students={students}
          setStudents={setStudents}
          />
          <div className='text-center p-5 bg-dark text-light fixed-end'>
        <i className="fa fa-copyright" aria-hidden="true">© Eternal_Shadow 2023</i>
      </div>
        </Route>
        <Route path='/add'>
          <AddStudents
          students={students}
          setStudents={setStudents}
          />
        </Route>
        <Route path='/edit/:id'>
          <UpdateStudents
          students={students}
          setStudents={setStudents}
          />
        </Route>
        <Route path='**'>
          <NoPage/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
