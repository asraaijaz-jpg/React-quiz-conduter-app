import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Routing from './routing';
import Questions from './questionbank';
import { BrowserRouter, Route, Switch , Link } from 'react-router-dom';

function App() {
  return (

    <Questions/>


    
//       <main>
// <div>
//   <nav> 
//     <ul>
//       <li><Link to="/Home">Home </Link></li>
//       <li> <Link to="/routing">Routing </Link></li>
//       <li> <Link to="/questionbank">Questions Bank</Link> </li>
//       </ul>
//       </nav>
//           </div>
//               <Switch>
//                 <Route path="/Home" component={Home} exact />
//                 <Route path="/routing" component={Routing} />
//                 <Route path="/questionbank" component={Questions} />

//           </Switch>
//       </main>
  )
}



export default App;
