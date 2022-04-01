import { Grid } from "@mui/material";
import ItemIcon from "../../components/IconServicesFooter";

import bolsita from "../../assets/icons/icon-compras-seguras.svg";
import tarjeta from "../../assets/icons/icon-multiples-medios-pago.svg";
import medalla from "../../assets/icons/icon-calidad-garantizada.svg";
import cajita from "../../assets/icons/icon-envios-todo-elpais.svg";

const Services = () => {
  return (
    <>
      <Grid container
        pr={4}
        position="static"
        direction="row"
        justifyContent="space-around"
        sx={{
          margin: 0,
          width: "100%",
          height: "123px",
          backgroundColor: "lightBlueSeparator.opacity",
        }}
      >
        <ItemIcon icon={bolsita} text="Compras seguras" />
        <ItemIcon icon={tarjeta} text="Múltiples medios de pago" />
        <ItemIcon icon={medalla} text="Calidad Garantizada" />
        <ItemIcon icon={cajita} text="Enviós a Todo el país" />
      </Grid>
    </>
  );
};

export default Services;
