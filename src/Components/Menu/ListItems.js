import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PublicIcon from '@material-ui/icons/Public';
import AssessmentIcon from '@material-ui/icons/Assessment';

export const mainListItems = (
  <div>
    <ListItem button  component='a' href="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component='a' href="/continent">
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary="Continentes" />
    </ListItem>
    <ListItem button component='a' href="/country">
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary="Países" />
    </ListItem>
    <ListItem button component='a' href="/statistic">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Estatística" />
    </ListItem>
    <ListItem button component='a' href="/report">
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Relatório" />
    </ListItem>
    <ListItem button component='a' href="/integration">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integração" />
    </ListItem>
    <ListItem button component='a' href="/user/register">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opçoes</ListSubheader>
    <ListItem button component='a' href="/">
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>

  </div>
);