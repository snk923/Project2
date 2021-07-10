module.exports = function (sequelize, DataTypes) {
    const trip = sequelize.define('trip', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      destinationName: {
          type: DataTypes.STRING
      },
      description: {
          type: DataTypes.TEXT
      },
    });
    trip.associate = function (models) {
        trip.hasMany(models.recommendation, {
      as: 'recommendation'
        });
      };
    return trip;
  };
