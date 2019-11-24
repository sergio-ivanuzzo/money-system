import * as React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import { TablePagination } from "@material-ui/core";
import TableFooter from "@material-ui/core/TableFooter";

import { uniqkey } from "helpers";
import { IDataTableProps, ISchemaItem } from "components/DataTable/DataTableProps";
import { IDataTableState } from "components/DataTable/DataTableState";

class DataTable extends React.Component<IDataTableProps, IDataTableState> {
    public state: IDataTableState = {
        page: 0,
        rowsPerPage: 5
    };

    public render(): React.ReactNode {
        return (
            <Table className={this.props.className}>
                <TableHead>
                    <TableRow>
                        {this.renderColumns()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.renderRows()}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            count={this.props.data.length}
                            rowsPerPage={this.state.rowsPerPage}
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={this.props.schema.length}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            component="td"
                            page={this.state.page}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }

    protected renderColumns = (): React.ReactNode => {
        const { schema } = this.props;
        return schema.map((item) => (
            <TableCell key={uniqkey()}>
                {item.title}
            </TableCell>
        ));
    };

    protected renderRows = (): Array<React.ReactNode> => {
        const { schema, data } = this.props;
        const { page, rowsPerPage } = this.state;
        return data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item: Object) => {
                return (
                    <TableRow key={uniqkey()}>
                        {schema.map((column) => (
                            <TableCell key={uniqkey()}>
                                {this.renderCell(column, item)}
                            </TableCell>
                        ))}
                    </TableRow>
                );
        });
    };

    protected renderCell = (column: ISchemaItem, item: Object): React.ReactNode => {
        const cellValue = item[column.fieldName];
        if (column.cell) {
            return column.cell(cellValue)
        } else {
            return cellValue;
        }
    };

    protected handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        this.setState({
            ...this.state,
            page: newPage
        })
    };

    protected handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            page: 0,
            rowsPerPage: +event.target.value
        });
    };
}

export default DataTable;
