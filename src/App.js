import {BrowserRouter, Routes, Route} from "react-router-dom";
import GeneralLayout from "./layouts/GeneralLayout";
import BmiCalc from "./components/BMICalc/BmiCalc";
import Home from "./components/home/Home";

function App() {
    return (
        <BrowserRouter>
            <GeneralLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bmi-calc" element={<BmiCalc />} />
                </Routes>
            </GeneralLayout>
        </BrowserRouter>
    );
}

export default App;
