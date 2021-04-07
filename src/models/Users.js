const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
  }, { timestamps: false });

  return users;
};

module.exports = Users;