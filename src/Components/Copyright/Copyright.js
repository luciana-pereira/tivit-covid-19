import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Desenvolvedoras: "}
        <Link color="inherit" href="https://github.com/edilenefern">
          Edilene Fernandes
        </Link>{", "}
        <Link color="inherit" href="https://github.com/Juliane-C">
          Juliane Cristina
        </Link>{", "}
        <Link color="inherit" href="https://github.com/luciana-pereira">
          Luciana Pereira
        </Link>{", "}
        <Link color="inherit" href="https://github.com/MairaSoares">
          Mairã Soares
        </Link>{", "}
        <Link color="inherit" href="https://github.com/alencartha">
          Thaís Alencar
        </Link>{"."}
      </Typography>
    );
  }

export default Copyright;