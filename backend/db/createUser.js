const db = require('./database');

async function createUser(name, email) {
    try {
        const result = await db.one('INSERT INTO users(name, surname, pesel, login, password) VALUES($1, $2) RETURNING *', [name, email]);
        console.log(result);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

db.one('INSERT INTO employee (name,surname,pesel,login,password) VALUES($1, $2,$3,$4,$5) ON CONFLICT(login,pesel) DO NOTHING',["Jan","Kowalik","123123124","janeq","test"])
.then((data)=>{
    console.log('DATA:',data)
})
.catch((error) => {
    console.log('ERROR:', error)
  })

module.exports = { createUser };