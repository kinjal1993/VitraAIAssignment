import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';

const FriendsList = (props) => {

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
                <TableCell>{people.balance}</TableCell>
                <TableCell>{friends}</TableCell>
            </TableRow>
        )
    })

    return (
        <div style={{ marginTop: 20,marginBottom: 20, }}>
            <TableContainer>
                <Table aria-label="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Balance</TableCell>
                            <TableCell>Friends</TableCell>
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

export default FriendsList;
