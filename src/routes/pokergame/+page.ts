// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

// import { fethUserByPk } from '$lib/graphql/queries/fethUserByPk.query';

// export const load  = async (/* { params } */) => {
// 	try {
// 		const user: any = await fethUserByPk('f192b78e-399e-4fc5-9676-ce0bf65b220b');

// 		console.log('user', user);

// 		return {
// 			status: 200,
// 			props: {
// 				user
// 			}
// 		};
// 	} catch (e) {
// 		alert(e);
// 		return;
// 	}
// };

export {};
