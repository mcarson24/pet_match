import React, { useEffect, useState } from 'react';
import auth from '../utils/auth'
import { GET_PROFILE, ADD_PET } from '../utils/mutations';
import { useLazyQuery } from '@apollo/client';
import SavedPet from './SavedPet'

import '../styles/profile.css'

function Profile(props) {
    const [pets, setPets] = useState(props.pets)

    const classes = {
        petContainer: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        }
    }

    useEffect(() => { 
        setPets(props.pets)
    }, [props, setPets])

    return(
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="profileHeader">Your Profile</h1>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-6 firstCol'>
                        <h3>{props.user.data.name}</h3>
                        <img className='userPic' src='https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=612x612&w=0&h=kjCAwH5GOC3n3YRTHBaLDsLIuF8P3kkAJc9RvfiYWBY=' alt=''/>
                    </div>
                    <div className='col-4 secondCol'>
                        <h3>Email</h3>
                        <h6>{props.user.data.email}</h6>
                        <h3>Change Password</h3>
                        <h3>Edit Profile</h3>
                        <h3>Settings</h3>
                    </div>
                    <div className='col-10 likesCol'>
                        <h2>Saved Pets</h2>
                        <div style={classes.petContainer}>
                            {pets && pets.map(pet => <SavedPet pet={pet} key={pet._id} removePet={props.removePet} /> )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;