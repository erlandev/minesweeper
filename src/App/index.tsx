import {useEffect} from 'react';
import {w3cwebsocket as W3CWebSocket} from 'websocket';

import Game from '../Game';
import style from './style.module.css';

const workingWSUrl = 'wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&notify_self'
const testWSUrl = 'wss://http://hometask.eg1236.com/game1/'
const WSUrl = 'wss://www.flymeto.com/websocket'
const client = new W3CWebSocket(WSUrl);

export default function App() {
  useEffect(() => {
    client.onopen = () => {
      console.log('websocket client connected');
    };

    client.onerror = (err) => {
      console.log('SOCKET ERROR', err);
    };

  }, []);
  return (
    <main className={style.App}>
      <div className={style.container}>
        <h1 className={style.title}>💣minesweeper</h1>
        <Game />
      </div>
    </main>
  );
}
