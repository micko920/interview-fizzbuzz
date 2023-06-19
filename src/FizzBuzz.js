import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default class FizzBuzz extends Component {
  state = {
    count: 1,
    fizzBuzz: '',
  }

  _fizzBuzz = count => {
    if (count % 15 === 0) {
      return 'FizzBuzz'
    } else if (count % 5 === 0) {
      return 'Buzz'
    } else if (count % 3 === 0) {
      return 'Fizz'
    }
    return ''
  }

  _decrement = () => {
    const { count } = this.state
    if (count > 1) {
      const newCount = count - 1
      this.setState({ count: newCount, fizzBuzz: this._fizzBuzz(newCount) })
    }
  }

  _increment = () => {
    const { count } = this.state
    if (count < 100) {
      const newCount = count + 1
      this.setState({ count: newCount, fizzBuzz: this._fizzBuzz(newCount) })
    }
  }

  render() {
    return (
      <Paper
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '8px',
          minHeight: '400px',
          minWidth: '300px',
        }}
      >
        <Typography variant="h2">
          {this.state.fizzBuzz || this.state.count}
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <Button
            onClick={this._decrement}
            color="secondary"
            variant="contained"
          >
            <RemoveIcon />
          </Button>
          <Button onClick={this._increment} color="primary" variant="contained">
            <AddIcon />
          </Button>
        </div>
      </Paper>
    )
  }
}
