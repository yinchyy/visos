// const db = pgp('postgres://postgres:password@localhost:5431/postgres')


const db = require('./database');



db.one('SELECT * from employee AS value')
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

db.one('INSERT INTO employee (name,surname,login,password,pesel) VALUES($1, $2,$3,$4,$5) ON CONFLICT(login) DO NOTHING',["Jan","Kowalik","janeq","test","123123124"])
//,email,phone_no,sex,active,role
.then((data)=>{
    console.log('DATA:',data)
})
.catch((error) => {
    console.log('ERROR:', error)
  })
