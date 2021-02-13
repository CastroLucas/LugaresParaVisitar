import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import {
  FormCustom,
  InputCustomPlaces,
  InputCustomGoal,
  ButtonCustom,
  SelectCustom,
  IdentificadorCountry,
  IdentificadorPlaces,
  IdentificadorGoal,
  Container,
} from "./styles";
import api from "../../components/Services/api";
import apiPost from "../../components/Services/apiPost";

interface Item {
  name: string;
  place: string;
  goal: string;
  flag: string;
  id: number;
}

interface PostItem {
  nomePais: string;
  nomeLocal: string;
  nomeMeta: string;
  flag: string;
  id: number;
}

interface IProps {
  edit: boolean;
  editObj: PostItem;
}

const FormPlaces: React.FC<IProps> = ({
  edit = false,
  editObj = {
    nomePais: "",
    nomeLocal: "",
    nomeMeta: "",
    flag: "",
    id: -1,
  },
}: IProps) => {
  const [countryCombo, setCountryCombo] = useState("");
  const [placeText, setPlaceText] = useState("");
  const [goalText, setGoalText] = useState("");
  const [countries, setCountries] = useState<any[]>([]);
  const [flag, setFlag] = useState("");

  const handleChangeGoal = async (event: any) => {
    setGoalText(event.target.value);
  };

  const handleAdicionarClick = async (
    nomePais: string,
    nomeLocal: string,
    nomeMeta: string
  ) => {
    if (edit) {
      await apiPost.put(`/posts/${editObj.id}`, {
        nomePais,
        nomeLocal,
        nomeMeta,
        flag,
      });
    } else {
      await apiPost.post("/posts", {
        nomePais,
        nomeLocal,
        nomeMeta,
        flag,
      });
    }
  };

  async function loadCountries() {
    let response = await api.get("");
    let names = response.data;
    setCountries(names);
  }

  function loadPost() {
    if (edit) {
      setGoalText(editObj.nomeMeta);
      setCountryCombo(editObj.nomePais);
      setPlaceText(editObj.nomeLocal);
      setFlag(editObj.flag);
    }
  }

  useEffect(() => {
    loadCountries();
    loadPost();
  }, []);

  return (
    <Container>
      <FormCustom
        container
        spacing={3}
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item xs={12} sm={12} md={3}>
          <IdentificadorCountry>País </IdentificadorCountry>
          <SelectCustom
            id="demo-simple-select-outlined"
            value={countryCombo}
            onChange={(event) => {
              const item = countries.find(
                (item) => item.name === event.target.value
              );
              setCountryCombo(item.name);
              setFlag(item.flag);
            }}
          >
            <option value="0">Selecione...</option>
            {countries.map((country: Item, index: number) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </SelectCustom>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <IdentificadorPlaces>Local </IdentificadorPlaces>
          <InputCustomPlaces
            value={placeText}
            defaultValue={placeText}
            onChange={(event) => {
              setPlaceText(event.target.value);
            }}
            placeholder="Digite o lugar que deseja conhecer..."
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <IdentificadorGoal>Meta</IdentificadorGoal>
          <InputCustomGoal
            mask="99/9999"
            value={goalText}
            defaultValue={goalText}
            onChange={handleChangeGoal}
            placeholder="Mês/ano"
          />
        </Grid>
        <Grid item container xs={12} sm={12} md={2} justify="center">
          <Grid item>
            <ButtonCustom
              onClick={async () => {
                await handleAdicionarClick(countryCombo, placeText, goalText);
                window.location.reload();
              }}
            >
              Adicionar
            </ButtonCustom>
          </Grid>
        </Grid>
      </FormCustom>
    </Container>
  );
};

export default FormPlaces;
