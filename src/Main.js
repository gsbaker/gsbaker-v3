import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Photography from "./Photography";


const Main = () => (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/photography' element={<Photography/>}/>
    </Routes>
);

export default Main