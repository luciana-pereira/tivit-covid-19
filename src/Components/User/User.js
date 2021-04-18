import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Footer } from "../Footer/Footer";
import MenuAdmin from "../Menu/MenuAdmin";
import TextField from "@material-ui/core/TextField";
import { Paper } from "@material-ui/core";

const UserRegister = () => {
    const useStyles = makeStyles((theme) => ({
    
        root: {
        display: "flex"
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
        },
        container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
        },
        paper: {
        padding: 15,
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
        border: "1px solid gray"
        },
        fixedHeight: {
        height: 445
        }
        }));
        
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuAdmin  title={'Usuários'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className={classes.paper}>
                  <h2>Formulário de Cadastro</h2>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="family-name"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
};
export default UserRegister;
