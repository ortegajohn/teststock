module.exports = function(sequelize, DataTypes) {
  var Stocks = sequelize.define("Stocks", {
    ticker: DataTypes.STRING,
    price: DataTypes.FLOAT,
    user_id:DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  return Stocks;
};
