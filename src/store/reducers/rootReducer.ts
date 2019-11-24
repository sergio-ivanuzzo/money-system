import { combineReducers } from "redux";

import { IMoneyReducerState, moneyReducer } from "./moneyReducer";

export interface IStoreState {
    moneyReducer: IMoneyReducerState;
}

export const rootReducer = combineReducers<IStoreState>({
    moneyReducer
});
