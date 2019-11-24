import * as React from "react";
import { Paper, Theme, withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";

import { ITotalPanelProps } from "components/MoneyUI/TotalPanel/TotalPanelProps";

const styles = (theme: Theme): StyleRules => ({
    panel: {
        background: "snow",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        "&>*": {
            marginRight: theme.spacing(3),
            fontWeight: "bold"
        }
    },
    income: {
        color: "lightgreen"
    },
    outgo: {
        color: "red"
    }
});

class TotalPanel extends React.Component<ITotalPanelProps> {
    public render(): React.ReactNode {
        const { classes } = this.props;
        return (
            <Paper className={classes.panel}>
                <div className={classes.income}>Income: {this.income}</div>
                <div className={classes.outgo}>Outgo: {this.outgo}</div>
                <div>Balance: {this.balance}</div>
            </Paper>
        );
    }

    protected get income() {
        return this.props.transactions.reduce((sum, transaction) => {
            const amount = Number(transaction.amount);
            return (amount >= 0) ? sum + amount : sum;
        }, 0)
    }

    protected get outgo() {
        return this.props.transactions.reduce((sum, transaction) => {
            const amount = Number(transaction.amount);
            return (amount < 0) ? sum + amount : sum;
        }, 0)
    }

    protected get balance() {
        return this.props.transactions.reduce(
            (sum, transaction) => sum += Number(transaction.amount), 0
        );
    }
}

export default withStyles(styles)(TotalPanel);
