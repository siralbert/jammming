import React from 'react';
import '../../reset.css';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

class App extends React.Component {
  render(){
      return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
              <div className="App">
                  <SearchBar />
                  <div className="App-playlist">
                      {/* <!-- Add a Playlist component --> */}
                      <SearchResults />
                  </div>
              </div>
        </div>
      );
  }
}

export default App;
