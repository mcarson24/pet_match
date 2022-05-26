import React from 'react'

const SavedPet = ({ pet }) => {

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
    }
  }
  return (
    <div>
      <a href={pet.link} style={classes.pet}>
        <img src={pet.image} alt={pet.name} style={classes.petImage} />
        <h3>{pet.name}</h3>
        <h5 style={classes.location}>{pet.location}</h5>  
      </a>
    </div>
  )
 }

export default SavedPet