import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const PeopleList = (props) => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const peopleList = props.people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((people) => {
        const friends = people.friends.map((item) => {
            return item.name
        }).join(', ')
        return (
            <TableRow key={people._id}>
                <TableCell component="th" scope="row">
                    {people.name}
                </TableCell>
                <TableCell align="right">{people.balance}</TableCell>
                <TableCell align="right">{people.email}</TableCell>
                <TableCell align="right">{people.phone}</TableCell>
                <TableCell align="right">{friends}</TableCell>
                <TableCell align="right">{people.isActive}</TableCell>
            </TableRow>
        )
    })

    return (
        <div>
            <TableContainer>
                <Table size = "medium" stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Balance</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Friends</TableCell>
                            <TableCell align="right">Active</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {peopleList}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.people.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default PeopleList;
