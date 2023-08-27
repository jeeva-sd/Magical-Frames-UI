# Movie Collection Website API Documentation

Welcome to the API documentation for the Movie Collection Website. This API provides endpoints to manage movies in your collection.

## Base URL

The base URL for all API endpoints is: `https://magical-frames-api.onrender.com/`

## Endpoints

### Get All Movies

- **Endpoint**: `/movie/list`
- **Method**: GET
- **Description**: Get a list of all movies in the collection.
- **Response**: Array of movie objects.

### Add a New Movie

- **Endpoint**: `/movie/add`
- **Method**: POST
- **Description**: Add a new movie to the collection.
- **Request Body**: Movie object with properties such as `title`, `genre`, `imdbrating`, `released`, etc.
- **Response**: Newly added movie object.

### Add Multiple Movies in Bulk

- **Endpoint**: `/movie/bulk/add`
- **Method**: POST
- **Description**: Add multiple movies to the collection in bulk.
- **Request Body**: Array of movie objects.
- **Response**: Array of newly added movie objects.

### Edit an Existing Movie

- **Endpoint**: `/movie/edit/:id`
- **Method**: PUT
- **Description**: Edit an existing movie in the collection by its ID.
- **Request Parameters**: `id` - The ID of the movie to be edited.
- **Request Body**: Updated movie object.
- **Response**: Updated movie object.

### Delete a Movie

- **Endpoint**: `/movie/delete/:id`
- **Method**: DELETE
- **Description**: Delete a movie from the collection by its ID.
- **Request Parameters**: `id` - The ID of the movie to be deleted.
- **Response**: Success message.

### Delete All Movies in Bulk

- **Endpoint**: `/movie/bulk/delete`
- **Method**: DELETE
- **Description**: Delete all movies from the collection in bulk.
- **Response**: Success message.

## Example Usage

Here's how you can use the API endpoints:

GET /movie/list
POST /movie/add
POST /movie/bulk/add
PUT /movie/edit/:id
DELETE /movie/delete/:id
DELETE /movie/bulk/delete
