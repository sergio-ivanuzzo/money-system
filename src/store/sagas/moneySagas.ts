import { call, put, Effect } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { client } from "httpClient/client";
import * as MoneyActions from "actions/moneyActions";
import { IMoneyRequestAction } from "actions/moneyActions";

export function* fetchMoneyData(action: IMoneyRequestAction): IterableIterator<Effect> {
    try {
        let response: AxiosResponse<{data: any}> = yield call(() => client.get("/", {
            params: {
                ...action.payload
            }
        }));

        if (response) {
            toast.success("Money data successfully received!");
            action.promise.resolve();
            return yield put(MoneyActions.actionMoneyFetchComplete(response.data));
        } else {
            action.promise.reject();
            return yield put(MoneyActions.actionMoneyError());
        }
    } catch (e) {
        toast.error(e.toString());
        action.promise.reject();
        return yield put(MoneyActions.actionMoneyError(e));
    }
}

export function* addTransaction(action: IMoneyRequestAction): IterableIterator<Effect> {
    try {
        let response: AxiosResponse<{data: any}> = yield call(
            () => client.post("/transaction/add", action.payload)
        );

        if (response) {
            toast.success("New transaction successfully added!");
            action.promise.resolve();
            return yield put(MoneyActions.actionMoneyAddTransactionComplete(response.data));
        } else {
            action.promise.reject();
            return yield put(MoneyActions.actionMoneyError());
        }
    } catch (e) {
        toast.error(e.toString());
        action.promise.reject();
        return yield put(MoneyActions.actionMoneyError(e));
    }
}
