
exports.up = function(knex) {
    return knex.schema.createTable("cars", table => {
        table.increments()
        table.text("car_vin", 128).unique().notNullable()
        table.text("car_make", 128).notNullable()
        table.text("car_model", 128).notNullable()
        table.int("car_mileage").notNullable()
        table.text("car_title", 128)
        table.text("car_transmission", 128)
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
}