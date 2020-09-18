import React, { Component } from 'react'
import UserCard from '../UserCard'
import { Paper } from '@material-ui/core'
import axios from 'axios'
class Users extends Component {
  state = { featuredUsers: [], loading: true }

  componentDidMount() {
    axios
      .get('/users')
      .then(res => {
        this.setState({
          featuredUsers: res.data,
          loading: false,
        })
      })
      .catch(err => {
        console.error(err.response)
      })
  }
  render() {
    const { loading, featuredUsers } = this.state
    return (
      <div style={{ paddingBottom: '60px' }}>
        <h2>Popular Mentors</h2>
        <hr
          style={{
            height: '2px',
            background: 'black',
          }}
        />
        <Paper elevation={12}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {featuredUsers.length === 0 ? (
                <p>No mentors found</p>
              ) : (
                <>
                  {featuredUsers.map(user => {
                    return <UserCard userInfo={user} />
                  })}
                </>
              )}
            </>
          )}
        </Paper>
      </div>
    )
  }
}

export default Users
