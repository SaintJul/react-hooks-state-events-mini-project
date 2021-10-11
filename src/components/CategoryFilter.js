import React from "react";

function CategoryFilter({category, onSelectedCategory, selectedCategory}) {
  const list = category.map((cat) => {
    const classN = (cat === selectedCategory? "selected": null)
    return (
      <button key = {cat} className ={classN} onClick = {() => onSelectedCategory(cat)} >{cat}</button>
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {list}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
