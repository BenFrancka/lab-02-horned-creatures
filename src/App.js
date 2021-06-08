
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

                <label>
                    <select>
                        <option value= "narwhal">narwhal</option>
                        <option value="rhino">rhino</option>
                        <option value="unicorn">unicorn</option>
                        <option value="unilego">unilego</option>
                        <option value="triceratops">triceratops</option>
                        <option value="markhor">markhor</option>
                        <option value="mouflon">mouflon</option>
                        <option value="addax">addax</option>
                        <option value="chameleon">chameleon</option>
                        <option value="lizard">lizard</option>
                        <option value="dragon">dragon</option>
                    </select>
                </label>
                
          </div>

          <div className= "creature-section">
            <ImageList list= {creatures} />
          </div>
        
      </body>

    </div>
  );
}

export default App;
