import React from "react";
import Grid from "@material-ui/core/Grid";
import { HeaderCustom } from "./styles";
import Logo from "../../assets/logoHeader.png";

export default function CenteredGrid() {

  return (
    <HeaderCustom container spacing={3}>
      <Grid item xs={12}>
        <img src={Logo} alt="logo" />
      </Grid>
    </HeaderCustom>
  );
}
