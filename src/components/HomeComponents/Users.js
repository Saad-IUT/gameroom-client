import React, { Component } from 'react'
import UserCard from '../UserCard'
import { Paper, Grid } from '@material-ui/core'
import { connect } from 'react-redux'

class Users extends Component {
  state = { featuredUsers: [] }
  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.data.users !== this.props.data.users) {
      this.setState({ featuredUsers: this.props.data.users })
    }
  }

  render() {
    // console.log(this.props)
    return (
      <div style={{ paddingBottom: '60px' }}>
        <h2>Top Mentors</h2>
        <hr
          style={{
            // width: '70%',
            // marginLeft: 0,
            height: '2px',
            background: 'black',
          }}
        />
        <Paper elevation={16}>
          <Grid container>
            {this.props.UI.loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {this.state.featuredUsers.map(user => {
                  return (
                    <Grid item key={user.Id}>
                      <UserCard userInfo={user} />
                    </Grid>
                  )
                })}
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

export default connect(mapStateToProps)(Users)
