import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Main} from './layout/Main';
import {Modal} from '../components/Modal';

function App() {
  
  return (
<>
  <Header/>
  <Main/>
  <Footer/>
  <Modal moviespop = {this.state.moviespop} modal = {this.state.modal}/>
</>
  );
}

export default App;
