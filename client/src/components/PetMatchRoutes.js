import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLazyQuery, useMutation } from '@apollo/client';
import auth from '../utils/auth'
import { ADD_PET, REMOVE_PET, GET_PROFILE, LOGIN_USER } from '../utils/mutations';
import { useNavigate } from "react-router-dom";

import Home from '../pages/Home';
import Donate from '../pages/Donate';
import Pet from '../pages/Pet';
import Mission from '../pages/Mission';
import Nav from './nav'
import Profile from './profile';
import Login from './login';
import SignUp from './signup';

const PetMatchRoutes = () => {
  const [user, setUser] = useState(auth.getProfile())
  const [pets, setPets] = useState([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  // eslint-disable-next-line
  const [addPet, { petError, petData }] = useMutation(ADD_PET)
  // eslint-disable-next-line
  const [removePet, {removePetError, removePetData }] = useMutation(REMOVE_PET)
  // eslint-disable-next-line
  const [login, { logInerror, LogInUserData }] = useMutation(LOGIN_USER);

  const navigate = useNavigate()

  // eslint-disable-next-line
  const [getPets, { loading, error, data }] = useLazyQuery(GET_PROFILE, {
    variables: { id: user?.data._id  },
  }, [user, pets]);

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/profile')
    }
  }, [shouldRedirect, navigate])

  useEffect(() => {
    async function fetch() {
      const pets = await getPets()
      setPets(pets.data.user.pets)
    }
    if (user) fetch()
  }, [getPets, user])

  useEffect(() => { 
    if (shouldRedirect) {
      navigate('/profile')
      setShouldRedirect(false)
    }
  }, [shouldRedirect, navigate])

  const likePet = async pet => {
    try {
      // eslint-disable-next-line
      const { data, error } = await addPet({
          variables: { 
            name: pet.name,
            type: pet.type,
            image: pet.photos[0].large,
            breed: pet.breeds.primary,
            location: 'Philadelphia, PA',
            description: pet.description,
            link: pet.url,
            petAdoptee: user.data._id
          }
      })
      setPets(prevPets => ([
          ...prevPets,
          data.addPet
      ]))
    } catch (err) {
        console.log(err)
    }
  }

  const removeLikedPet = async (pet) => {
    if (!user) return

    try {
      await removePet({
        variables: {
          pet: pet._id,
        }
      })
      const pets = await getPets()
      console.log(pets.data.user.pets)
      setPets(pets.data.user.pets)
    } catch (err) {
      console.log(err)
    }
  }

  const logInUser = async (formState) => {
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      auth.login(data.login.token);
      setUser(auth.getProfile())
      setShouldRedirect(true)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Nav user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/ourmission" element={<Mission />} />
        <Route path="/profile" element={<Profile user={user} pets={pets} removePet={removeLikedPet} />} />
        <Route path="/pets" element={<Pet pets={pets} likePet={likePet} />}/>
        <Route path="/login" element={<Login logInUser={logInUser} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default PetMatchRoutes