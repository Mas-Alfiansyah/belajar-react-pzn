import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Game from './pages/Game';
import Todo from './todo/TodoList';
import TableTidakPureFunction from './pure-function/TableTidakPureFunction';
import TablePureFunction from './pure-function/TablePureFunction';
import EventHandler from './pages/EventHandler';
import EventPropagation from './pages/EventPropagation';
import PreventDefault from './pages/PreventDefault';
import SideEffect from './pages/SideEffect';
import Hooks from './hooks/Hooks';
import StateHooks from './hooks/StateHooks';
import StateUpdate from './hooks/StateUpdate';
import ObjectDiState from './hooks/ObjectDiState';
import NestedObject from './hooks/NestedObject';
import ImmerLibrary from './hooks/ImmerLibrary';

function App() {

  return (
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/game' element={<Game/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/tidak-pure-function' element={<TableTidakPureFunction/>}/>
          <Route path='/pure-function' element={<TablePureFunction/>}/>
          <Route path='/event-handler' element={<EventHandler text="Click Saya"/>}/>
          <Route path='/event-propagation' element={<EventPropagation handleClick={(e) => {
            e.stopPropagation(); // klo ga di stopPropagation, maka event ini akan merambat ke parentnya atau bakal ada multiple alert
            alert("Anda klik saya")
          }}/>}
          />
          <Route path='/prevent-default' element={<PreventDefault/>}/>
          <Route path='/side-effect' element={<SideEffect/>}/>
          <Route path='/pengantar-hooks' element={<Hooks/>}/>
          <Route path='/state-hooks' element={<StateHooks/>}/>
          <Route path='/state-update' element={<StateUpdate/>}/>
          <Route path='/object-di-state' element={<ObjectDiState/>}/>
          <Route path='/nested-object' element={<NestedObject/>}/>
          <Route path='/immer-library' element={<ImmerLibrary/>}/>
        </Routes>
      </Container>
  )
}

export default App
