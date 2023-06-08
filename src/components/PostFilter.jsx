import React from "react";
import MyInput from "./MyInput";
import MySelect from "./MySelect";

const PostFilter = ({setFilter,filter}) => {
  return (
    <div>
      <MyInput
        placeholder="search"
        value={filter.query}
        onChange={(e) => setFilter({...filter,query:e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedsort =>setFilter({...filter,sort:selectedsort}) }
        defaultvalue="Sort"
        options={[
          { value: "title", name: "by title" },
          { value: "body", name: "by body" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
