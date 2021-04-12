import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//import { CONTINENTS } from "../../Api";
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
// Generate Order Data

function preventDefault(event) {
    event.preventDefault();
}


const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3)
    },
    root: {
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
}));

export default function Orders() {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    const [data, setData] = useState([]);



    useEffect(() => {
        fetch(
            "https://disease.sh/v3/covid-19/countries?yesterday=1&twoDaysAgo=0&sort=cases&allowNull=0",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
            .then((response) => response.json())
            .then((data) => {
                const iten = data;
                setData(iten);
                console.log(iten);

            })
            .catch((error) => console.log("error", error));
    }, [setData]);

    return (
        <React.Fragment>
            <h2>Casos confirmados por paises</h2>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>País</TableCell>
                        <TableCell>Total de casos</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.root}>
                        {data.map((itens) => (
                            <TableRow>
                        <TableCell>{itens.country}</TableCell>
                        <TableCell>{itens.cases}</TableCell>
                    </TableRow>
                        ))} 
                        <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Ver mais casos
        </Link>
            </div>
        </React.Fragment >
    );
}