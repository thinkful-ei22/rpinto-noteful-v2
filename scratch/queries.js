'use strict';

// const knex = require('../knex');

// let searchTerm = 'gaga';
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .modify(queryBuilder => {
//     if (searchTerm) {
//       queryBuilder.where('title', 'like', `%${searchTerm}%`);
//     }
//   })
//   .orderBy('notes.id')
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

/* Get Note By Id accepts an ID. It returns the note as an object not an array. */
// let myId = 1001;
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .where({
//     id: myId,
//   })
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });

/* Update Note By Id accepts an ID and an object with the desired updates. 
It returns the updated note as an object */

// let myId = 1001;
// let myObject = {
//   title: "10 reasons JS is so fun!",
//   content: "Idk!"
// }
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
// 	.where({
//     id: myId,
//   })
//   .update(myObject)
//   .then(results => {
//       console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//       console.error(err);
//   });


/* Create a Note accepts an object with the note properties and inserts it in the DB. 
It returns the new note (including the new id) as an object. */

// let myNewNote = {
//   title: "sup world",
//   content: "boop da doop."
// }
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .insert(myNewNote)
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });


/* Delete Note By Id accepts an ID and deletes the note from the DB. */

// // let myId = 1015;
// knex
//   .select('notes.id', 'title', 'content')
//   .from('notes')
//   .where({
//     id: myId,
//   })
//   .delete()
//   .then(results => {
//     console.log(JSON.stringify(results, null, 2));
//   })
//   .catch(err => {
//     console.error(err);
//   });
