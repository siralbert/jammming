import React from 'react';
import '../../reset.css';
import './App.css';

class App extends React.Component {
  render(){
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
              <div className="App">
              {/* <!-- Add a SearchBar component --> */}
                  <div className="App-playlist">
                      {/* <!-- Add a Playlist component --> */}
                      {/* <!-- Add a SearchResults component --> */}
                  </div>
              </div>
        </div>
      );
  }
}

export default App;
