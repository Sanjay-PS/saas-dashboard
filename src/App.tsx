import ThemeContextProvider from './components/ThemeContextProvider/ThemeContextProvider';
import Base from './layouts/Base/Base';
import Home from './views/Home/Home';
import './App.css'
import Orders from './views/Orders/Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Base />}>
						<Route index element={<Home />} />
						<Route path="default" element={<Home />} />
						<Route path="orders" element={<Orders />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeContextProvider>
	)
}

export default App
