import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../store/interfaces';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;