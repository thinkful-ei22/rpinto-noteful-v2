'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

//GET all tags 
router.get('/', (req, res, next) => {
  knex.select('tagname')
    .from('tags')
    .then(results => {
      res.json(results);
    })
    .catch(err => next(err));
})

//GET tags by id 
router.get('/:id', (req,res, next) => {
  const id = req.params.id;
  knex
    .select('tags.id', 'tagname')
    .from('tags')
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

//POST insert/create a new tag 

router.post('/', (req, res, next) => {
  const { tagname } = req.body;
  
  /***** Never trust users. Validate input *****/
  if (!tagname) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  const newItem = { tagname };
  console.log(newItem, "check new item here");
  knex.insert(newItem)
    .into('tags')
    .returning(['id', 'tagname'])
    .then((results) => {
      // Uses Array index solution to get first item in results array
      const result = results[0];
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => next(err));
});

//PUT update tag by id
router.put('/:id', (req, res, next) => {
  const id = req.params.id;

  const updateObj = {};
  const updateableFields = ['tagname'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      updateObj[field] = req.body[field];
    }
  });

  /***** Never trust users - validate input *****/
  if (!updateObj.tagname) {
    const err = new Error('Missing `name` in request body');
    err.status = 400;
    return next(err);
  }

  knex 
    .select('tags.id', 'tagname')
    .from('tags')
    .where({
      id: id
    })
    .update(updateObj)
    .returning(['tags.id', 'tagname'])
    .then(results => {
      res.json(results[0])
    })
    .catch(err => {
      next(err);
    });

});

//DELETE tag by id
router.delete('/:id', (req,res,next) => {
  const id = req.params.id;

  knex
    .select('tags.id', 'tagname')
    .from('tags')
    .where({
      id: id
    })
    .delete()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    })
})

module.exports = router;