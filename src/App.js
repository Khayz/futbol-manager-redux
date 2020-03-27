import React from 'react';

import './components/assets/styles/styles.scss';

import Jugadores from './components/Jugadores/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado/EquipoSeleccionado';

function App() {
	return (
		<div className='App'>
			<h1>Futbol Manager</h1>
			<Jugadores />
			<EquipoSeleccionado />
		</div>
	);
}

export default App;
