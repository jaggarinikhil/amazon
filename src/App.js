
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utilits/appstore';

function App() {
  
 
 return(
  <div>
  
  <Provider store={appStore}>
  <Body></Body>
  </Provider>
</div>
 )
  
}

export default App;
