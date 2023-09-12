## Here is the answers for How would I would apply tables and apis change for the following scenarios. and What tables and api endpoints would I add? also Which tables and api endpoints would need to be updated?

### 1.If a user can create and edit stages for a particular board. For example instead of Open > In Progress > Done if they want the stages of their task board to be Read > Working > Reviewing > Completed

**Board Table:** We might need to add a column to the board table to store the custom stages selected by the user.

**API Endpoints:**
Create Board: The endpoint for creating a board would need to accept the custom stages as input.
Edit Board: We would need a new endpoint to allow users to edit the stages for a board.
Get Board Details: This endpoint should return the custom stages along with other board details.


### 2.If users can comment on tasks

If users can comment on tasks, we need to introduce new tables and endpoints for managing comments.

Tables:

Comment Table: We need to create a table to store comments with fields like comment text, timestamp, and the user who made the comment.
Task-Comment Relationship: Create a relationship between tasks and comments, so that each task can have multiple comments associated with it.
API Endpoints:

Create Comment: An endpoint to allow users to create comments for a specific task.
Edit Comment: An endpoint to edit or delete a comment.
Get Comments for Task: An endpoint to retrieve all comments for a specific task.


### 3.How will you do error handling?

For error handling, we should implement a robust strategy to provide meaningful feedback to users and developers.

Validation Errors: If a user provides invalid data (e.g., creating a board with duplicate name), the API should return appropriate validation error messages.

Authorization Errors: Ensure that users can only edit boards or add comments to tasks that they have the appropriate permissions for. Return 403 Forbidden errors for unauthorized actions.

Not Found Errors: Handle cases where users try to access boards, tasks, or comments that do not exist with 404 Not Found responses.

Internal Server Errors: Catch unexpected errors on the server-side and return 500 Internal Server Error responses with detailed error messages for debugging purposes. Log these errors for future investigation.

Client Errors: Implement client-side error handling to gracefully handle network issues, failed API requests, and unexpected responses.