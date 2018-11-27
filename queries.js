const db = require('./database-connection')

module.exports = {
    getAll() {
        return db.select().from('students')
    }
}