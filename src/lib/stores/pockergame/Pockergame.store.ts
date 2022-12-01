import { writable, type Writable } from 'svelte/store';

export interface IEstimationCard {
	name: string;
	estimation: number;
	user_id: string;
}

export const pokerEstimationCards: Writable<IEstimationCard[]> = writable([]);
export const reveal_cards: Writable<boolean> = writable(false);
