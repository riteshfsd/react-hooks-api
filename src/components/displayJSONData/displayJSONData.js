// import React from 'react';
// import mockAPIData from './mockAPIData';

// const myData = mockAPIData;
// debugger;
// console.log("mockAPIData",myData);
// function DisplayJSONData() {
//     return(
//         <div>
//         <table>
//         <tr>
//             {myData.map((item, index) => (
//                 <td key={index}>{item.firstName} - {item.lastName}  </td>
//             ))}
//             </tr>
//         </table>
//         </div>
//     )
// }
// export default DisplayJSONData;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import mockAPIData from './mockAPIData';

const myData = mockAPIData;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DisplayJSONData() {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}><strong>JSON Data Type - 1</strong>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
