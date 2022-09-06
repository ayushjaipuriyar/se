import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CreateContainer, Header, MainContainer } from './components';

function App() {
	return (
		<>
			<div className='w-screen h-auto flex flex-col bg-primary'>
				<Header />
				<main className='mt-24 p-8 w-full'>
					<Routes>
						<Route path='/*' element={<MainContainer />} />
						<Route path='/createitem' element={<CreateContainer />} />
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
