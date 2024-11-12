import logo from './logo.svg';
import './App.css';

import JeuDe from './composants/JeuDe'
function App() {
  return (
    <div>
      <JeuDe cache={5} />
    </div>
  );
}
export default App;
