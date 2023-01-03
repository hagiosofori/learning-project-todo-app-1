
CREATE
- [] when provided with all various forms of valid requests to create a todo, the creation happens with a 200 status, and the appropriate response is sent
- [] when provided with all various forms of invalid requests to create a todo, the creation fails with the correct status, and the appropriate response is sent


READ
- [] when a request is made to read todos, and there's todos in the db, then it should return todos
- [] when a request is made to read todos, and there's no todos in the db, then it should return an empty array
- [] when an invalid request is made to read todos, then the request should fail with the appropriate error response
- [ ] pagination support should be working as expected. test for both valid and invalid cases
- [ ] reading should support filtering. test for the various valid and invalid filtering scenarios

UPDATE
- [ ] when a request is made to update a todo whose id doesn't exist, the request should fail with the appropriate error response
- [ ] when a request is made to update a todo whose id exists, the request should succeed with the appropriate response
- [ ] when an invalid request is made, the request should fail with the appropriate error response
- [ ] if there's any parts of the todo that cannot be changed, such as the created date, then attempting to update those parts should result in an appropriate error response
- [ ] support for batch updates. if one item in the batch fails, and the others succeed, then the response should indicate appropriately
  - [ ] we'll need to determine what the best error code is


DELETE
- [ ] when a request is made to delete a todo whose id doesn't exist, the request should fail with the appropriate error response
- [ ] when a valid request is made to delete a todo, then the to do should cease to exist in the db, and the success response should be sent
- [ ] when an invalid request is made to the delete endpoint, then the appropriate failure response should be sent to the client
- [ ] support for batch deletions. if one item in the batch fails, and the others succeed, then the response should indicate appropraitely.
  - [ ] we'll need to determine what the best error code is