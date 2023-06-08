import React from "react";

const MySelect = ({options,defaultvalue,value,onChange}) => {

  return (
    <div>
      <select 
      value={value}
      onChange = {(e)=>onChange(e.target.value)}
      >
        <option disabled>{defaultvalue}</option>
        {
            options.map(option =>
                    <option key={option.value} value ={option.value}>{option.name}</option>
            )
        }
      </select>
    </div>
  );
};

export default MySelect;
