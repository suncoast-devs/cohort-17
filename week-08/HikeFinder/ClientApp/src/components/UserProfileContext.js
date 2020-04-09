import { createContext, useContext } from 'react'

// Used to setup the provider
export const UserProfileContext = createContext()

// Used to be able to get data from the context
export const useUserProfile = () => useContext(UserProfileContext)
