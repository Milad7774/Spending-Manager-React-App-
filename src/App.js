import NavBar from "./components/NavBar";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Create from "./components/Create";
import View from "./components/View";
import { Toaster } from 'react-hot-toast';

const App = () => {

  return(
    <Router >
    <div>
    <Toaster position="top-right" reverseOrder={false} />
      <div>
      <NavBar/>
      </div>
      <Routes>
        <Route path="/" element = {<Navigate to='/Create' replace/>}/>
        <Route path="/View" element = { <View/> }/>
        <Route path="/Create" element = { <Create/> }/>
      </Routes>
    </div>
    </Router>
  )
}
export default App;