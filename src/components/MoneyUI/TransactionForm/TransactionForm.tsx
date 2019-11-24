import * as React from "react";
import {
    Button,
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Theme,
    withStyles
} from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";

import {
    ITransactionFormProps
} from "components/MoneyUI/TransactionForm/TransactionFormProps";
import {
    ITransactionFormState
} from "components/MoneyUI/TransactionForm/TransactionFormState";

const styles = (theme: Theme): StyleRules => ({
    form: {
        padding: theme.spacing(2)
    },
    formControl: {
        minWidth: 300
    },
});

class TransactionForm extends React.Component<ITransactionFormProps, ITransactionFormState> {
    public state: ITransactionFormState = {
        transaction: {
            title: "",
            amount: 0,
            date: null
        }
    };

    public render(): React.ReactNode {
        const { classes } = this.props;
        return (
            <form autoComplete={"off"} className={classes.form} onSubmit={this.handleSubmit}>
                <div>
                    <FormControl component="div" className={classes.formControl}>
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <Input
                            id="title"
                            autoComplete={"off"}
                            value={this.state.transaction.title}
                            onChange={this.handleChange("title")}
                            required
                            inputProps={{maxLength: 256}}
                        />
                    </FormControl>
                    <FormControl component="div" className={classes.formControl}>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <Input
                            id="amount"
                            type="number"
                            autoComplete={"off"}
                            value={this.state.transaction.amount}
                            onChange={this.handleChange("amount")}
                            required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div" className={classes.formControl}>
                        <Button variant="contained" color="primary" type="submit">
                            Add
                        </Button>
                    </FormControl>
                </div>
            </form>
        );
    }

    protected handleChange = (
        fieldName: string
    ): (event: React.ChangeEvent) => void => (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        let value = event.currentTarget.value;
        this.setState({
            transaction: {
                ...this.state.transaction,
                [fieldName]: value
            }
        });
    };

    protected handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        const { transaction } = this.state;
        event.preventDefault();
        transaction.date = new Date().toDateString();
        await this.props.addTransaction(transaction);
    }
}

export default withStyles(styles)(TransactionForm);
