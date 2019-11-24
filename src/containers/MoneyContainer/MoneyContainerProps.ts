import * as React from "react";

import { IPromiseMethod } from "helpers";
import { ITransaction } from "reducers/moneyReducer";

export interface IMoneyContainerProps {
    balance: number;
    transactions: Array<ITransaction>;

    fetchMoneyData: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    addTransaction: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;

    children: (injectedProps: any) => React.ReactNode;
}

export interface IMoneyContainerChildProps {
    balance: number;
    transactions: Array<ITransaction>;

    fetchMoneyData: (request) => Promise<void>;
    addTransaction: (request) => Promise<void>;
}
