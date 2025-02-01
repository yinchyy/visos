const db = require('./database');

async function createEmployee(name, surname, login, password, pesel) {
    try {
        const result = await db.one(`
            WITH salt_gen AS (SELECT gen_salt('bf') AS salt_value)
            INSERT INTO employee (name, surname, login, password, pesel, salt)
            SELECT $1, $2, $3, crypt($4, salt_value), $5, salt_value
            FROM salt_gen
            ON CONFLICT (login) DO NOTHING
            RETURNING login, name, surname;`,
            [name, surname, login, password, pesel]
        );
        return result;
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
