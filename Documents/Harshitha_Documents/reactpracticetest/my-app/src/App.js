// import logo from './logo.svg';
import './App.css';
// import Slider from './Slider';
// import ShowPic from './ShowPic/ShowPic';
import React, {useState, Fragment, useEffect} from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Edit from './Edit';
import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import Todo from "../src/components/todo/Todo"
import CreateTask from './components/createtask/CreateTask';






function App(){



   return(
    <div>

<Todo />
    </div>
   )
}


export default App;