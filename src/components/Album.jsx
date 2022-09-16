import React from "react";
import Song from "./Song";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getAlbumAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  album: state.specificAlbumArray.album,
  songs: state.specificAlbumArray.content,
  albumError: state.specificAlbumArray.isError,
  jobsLoading: state.specificAlbumArray.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbum: (albumToAdd) => {
    dispatch(getAlbumAction(albumToAdd));
  },
});

class Album extends React.Component {
 

  componentDidMount = async () => {
    let albumId = this.props.match.params.id;
    this.props.getAlbum(albumId);
    
  };

  render() {
    return (
      <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>
        <Row>
          {this.props.album.cover && (
            <div className="col-md-3 pt-5 text-center" id="img-container">
              <img
                src={this.props.album.cover}
                className="card-img img-fluid"
                alt="Album"
              />
              <div className="mt-4 text-center">
                <p className="album-title">{this.props.album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">
                  {this.props.album.artist ? this.props.album.artist.name : ""}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </div>
          )}
          <div className="col-md-8 p-5">
            <Row>
              <div className="col-md-10 mb-5" id="trackList">
                {this.props.songs.map((song) => (
                  <Song track={song} key={song.id} />
                ))}
              </div>
            </Row>
          </div>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
