import React from 'react';
import TextInput from "ui/input/text";
import { BaseInputType } from "interfaces/input"
import SearchIcon from "assets/icons/search.svg";

function SearchInput({ value, placeholder, onChange }: BaseInputType) {
    const rightDecorator = (
        <img
            src={SearchIcon}
            alt="search-icon"
            style={{height: "1.5rem", width: "auto"}}
        />
    )

  return (
    <TextInput
        placeholder={placeholder}
        value={value}
        rightDecorator={rightDecorator}
        onChange={onChange}
    />
  );
}

export default SearchInput;
