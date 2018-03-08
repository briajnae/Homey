module.exports = function(sequelize, DataTypes) {
    var affordableHousing = sequelize.define("Affordable_housing", {
      community_area_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      community_area_number: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      property_type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      zip_code: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      management_company: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      units: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      x_coordinates: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      y_coordinates: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      latitude: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      longitude: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
     
    });
    return affordableHousing;
  };