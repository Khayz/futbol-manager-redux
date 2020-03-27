import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actionTypes from '../../../store/actions/actionTypes';
import cancha from '../../../cancha.svg';

const Titulares = () => {
	const titulares = useSelector(state => state.titulares);

	const dispatch = useDispatch();
	const quitarTitular = titular =>
		dispatch({ type: actionTypes.QUITAR_TITULAR, titular });

	let ListaTitulares = null;
	if (titulares) {
		ListaTitulares = titulares.map(titular => (
			<article key={titular.id} className='titular'>
				<div>
					<img src={titular.foto} alt={titular.nombre} />
					<button onClick={() => quitarTitular(titular)}>X</button>
				</div>
				<p>{titular.nombre}</p>
			</article>
		));
	}

	return (
		<section>
			<h2>Titulares</h2>
			<div className='cancha'>
				{ListaTitulares}
				<img src={cancha} alt='cancha futbol' />
			</div>
		</section>
	);
};

export default Titulares;
