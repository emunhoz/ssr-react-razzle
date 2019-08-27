import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increase, decrease } from '../../store/ducks/counter'
import Button from '../../components/Button'

const Home = ({ increase, decrease, count }) => {
  return (
    <React.Fragment>
      <h1>Home page</h1>
      <h3>Value from redux => {count}</h3>
      {count !== 0 && (
        <div>
          <Button onClick={() => increase()}>+ Add value</Button>
          <Button onClick={() => decrease()}>- Decrease value</Button>
        </div>
      )}
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increase, decrease }, dispatch)
const mapStateToProps = ({ counter: { count } }) => ({ count })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
