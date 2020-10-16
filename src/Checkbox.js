import React from 'react';

const CheckBox =({checked, onChange}) =>{
    return(
        <>
            <input
                type="checkbox"
                style={{height:20,width:30}}
                checked={checked}
                onChange={onChange
                }
              />
        </>
    )
}
export default CheckBox;