import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <img src={spinner}
        styles={{width:'200px',margin:'auto',display:'block',position:'absolute',left:'300px',top:'50px'}}
        alt='loading'
        />
    )
}

export default Spinner
