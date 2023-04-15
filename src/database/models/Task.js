module.exports = (sequelize, dataTypes) => {
    let alias = "Task";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey :true,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING,
        },
        description: {
            type: dataTypes.STRING,
        },
        done: {
            type: dataTypes.INTEGER,
        },
        
    }

    let config = {
        tableName: "task",
        timestamps:false
        
    }

    const Movie = sequelize.define(alias,cols,config)
    return Movie;

}