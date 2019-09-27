module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    rg: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.BOOLEAN,
    permission: DataTypes.BOOLEAN,
    user: DataTypes.STRING,
    password: DataTypes.STRING,
    enabled: DataTypes.BOOLEAN,
  });

  Employee.getEmployee = async obj => {
    return await Employee.findOne({where: obj });
  };

  return Employee;
};