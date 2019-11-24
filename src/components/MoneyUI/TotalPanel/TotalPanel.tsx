import * as React from "react";
import { Paper, Theme, withStyles } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";

import { ITotalPanelProps } from "components/MoneyUI/TotalPanel/TotalPanelProps";

const styles = (theme: Theme): StyleRules => ({
    panel: {
        background: "snow"
    },
});

class TotalPanel extends React.Component<ITotalPanelProps> {
    public render(): React.ReactNode {
        const { classes, balance } = this.props;
        return (
            <Paper className={classes.root}>
                <div>Income: {this.income}</div>
                <div>Outgo: {this.outgo}</div>
                <div>Balance: {balance}</div>
            </Paper>
        );
    }

    protected get income() {
        return this.props.transactions.reduce((sum, transaction) => {
            if (transaction.amount >= 0) {
                return sum + transaction.amount;
            }
        }, 0)
    }

    protected get outgo() {
        return this.props.transactions.reduce((sum, transaction) => {
            if (transaction.amount < 0) {
                return sum + transaction.amount;
            }
        }, 0)
    }
}

export default withStyles(styles)(TotalPanel);
