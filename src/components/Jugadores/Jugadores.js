import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../../store/actions/actionTypes';

const Jugadores = () => {
	const jugadores = useSelector(state => state.jugadores);

	const dispatch = useDispatch();
	const agregarTitular = titular =>
		dispatch({ type: actionTypes.AGREGAR_TITULAR, titular });
	const agregarSuplente = suplente =>
		dispatch({ type: actionTypes.AGREGAR_SUPLENTE, suplente });

	let ListaJugadores = null;
	if (jugadores) {
		ListaJugadores = jugadores.map(jugador => (
			<article key={jugador.id} className='jugador'>
				<img src={jugador.foto} alt={jugador.nombre} />
				<h3>{jugador.nombre}</h3>
				<div>
					<button onClick={() => agregarTitular(jugador)}>Titular</button>
					<button onClick={() => agregarSuplente(jugador)}>Suplente</button>
				</div>
			</article>
		));
	}

	return (
		<section>
			<h2>Jugadores</h2>
			<div className='container-players'>{ListaJugadores}</div>
		</section>
	);
};

export default Jugadores;
