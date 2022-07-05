import React from 'react'
import ReactDOM from 'react-dom/client'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-useState/CounterApp'
//import { HooksApp } from './HooksApp'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FocusScreen />
  //</React.StrictMode>
)
