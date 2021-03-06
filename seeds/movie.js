exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movie")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movie").insert([
        { id: 1, name: "Avengers: Endgame" },
        { id: 2, name: "1921" },
        { id: 3, name: "96" },
        { id: 4, name: "118" },
        { id: 5, name: "1922" },
        { id: 6, name: "Black Panther" },
        { id: 7, name: "Big Hero 6" },
        { id: 8, name: "The Lion King" },
        { id: 9, name: "Toy Story" }
      ]);
    });
};
