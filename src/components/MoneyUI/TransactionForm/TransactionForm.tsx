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
    ITransactionFormState,
    TransactionType
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
        type: TransactionType.Income,
        title: "",
        amount: 0
    };

    public render(): React.ReactNode {
        const { classes } = this.props;
        return (
            <form autoComplete={"off"} className={classes.form}>
                <div>
                    <FormControl component="div" className={classes.formControl}>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Select
                            labelId="gender"
                            id="gender"
                            value={this.state.type}
                            onChange={this.handleSelectChange("type")}
                            autoComplete="off"
                        >
                            <MenuItem value={TransactionType.Income}>Income</MenuItem>
                            <MenuItem value={TransactionType.Outgo}>Outgo</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div" className={classes.formControl}>
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <Input
                            id="title"
                            autoComplete={"off"}
                            value={this.state.title}
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
                            value={this.state.amount}
                            onChange={this.handleChange("amount")}
                            required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="div" className={classes.formControl}>
                        <Button variant="contained" color="primary" type="submit">
                            Save
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
            ...this.state,
            [fieldName]: value
        });
    };

    protected handleSelectChange = (
        fieldName: string
    ): (event: React.ChangeEvent<{name?: string, value: string}>, child: React.ReactNode) => void => (
        event: React.ChangeEvent<{name?: string, value: string}>,
        child: React.ReactNode
    ) => {
        this.setState({
            ...this.state,
            [fieldName]: event.target.value as string
        })
    };
}

export default withStyles(styles)(TransactionForm);
