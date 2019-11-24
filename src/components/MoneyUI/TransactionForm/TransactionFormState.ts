export enum TransactionType {
    Income = 1,
    Outgo = 2
}

export interface ITransactionFormState {
    type: TransactionType;
    title: string;
    amount: number;
}
