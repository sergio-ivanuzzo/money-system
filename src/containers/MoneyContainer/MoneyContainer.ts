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
            income: this.props.income,
            outgo: this.props.outgo,
            fetchMoneyData: this.fetchMoneyData,
            addIncome: this.addIncome,
            addOutgo: this.addOutgo
        }
    };

    protected fetchMoneyData = async (request) => {
        await awaitify((resolve, reject) => this.props.fetchMoneyData(request, resolve, reject));
    };

    protected addIncome = async (request) => {
        await awaitify((resolve, reject) => this.props.addIncome(request, resolve, reject));
    };

    protected addOutgo = async (request) => {
        await awaitify((resolve, reject) => this.props.addOutgo(request, resolve, reject));
    };
}

const mapStateToProps = (state: IStoreState) => ({
    balance: state.moneyReducer.balance,
    income: state.moneyReducer.income,
    outgo: state.moneyReducer.outgo
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    fetchMoneyData: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(MoneyActions.actionMoneyDataFetch(request, resolve, reject)),
    addIncome: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(MoneyActions.actionMoneyAddIncome(request, resolve, reject)),
    addOutgo: (
        request,
        resolve: IPromiseMethod,
        reject: IPromiseMethod
    ) => dispatch(MoneyActions.actionMoneyAddOutgo(request, resolve, reject))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoneyContainer);
