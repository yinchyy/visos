const db = require('./database');

async function createEmployee(name, surname, login, password, pesel) {
    try {
        // const result = await db.one('INSERT INTO users(name, surname, pesel, login, password) VALUES($1, $2) RETURNING *', [name, email]);
        const result = await db.one('INSERT INTO employee (name,surname,login,password,pesel) VALUES($1, $2,$3,$4,$5) ON CONFLICT(login) DO NOTHING',[name, surname, login, password, pesel])
        console.log(result);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

async function getAllEmployees() {
    try {
        const result = await db.any('SELECT * FROM employee');
        console.log(result);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

async function findEmployeeByLogin(login) {
    try {
        const result = await db.oneOrNone(`SELECT * FROM employee WHERE login = $1`, [login]);
        // console.log(result);
        return result
    } catch (error) {
        console.error('Error finding user:', error);
    }
}


module.exports = { createEmployee, getAllEmployees, findEmployeeByLogin };