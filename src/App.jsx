import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import Events from "./Pages/Events/Events";
import TermsAndService from "./Pages/TermsAndService/TermsAndService";
import Footer from "./components/Footer/Footer";

function App() {
	const [loading, setLoading] = useState(true);
	const spinner = document.getElementById("loader");
	if (spinner) {
		setTimeout(() => {
			spinner.style.display = "none";
            setLoading(false)
		}, 700);
	}
	return (
		!loading && (
			<>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact end path="/">
							<HomePage />
						</Route>
						<Route exact path="/events">
							<Events />
						</Route>
						<Route exact path="/tos">
							<TermsAndService />
						</Route>
					</Switch>
					<Footer />
				</div>
			</>
		)
	);
}

export default App;
