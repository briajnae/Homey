module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      password: DataTypes.STRING
    }); 
        
    User.associate = function(models) {
        User.hasMany(models.Filter, {
            onDelete: "cascade"
        })
    };
    
    return User ;
};