import { DataTypes, Sequelize } from "sequelize";

//!Defining Task Schema
export const Task = Sequelize.afterDefine("Task", {
  Id: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
    primarykey: true,
    autoIncrement: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  due_Date: {
    type: Date,
    required: true,
  },
  completion_Status: {
    type: String,
    required: true,
  },
});
