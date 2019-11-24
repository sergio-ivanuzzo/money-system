import * as React from "react";
import { AnyAction, Dispatch } from "redux";
import { connect } from "react-redux";

import { IMoneyContainerChildProps, IMoneyContainerProps } from "./MoneyContainerProps";
import { IStoreState } from "reducers/rootReducer";

import * as MoneyActions from "actions/moneyActions";
import { awaitify, IPromiseMethod } from "helpers";

class MoneyContainer extends React.Component<IMoneyContainerProps> {
    async componentDidMount(): Promise<void> {
        await this.fetchMoneyData(null);
    }

    public render(): React.ReactNode {
        return this.props.children(this.injectedProps);
    }

    protected get injectedProps(): IMoneyContainerChildProps {
        return {
            balance: this.props.balance,
            transactions: this.props.transactions,

            fetchMoneyData: this.fetchMoneyData,
            addTransaction: this.addTransaction,
        }
    };

    protected fetchMoneyData = async (request) => {
        await awaitify((resolve, reject) => this.props.fetchMoneyData(request, resolve, reject));
    };

    protected addTransaction = async (request) => {
        await awaitify((resolve, reject) => this.props.addTransaction(request, resolve, reject));
    };
}

const mapStateToProps = (state: IStoreState) => ({
    balance: state.moneyReducer.balance,
    transactions: state.moneyReducer.transactions,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    fetchMoneyData: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(MoneyActions.actionMoneyDataFetch(request, resolve, reject)),
    addTransaction: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(MoneyActions.actionMoneyAddTransaction(request, resolve, reject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoneyContainer);
