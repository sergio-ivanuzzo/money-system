import { WithStyles } from "@material-ui/core";

import { ITransaction } from "reducers/moneyReducer";

export interface ITotalPanelProps extends WithStyles {
    balance: number;
    transactions: Array<ITransaction>;
}
