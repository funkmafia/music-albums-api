const Album = require("../schemas/albums");

exports.getAllAlbums = async (request, response) => {
  try {
    const albums = await Album.find();
    response.send(albums);
  } catch (error) {
    response.status(500).send({ error: "Failed to fetch album" });
  }
};

exports.createAlbums = async (request, response) => {
  try {
    const albums = new Album(request.body);
    await albums.save();
    response.send(movie);
  } catch (error) {
    response.status(500).send({ error: "Failed to add album" });
  }
};

exports.updateAlbums = async (request, response) => {
  try {
    const albums = await Album.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    response.send(Movie);
  } catch (error) {
    response.status(500).send({ error: "Failed to update album" });
  }
};

exports.deleteAlbums = async (request, response) => {
  try {
    const albums = await Album.findByIdAndDelete(request.params.id);
    if (!albums) {
      return response.status(400).send({ error: "Album not found" });
    }
    response.send(albums); // send back deleted album
  } catch (error) {
    response.status(500).error({ error: "Failed to delete Album" });
  }
};
