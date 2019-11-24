import * as React from "react";
import { Container, Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";

import {
    ITranspationHistoryProps
} from "components/MoneyUI/TransactionsHistory/TranspationHistoryProps";
import { ISchemaItem } from "components/DataTable/DataTableProps";
import DataTable from "components/DataTable/DataTable";

const styles = (theme: Theme): StyleRules => ({
    root: {
        width: '100%',
        overflowX: 'auto',
        background: 'snow'
    },
    table: {
        minWidth: 650,
    },
});

const TransactionsTableSchema: Array<ISchemaItem> = [{
    title: "Title",
    fieldName: "title"
}, {
    title: "Amount",
    fieldName: "amount"
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
                    schema={TransactionsTableSchema}
                />
            </Container>
        );
    }
}

export default withStyles(styles)(TransactionsHistory);
