import { WithStyles } from "@material-ui/core";
import { ITransaction } from "reducers/moneyReducer";

export interface ITransactionFormProps extends WithStyles {
    addIncome: (transaction: ITransaction) => Promise<void>;
    addOutgo: (transaction: ITransaction) => Promise<void>;
}
