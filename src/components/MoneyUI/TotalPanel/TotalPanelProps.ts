import { ITransaction } from "reducers/moneyReducer";

export interface ITotalPanelProps {
    balance: number;
    income: Array<ITransaction>;
    outgo: Array<ITransaction>;
}
