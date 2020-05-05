import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const SONG_QUERY = gql`
  {
    songs {
      title
      recordings {
        title
      }
    }
  }
`

const listStyle = {
  listStyle: "none"
};

function SongList() {
    return (
      <div className="songList">
        <Query query={SONG_QUERY}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const songsToRender = data.songs
        
            return (
                <div>
                  {/* <pre>{JSON.stringify(songsToRender, null, 2) }</pre> */}
                  {/* {songsToRender.map(title => (<li>{title}</li>))} */}
                  {songsToRender.map((result, i) => (
                    <ul style={listStyle}>
                      <li key={i}>{i+1}. {result.title}</li>
                    </ul>
                  ))}
                </div>
            )
            }}
        </Query>
      </div>
    );
  }
  
export default SongList;
