import { all, takeEvery, AllEffect } from "redux-saga/effects";

import { MoneyActionType } from "actions/moneyActions";
import {
    fetchMoneyData,
    addTransaction
} from "./moneySagas";

export function* rootSaga(): IterableIterator<AllEffect<any>> {
    yield all([
        takeEvery(MoneyActionType.MONEY_DATA_FETCH, fetchMoneyData),
        takeEvery(MoneyActionType.MONEY_TRANSACTION_ADD, addTransaction)
    ]);
}
