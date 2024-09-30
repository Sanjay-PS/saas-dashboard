import ThemeContextProvider from './components/ThemeContextProvider/ThemeContextProvider';
import Base from './layouts/Base/Base';
import Home from './views/Home/Home';
import Orders from './views/Orders/Orders';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/joy';
import './App.css'
import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => { setLoading(false) }, 2000);
	}, [])

	return (
		<ThemeContextProvider>
			{(loading) ? (
				<Box height={"100vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
					<CircularProgress />
				</Box>
			):(
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Base />}>
							<Route index element={<Home />} />
							<Route path="default" element={<Home />} />
							<Route path="orders" element={<Orders />} />
						</Route>
					</Routes>
				</BrowserRouter>
			)}
		</ThemeContextProvider>
	)
}

export default App
