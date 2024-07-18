import { createAction } from '@reduxjs/toolkit';
import { Square } from './interfaces';

export const addSquare = createAction<Square>('squares/addSquare');

export const deleteSquare = createAction('squares/deleteSquare');

