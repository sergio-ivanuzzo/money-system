import { AnyAction } from "redux";

import { IPromiseMethod } from "helpers";

export enum MoneyActionType {
    MONEY_DATA_FETCH = "MONEY_DATA_FETCH",
    MONEY_DATA_FETCH_COMPLETE = "MONEY_DATA_FETCH_COMPLETE",
    MONEY_INCOME = "MONEY_INCOME",
    MONEY_INCOME_COMPLETE = "MONEY_INCOME_COMPLETE",
    MONEY_OUTGO = "MONEY_OUTGO",
    MONEY_OUTGO_COMPLETE = "MONEY_OUTGO_COMPLETE",
    MONEY_ERROR = "MONEY_ERROR",
}

export interface IMoneyAction {
    readonly Request: {
        type: string;
        payload: any;
        promise: {
            resolve: IPromiseMethod;
            reject: IPromiseMethod;
        }
    }

    readonly Response: {
        payload: any;
    }
}

export interface IMoneyRequestAction extends AnyAction {
    payload: any;
    promise: {
        resolve: IPromiseMethod;
        reject: IPromiseMethod;
    }
}

export interface IMoneyResponseAction extends AnyAction {
    payload: any;
}

export function actionMoneyDataFetch(
    payload: any,
    resolve: IPromiseMethod,
    reject: IPromiseMethod
): AnyAction {
    return <IMoneyRequestAction>{
        payload,
        type: MoneyActionType.MONEY_DATA_FETCH,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionMoneyFetchComplete(payload: any): AnyAction {
    return <IMoneyResponseAction>{
        payload,
        type: MoneyActionType.MONEY_DATA_FETCH_COMPLETE
    }
}

export function actionMoneyAddIncome(
    payload: any,
    resolve: IPromiseMethod,
    reject: IPromiseMethod
): AnyAction {
    return <IMoneyRequestAction>{
        payload,
        type: MoneyActionType.MONEY_INCOME,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionMoneyAddIncomeComplete(payload: any): AnyAction {
    return <IMoneyResponseAction>{
        payload,
        type: MoneyActionType.MONEY_INCOME_COMPLETE
    }
}

export function actionMoneyAddOutgo(
    payload: any,
    resolve: IPromiseMethod,
    reject: IPromiseMethod
): AnyAction {
    return <IMoneyRequestAction>{
        payload,
        type: MoneyActionType.MONEY_OUTGO,
        promise: {
            resolve,
            reject
        }
    }
}

export function actionMoneyAddOutgoComplete(payload: any): AnyAction {
    return <IMoneyResponseAction>{
        payload,
        type: MoneyActionType.MONEY_OUTGO_COMPLETE
    }
}

export function actionMoneyError(error?: Error) {
    return {
        type: MoneyActionType.MONEY_ERROR
    }
}
