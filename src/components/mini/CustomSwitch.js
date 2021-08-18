import React from 'react'
import Switch from "react-switch"

const CustomSwitch = ({ checked, handleCheckedChange }) => {
    return (
        <>
        <Switch 
            offColor="#000000" 
            onColor="#000000" 
            offHandleColor="#005791"
            onHandleColor="#57F470"	
            onChange={handleCheckedChange} 
            checked={checked}
            uncheckedIcon="" 
            checkedIcon=""
            height={20}
            width={40}
            handleDiameter={18}
        />
        </>
    )
}

export default CustomSwitch
