import React, { useEffect, useState } from "react";
import { Grid, Paper, Dialog } from "@material-ui/core";
import {
  CardCustom,
  MoveElement,
  CardPlaces,
  IdentificadorLine,
  CustomFlag,
  CustomEditDelete,
  CustomCardCountry,
  CustomCardDown,
  CustomDialog,
} from "./styles";
import LogoEdit from "../../assets/Edit.png";
import LogoDelete from "../../assets/Delete.png";
import apiPost from "../../components/Services/apiPost";
import FormPlaces from "../FormPlaces";

interface ItemPost {
  nomePais: string;
  nomeLocal: string;
  nomeMeta: string;
  flag: string;
  id: number;
}

export default function CenteredGrid() {
  const [posts, setPosts] = useState<any[]>([]);
  const [openEdit, setOpenEdit] = useState(false);
  const [itemSelected, setItemSelected] = useState<ItemPost>();

  const loadPosts = async () => {
    const response = await apiPost.get("/posts");
    setPosts(response.data);
  };

  const deletePost = async (id: number) => {
    await apiPost.delete(`/posts/${id}`);
    await loadPosts();
  };

  const editPost = async (id: number, item: ItemPost) => {
    setOpenEdit(true);
    setItemSelected(item);
  };
  useEffect(() => {
    (async () => {
      await loadPosts();
    })();
  }, []);
  return (
    <CardCustom
      container
      spacing={3}
      alignItems="center"
      justify="space-between"
    >
      {posts.map((item: ItemPost, index) => (
        <Grid item xs={12} sm={6} md={2} key={index}>
          <Paper>
            <CardPlaces>
              <MoveElement
                container
                spacing={1}
                alignItems="flex-start"
                justify="space-between"
              >
                <CustomFlag src={item.flag} alt="logo" />
                <CustomEditDelete>
                  <div onClick={() => editPost(item.id, item)}>
                    <img src={LogoEdit} alt="edit" />
                  </div>
                  <div onClick={() => deletePost(item.id)}>
                    <img src={LogoDelete} alt="delete" />
                  </div>
                </CustomEditDelete>
                <CustomCardCountry>{item.nomePais}</CustomCardCountry>
                <IdentificadorLine />
              </MoveElement>
              <CustomCardDown>
                <div>{`Local: ${item.nomeLocal}`} </div>
                <div>{`Meta: ${item.nomeMeta}`}</div>
              </CustomCardDown>
            </CardPlaces>
          </Paper>
        </Grid>
      ))}
      <Dialog
        open={openEdit}
        fullWidth
        maxWidth="lg"
        onClose={() => setOpenEdit(false)}
      >
        <CustomDialog>
          {itemSelected && (
            <FormPlaces
              edit
              editObj={{
                flag: itemSelected.flag,
                nomeMeta: itemSelected.nomeMeta,
                nomePais: itemSelected.nomePais,
                nomeLocal: itemSelected.nomeLocal,
                id: itemSelected.id,
              }}
            />
          )}
        </CustomDialog>
      </Dialog>
    </CardCustom>
  );
}
