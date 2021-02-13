import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const CardCustom = styled(Grid)`
  padding: 60px 30px;
  background: #ffffff;
  width: 100px;
`;

export const MoveElement = styled(Grid)`
  background: #ffffff;
`;

export const CardPlaces = styled(Grid)`
  padding: 26px 15px 40px 16px;
  background: #ffffff;
  border-radius: 7px;
`;

export const IdentificadorLine = styled.div`
  color: #ffffff;
  padding: 0px 20px;
  width: 100%;
  border: 1px solid #ababab;
`;

export const CustomFlag = styled.img`
  color: #ffffff;
  padding: 0px 30px 0px 0px;
  background: #ffffff;
  border-width: thin;
  border-color: transparent;
  height: 25px;
margin-bottom: 15px;
width: 55px;
`;

export const CustomCardCountry = styled(Grid)`
  color: #4f9419;
  padding: 0px 0px 10px 0px;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const CustomEditDelete = styled.div`
  display: inline-grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-gap: 15px;
`;

export const CustomCardDown = styled.div`
  padding: 40px 0px 10px 10px;
  width: 100%;
  display: inline-grid;
  grid-template-line: 1fr 1fr;
  grid-gap: 9px;
  color: #000000;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const CustomDialog = styled.div`
  height: 180px;
padding: 50px;
background-color: white;
`;
