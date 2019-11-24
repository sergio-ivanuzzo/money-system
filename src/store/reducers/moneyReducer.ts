import { AnyAction } from "redux";

import { MoneyActionType } from "actions/moneyActions";

export interface ITransaction {
    title: string;
    amount: number;
    date: string;
}

export interface IMoneyReducerState {
    balance: number;
    income: Array<ITransaction>;
    outgo: Array<ITransaction>;
}

export const initialState: IMoneyReducerState = {
    balance: 0,
    income: [],
    outgo: []
};

export const moneyReducer = (state = initialState, action: AnyAction): IMoneyReducerState => {
    switch (action.type) {
        case MoneyActionType.MONEY_DATA_FETCH_COMPLETE: {
            return {
                balance: action.payload.balance,
                income: action.payload.income,
                outgo: action.payload.outgo
            };
        }
        case MoneyActionType.MONEY_INCOME_COMPLETE: {
            return {
                ...state,
                income: [...state.income, action.payload]
            };
        }
        case MoneyActionType.MONEY_OUTGO_COMPLETE: {
            return {
                ...state,
                outgo: [...state.outgo, action.payload]
            };
        }
        default: {
            return state;
        }
    }
};
