import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increase, decrease } from '../../store/ducks/counter'
import Button from '../../components/Button'

const Counter = ({ increase, decrease, count }) => {
  return (
    <React.Fragment>
      <h1>Counter page</h1>
      <h3>Current value from redux => {count}</h3>
      <Button onClick={() => increase()}>+ Add value</Button>
      <Button onClick={() => decrease()}>- Decrease value</Button>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increase, decrease }, dispatch)
const mapStateToProps = ({ counter: { count } }) => ({ count })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
