const Category = ({ onCategoryChange }) => {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <select
        className="bg-gray-700 text-white rounded-sm p-1 font-semibold"
        name="products"
        id="products-select"
        onChange={handleChange}
      >
        <option value="">All Products</option>
        <option value="TV">Tv</option>
        <option value="dammsugare">Dammsugare</option>
        <option value="laptop">Laptop</option>
        <option value="mobiltelefoner">Telefoner</option>
      </select>
    </div>
  );
};

export default Category;
