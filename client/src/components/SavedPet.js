import React from 'react'
import Icon from './icon'

const SavedPet = ({ pet, removePet }) => {

  const classes = {
    pet: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '1em',
      backgroundColor: 'rgb(228 228 231)',
      borderRadius: '1em',
      textDecoration: 'none',
      color: 'black'
    },
    petImage: {
      height: '250px',
      borderRadius: '1em 1em 0 0'
    }, 
    location: {
      color: 'rgb(113 113 122)',
    },
    container: {
      position: 'relative'
    },
    button: {
      position: 'absolute',
      right: '-5px'
    }
  }

  return (
    <div style={classes.container}>
      <Icon clickHandler={() => removePet(pet)} d="m10 8.586-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414z" 
            classes={classes.button}
      />
      <a href={pet.link} style={classes.pet}>
        <img src={pet.image} alt={pet.name} style={classes.petImage} />
        <h3>{pet.name}</h3>
        <h5 style={classes.location}>{pet.location}</h5>  
      </a>
    </div>
  )
 }

export default SavedPet