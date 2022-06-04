import react, { useEffect } from 'react'
import Button from 'react-bootstrap-button-loader'

const Icon = props => {
  const classes = {
    svg: {
      height: '1em'
    }
  }
  return (
    <Button onClick={() => props.clickHandler()} style={props.classes}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={classes.svg}>
        <path style={ { fill: 'white' } } d={props.d}/>
      </svg>
    </Button>
  )
}

export default Icon