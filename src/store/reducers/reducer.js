import * as actionTypes from '../actions/actionTypes';

const initialState = {
	jugadores: [
		{
			id: 1,
			nombre: 'Juan Carlitos',
			foto:
				'https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg'
		},
		{
			id: 2,
			nombre: 'Beto Quiroga',
			foto:
				'https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg'
		},
		{
			id: 3,
			nombre: 'Alejo Garcia',
			foto:
				'https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg'
		},
		{
			id: 4,
			nombre: 'Juan Disain',
			foto:
				'https://api.ed.team/files/avatars/695b4af3-3cee-4c2f-a165-b329f926b9d3.jpg'
		},
		{
			id: 5,
			nombre: 'Alvaro Felipe',
			foto:
				'https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/alvaro.jpg?itok=08DTxTR9'
		},
		{
			id: 6,
			nombre: 'Alexys Lozada',
			foto:
				'https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-09/tioalexys.jpg?itok=X6xIi4DI'
		},
		{
			id: 7,
			nombre: 'Harold Pajuelo',
			foto:
				'https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2017-11/2017-11-16_17h25_03.png?itok=FrcROCNv'
		},
		{
			id: 8,
			nombre: 'Manu Rodriguez',
			foto:
				'https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-08/manu-foto.jpg?itok=4HvdRLS7ceived_1693673130717610.jpeg?itok=ey6dQlly'
		},
		{
			id: 9,
			nombre: 'AlejoRodríguez',
			foto:
				'https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/2018-02/IMG-20180202-WA0001.jpg?itok=TIRhGBIM'
		},
		{
			id: 10,
			nombre: 'Andrés Muquinche',
			foto:
				'https://api.ed.team/files/avatars/33f02168-6547-4520-bada-6302388d5880.jpg'
		},
		{
			id: 11,
			nombre: 'Ricardo Otero',
			foto:
				'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-05/ricardo%20%28FILEminimizer%29.png'
		},
		{
			id: 12,
			nombre: 'Deivis Rivera',
			foto:
				'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-05/deivis.jpg'
		},
		{
			id: 13,
			nombre: 'Percy Tuncar',
			foto:
				'https://api.ed.team/files/avatars/b0801e8a-8bf0-442f-b2ef-0ddaf6ee7aef.png'
		}
	],
	titulares: [],
	suplentes: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AGREGAR_TITULAR:
			return {
				...state,
				titulares: [...state.titulares, action.titular],
				jugadores: state.jugadores.filter(
					jugador => jugador.id !== action.titular.id
				)
			};

		case actionTypes.AGREGAR_SUPLENTE:
			return {
				...state,
				suplentes: [...state.suplentes, action.suplente],
				jugadores: state.jugadores.filter(
					jugador => jugador.id !== action.suplente.id
				)
			};

		case actionTypes.QUITAR_TITULAR:
			return {
				...state,
				titulares: state.titulares.filter(
					titular => titular.id !== action.titular.id
				),
				jugadores: [...state.jugadores, action.titular]
			};

		case actionTypes.QUITAR_SUPLENTE:
			return {
				...state,
				suplentes: state.suplentes.filter(
					suplente => suplente.id !== action.suplente.id
				),
				jugadores: [...state.jugadores, action.suplente]
			};

		default:
			return state;
	}
};

export default reducer;
