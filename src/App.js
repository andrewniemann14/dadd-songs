import logo from './logo.svg';
import './App.css';
import {topics} from './data/topics'
import Topic from './components/Topic.js'
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Category />
        {topics[0].topics.map((e) => {
          return (
            <Topic t={e} />
          )
        })}
      </header>
    </div>
  );
}

export default App;
