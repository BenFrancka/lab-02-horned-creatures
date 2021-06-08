
import './App.css';
import creatures from './data.js';
import Header from './Header.js';
import ImageList from './ImageList.js';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Header />
      </header>

      <body>

          <div className= "drop-down">
          <label>
                    <select>
                        <option value= "1">One Horned</option>
                        <option value="2">Two Horned</option>
                        <option value="3">Three Horned</option>
                        <option value="100">Too Many Horns</option>
                    </select>
                </label>
          </div>
          
        <ImageList list= {creatures} />
      </body>

    </div>
  );
}

export default App;
