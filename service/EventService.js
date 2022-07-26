'use strict';


/**
 * Add a new event to the DB
 *
 * body Event Event object that needs to be added to the DB
 * no response value expected for this operation
 **/
exports.addEvent = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a event
 *
 * eventId Long event id to delete
 * no response value expected for this operation
 **/
exports.deleteEvent = function(eventId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find event by ID
 * Returns a single event
 *
 * eventId Long ID of pet to return
 * returns Event
 **/
exports.getEventById = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get list of all events
 *
 * returns Event
 **/
exports.getEvents = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing event
 *
 * eventId String name that need to be updated
 * body Event Updated event object
 * no response value expected for this operation
 **/
exports.updateEvent = function(eventId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

