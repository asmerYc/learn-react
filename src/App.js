import './App.css';
import  Counter from './Counter'
import TeaSet from './Guest';
import Swipers from './swiper'

function App() {
  return (
    <div className="App">
        <Counter Counter></Counter>
        <TeaSet></TeaSet>
        <Swipers></Swipers>
    </div>
  );
}

export default App;
