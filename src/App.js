
import './App.css';
import PhoneContainer from './components/PhoneContainer';
import TvContainer from './components/tvContainer';
import CommentsContainer from './components/CommentsContainer'
import store from './redux/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PhoneContainer warning="épuisement des stocks"/>
      <TvContainer />
    </div>
    
    <CommentsContainer />
    
    </Provider>
  );
}

export default App;
