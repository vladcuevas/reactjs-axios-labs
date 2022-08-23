import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from "./StateProvider"


const root = document.getElementById("root") //div

const reactRoot = createRoot(root)
reactRoot.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
)