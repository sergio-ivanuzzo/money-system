import * as React from "react";

import { IPromiseMethod } from "helpers";
import { ITransaction } from "reducers/moneyReducer";

export interface IMoneyContainerProps {
    balance: number;
    income: Array<ITransaction>;
    outgo: Array<ITransaction>;
    fetchMoneyData: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    addIncome: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    addOutgo: (request: any, resolve: IPromiseMethod, reject: IPromiseMethod) => void;
    children: (injectedProps: any) => React.ReactNode;
}

export interface IMoneyContainerChildProps {
    balance: number;
    income: Array<ITransaction>;
    outgo: Array<ITransaction>;
    fetchMoneyData: (request) => Promise<void>;
    addIncome: (request) => Promise<void>;
    addOutgo: (request) => Promise<void>;
}
