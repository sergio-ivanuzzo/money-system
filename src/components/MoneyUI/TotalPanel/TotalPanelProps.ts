import { WithStyles } from "@material-ui/core";

import { ITransaction } from "reducers/moneyReducer";

export interface ITotalPanelProps extends WithStyles {
    transactions: Array<ITransaction>;
}
