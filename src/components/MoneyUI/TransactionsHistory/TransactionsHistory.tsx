import * as React from "react";
import { Container, Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";

import {
    ITranspationHistoryProps
} from "components/MoneyUI/TransactionsHistory/TranspationHistoryProps";
import { ISchemaItem } from "components/DataTable/DataTableProps";
import DataTable from "components/DataTable/DataTable";
import {classes} from "istanbul-lib-coverage";

const styles = (theme: Theme): StyleRules => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        background: 'snow'
    },
    table: {
        minWidth: 650,
    },
    income: {
        color: "lightgreen"
    },
    outgo: {
        color: "red"
    }
});

const TransactionsTableSchema = (
    incomeClassName, outgoClassName
): Array<ISchemaItem> => [{
    title: "Title",
    fieldName: "title"
}, {
    title: "Amount",
    fieldName: "amount",
    cell: (amount) => {
        let className = incomeClassName;
        if (Number(amount) < 0) {
            className = outgoClassName;
        }

        return (
            <div className={className}>{amount}</div>
        );
    }
}, {
    title: "Date",
    fieldName: "date"
}];

class TransactionsHistory extends React.Component<ITranspationHistoryProps> {
    public render(): React.ReactNode {
        const { transactions, classes } = this.props;
        return (
            <Container className={classes.root}>
                <DataTable
                    className={classes.table}
                    data={transactions}
                    schema={this.schema}
                />
            </Container>
        );
    }

    protected get schema() {
        const { classes } = this.props;
        return TransactionsTableSchema(classes.income, classes.outgo);
    }
}

export default withStyles(styles)(TransactionsHistory);
