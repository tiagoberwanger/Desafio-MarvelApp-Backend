const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, { timestamps: false });

  return users;
};

module.exports = Users;