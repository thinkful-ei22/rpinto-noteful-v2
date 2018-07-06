'use strict'

const express = require('express');
const knex = require('../knex');

const router = express.Router();

//Get All Folders (no search filter needed)
router.get('/', (req, res, next) => {
  knex.select('id', 'name')
    .from('folders')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
});

//Get Folder by id
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  knex
    .select('folders.id', 'name')
    .from('folders')
    .where({
      id: id,
    })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});


//Update Folder 
router.put('/:id', (req, res, next) => {
  const id = req.params.id;

  const updateObj = {};
  const updateableFields = ['name'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  /***** Never trust users - validate input *****/
  if (!updateObj.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex
    .select('folders.id', 'name')
    .from('folders')
    .where({
      id: id
    })
    .update(updateObj)
    .returning(['folders.id','name'])
    .then(results => {
      res.json(results[0])
    })
    .catch(err => {
      next(err);
    });
});

//Create a Folder accepts an object with a name and inserts it in the DB. 
//Returns the new item along the new id.
router.post('/', (req, res, next) => {
  const { name } = req.body;

  const newItem = { name };
  /***** Never trust users - validate input *****/
  if (!newItem.name) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex
  .select('folders.id', 'name')
  .from('folders')
  .insert(newItem)
  .then(results => {
    res.json(results)
  })
  .catch(err => {
    next(err);
  });
});

//Delete folder by ID
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  knex
    .select('folders.id', 'name')
    .from('folders')
    .where({
      id: id
    })
    .delete()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
  });

module.exports = router;