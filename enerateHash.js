// Sample bcrypt hashing in JavaScript (Node.js)
const bcrypt = require('bcrypt');
const password = "samplePassword123";
bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log("Password Hash:", hash);
});
