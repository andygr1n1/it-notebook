import { hasuraEndpoint, hasuraEndpointWss } from './../client';
import { gql, request } from 'graphql-request';

export interface IUserByPkResponse {
	id: string;
	coins: number;
	birthday: string;
	email: string;
	name: string;
	phone: string;
}

export const fethUserByPk = async (user_id: string): Promise<IUserByPkResponse | undefined> => {
	console.log('user_id', user_id);
	const query = gql`
		subscription UserByPk {
			heroes_by_pk(id: "${user_id}") {
				id
				coins
				birthday
				email
				name
				phone
			}
		}
	`;

	try {
		const response = await request(hasuraEndpointWss, query);

		return response.heroes_by_pk;
	} catch (e) {
		console.error('fethUserByPk error:', e);
		return;
	}
};
