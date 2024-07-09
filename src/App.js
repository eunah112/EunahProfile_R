import {Route, Routes} from "react-router-dom";
import "./css/App.css";
import "./css/Font.css";
import Home from "./component/pages/Home.jsx";

function App() {
	return (
		<div id='root' className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
