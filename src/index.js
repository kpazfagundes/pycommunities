import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MapContainer from './Components/mapcontainer'
import Header from './Components/header'

ReactDOM.render(
    <div>
        <span><img src="./pycommex.png" width='50%' top='10px'/></span>    
        <App/>
        <MapContainer/>
        
    </div>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

export { App };