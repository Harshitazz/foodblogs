import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import FoodBlog from "./components/food-blog";
import Newblog from "./components/Newblog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<FoodBlog/> } />
          <Route exact path="/add" element={<Newblog/> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;