module.exports = function(sequelize, DataTypes) {
    
    var Filter = sequelize.define("Filter", {
        // Giving the Author model a name of type STRING
        location: DataTypes.STRING,
        price_min: DataTypes.STRING,
        price_max: DataTypes.STRING,
        type: DataTypes.STRING,        
    });

    Filter.associate = function(models) {
       
        Filter.belongsTo(models.User,{
            foreignKey: {
                allownull: false
            }
       });
   
    };
  
    return Filter ;
};