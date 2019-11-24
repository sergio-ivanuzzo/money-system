import { AnyAction } from "redux";

import { MoneyActionType } from "actions/moneyActions";

export interface ITransaction {
    title: string;
    amount: number;
    date: string;
}

export interface IMoneyReducerState {
    transactions: Array<ITransaction>;
}

export const initialState: IMoneyReducerState = {
    transactions: []
};

export const moneyReducer = (state = initialState, action: AnyAction): IMoneyReducerState => {
    switch (action.type) {
        case MoneyActionType.MONEY_DATA_FETCH_COMPLETE: {
            return {
                transactions: action.payload.transactions
            };
        }
        case MoneyActionType.MONEY_TRANSACTION_ADD_COMPLETE: {
            return {
                transactions: [...state.transactions, action.payload]
            };
        }
        default: {
            return state;
        }
    }
};
