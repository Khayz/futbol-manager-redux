import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../../../store/actions/actionTypes';

const Suplentes = () => {
	const suplentes = useSelector(state => state.suplentes);

	const dispatch = useDispatch();
	const quitarTitular = suplente =>
		dispatch({ type: actionTypes.QUITAR_SUPLENTE, suplente });

	let ListaSuplentes = null;
	if (suplentes) {
		ListaSuplentes = suplentes.map(suplente => (
			<article key={suplente.id} className='suplente'>
				<div>
					<img src={suplente.foto} alt={suplente.nombre} />
					<button onClick={() => quitarTitular(suplente)}>X</button>
				</div>
				<p>{suplente.nombre}</p>
			</article>
		));
	}

	return (
		<section>
			<h2>Suplentes</h2>
			<div className='suplentes'>{ListaSuplentes}</div>
		</section>
	);
};

export default Suplentes;
