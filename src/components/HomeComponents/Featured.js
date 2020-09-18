import React, { Component } from 'react'
import VideoCard from '../VideoCard'
import { Paper, Grid } from '@material-ui/core'
import { connect } from 'react-redux'

class Featured extends Component {
  state = { featuredVideos: [] }
  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.data.videos !== this.props.data.videos) {
      this.setState({ featuredVideos: this.props.data.videos })
    }
  }

  render() {
    const { loading } = this.props.UI
    const { featuredVideos } = this.state
    return (
      <div>
        <h2>Recommended & Featured</h2>
        <hr
          style={{
            width: '70%',
            marginLeft: 0,
            height: '2px',
            background: 'black',
          }}
        />
        <Paper elevation={16}>
          <Grid container>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {featuredVideos.length === 0 ? (
                  <p>No videos found</p>
                ) : (
                  <>
                    {featuredVideos.map(video => {
                      return (
                        <Grid item key={video.Id}>
                          <VideoCard videoInfo={video} />
                        </Grid>
                      )
                    })}
                  </>
                )}
              </>
            )}
          </Grid>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI,
})

export default connect(mapStateToProps)(Featured)
