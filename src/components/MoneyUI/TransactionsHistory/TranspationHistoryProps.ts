import { WithStyles } from "@material-ui/core";

import { ITransaction } from "reducers/moneyReducer";

export interface ITranspationHistoryProps extends WithStyles {
    income: Array<ITransaction>;
    outgo: Array<ITransaction>;
}
