import styled from "styled-components";
import { Grid } from "@material-ui/core";
import InputMask from "react-input-mask";

export const FormCustom = styled(Grid)`
  background: #4f9419;
  padding: 30px 30px 50px 30px;
`;

export const Container = styled.div`
  background: #4f9419;
`;

export const InputCustomPlaces = styled.input`
  padding: 7px;
  width: 100%;
  border-width: thin;
  border-color: transparent;
  border-radius: 7px;
  height: 30px;
  color: #868686;
  outline: none;
 
 // Criar Global Styles
 
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const InputCustomGoal = styled(InputMask)`
  padding: 7px;
  width: 100%;
  border-width: thin;
  border-color: transparent;
  border-radius: 7px;
  height: 30px;
  color: #868686;
  outline: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const ButtonCustom = styled.button`
  padding: 12px 50px 20px 50px;
  margin-top: 20px;
  border-width: thin;
  border-color: transparent;
  border-radius: 7px;
  height: 46px;
  color: #ffffff;
  outline: none;
  background: #006c18;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`;

export const SelectCustom = styled.select`
  padding: 7px;
  border-width: thin;
  border-color: transparent;
  border-radius: 7px;
  height: 46px;
  width: 100%;
  color: #868686;
  outline: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

export const IdentificadorCountry = styled.span`
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
`;

export const IdentificadorPlaces = styled.span`
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
`;

export const IdentificadorGoal = styled.span`
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
`;
