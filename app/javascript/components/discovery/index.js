import React, { Fragment, useEffect, useState } from "react";
import Album from "../common/album";
import { Heading, Columns } from "react-bulma-components";
import AlbumService from "../../services/albums";
import styled from "styled-components";

const DivVSpaced = styled.div`
  margin-top: 50px;
`;

const Discovery = () => {
  const [recent_albums, setRecentAlbums] = useState([]);
  const [recommended_albums, setRecommendedAlbums] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumService.index();
    setRecentAlbums(response.data["recent_albums"]);
    setRecommendedAlbums(response.data["recommended_albums"]);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  let recent_albums_components = [];
  if (recent_albums) {
    recent_albums_components = recent_albums.map((album, key) => (
      <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
        <Album
          artist_name={album.artist_name}
          title={album.title}
          cover_url={album.cover_url}
          id={key}
        />
      </Columns.Column>
    ));  
  }

  const recommended_albums_components = recommended_albums.map((album, key) => (
    <Columns.Column desktop={{ size: 3 }} mobile={{ size: 6 }} key={key}>
      <Album
        artist_name={album.artist_name}
        title={album.title}
        cover_url={album.cover_url}
        id={key}
      />
    </Columns.Column>
  ));

  return (
    <Fragment>
      {recent_albums_components.length > 0 && (
        <div>
             
          <Heading className="has-text-white" size={4}>
                Tocadas recentemente    
          </Heading>
             
          <Columns className="is-mobile">
                {recent_albums_components}   
          </Columns>
           
        </div>
      )}
      ​
      {recommended_albums_components.length > 0 && (
        <DivVSpaced>
             
          <Heading className="has-text-white" size={4}>
                Recomendadas    
          </Heading>
             
          <Columns className="is-mobile">
                {recommended_albums_components}   
          </Columns>
           
        </DivVSpaced>
      )}
    </Fragment>
  );
};
export default Discovery;
