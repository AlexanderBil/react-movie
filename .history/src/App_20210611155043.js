import {Header} from './layout/Header';
import {Footer} from './layout/Footer';
import {Main} from './layout/Main';

function App() {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
  return (
<>
  <Header/>
  <Main/>
  <Footer/>

</>
  );
}

export default App;
