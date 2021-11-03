const products = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Products",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {}
  );
  return Products
};

module.exports = products;
