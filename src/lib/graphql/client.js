import { QueryClient } from '@sveltestack/svelte-query';
export const hasuraEndpoint = 'https://gold-timer-srv.herokuapp.com/v1/graphql';
export const hasuraEndpointWss = 'wss://gold-timer-srv.herokuapp.com/v1/graphql';
export const generateHasuraClient = () => {
    const client = new QueryClient();
    return client;
};
//# sourceMappingURL=client.js.map