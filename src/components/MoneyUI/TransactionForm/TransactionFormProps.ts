import { WithStyles } from "@material-ui/core";
import { ITransaction } from "reducers/moneyReducer";

export interface ITransactionFormProps extends WithStyles {
    addTransaction: (transaction: ITransaction) => Promise<void>;
}
