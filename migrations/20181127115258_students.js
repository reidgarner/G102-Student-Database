
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', (student) => {
        student.increments('ID');
        student.string('Name');
        student.string('Favorite Animal');
        student.string('Previous Occupation');
        student.decimal('Hometown Lat');
        student.decimal('Hometown Long');
        student.string('Useless Superpower');
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};
