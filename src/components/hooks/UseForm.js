import React, { useState } from 'react'

export const UseForm = (initialState = {}) => {

    const [form, setform] = useState(initialState)

    const handleChange = ({target}) => {
        const {name, value} = target;
        setform( { ...form, [name]: value } )
    }

    const handleReset = () => {
        setform(initialState)
    }

  return {
     handleChange, 
     ...form, 
     handleReset   
    }
  
}
