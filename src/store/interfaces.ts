import { store } from ".";

export type InitalState = {
    squares: Square[];
}

export type Square = {
    color: string;
    id?: string;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;