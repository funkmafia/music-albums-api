const request = require("supertest"); // supertest is the library that lets simulate http requests like get, post, put, delete without the server
const app = require("./index");
const e = require("express");

describe("GET /api/albums", () => {
  it("should return properties within an album, with status 200", async () => {
    // the below sends a get request to the /api/albums endpoints
    const response = await request(app).get("/api/albums");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

    // the line here checks the array, so ensures that it contains at least one album object
    expect(response.body.length).toBeGreaterThan(0);

    // the line below grabs the first album object to validate its schema?
    const album = response.body[0];

    expect(typeof album.artist).toBe("string"); // these check if the info has a string or number
    expect(typeof album.albumTitle).toBe("string");
    expect(typeof album.genre).toBe("string");
    expect(typeof album.releaseYear).toBe("number");
    expect(typeof album.label).toBe("string");
    expect(typeof album.topTrack).toBe("string");
    expect(typeof album.rating).toBe("number");
  });
});

// the goal - using jest and supertest, make sure the endpoints work
// the test block using jests describe() and it() functions, send a request using request(app).get(..)
// use expect() to check IF the response is what we expect
// important - the get/api/albums returns an array of objects and not jst a single album object/ thus the code above using [0] and typeof etc
// above is the get testing, below is post !!!

describe("POST /api/albums", () => {
  it("should create a new album", async () => {
    const newAlbum = {
      artist: "Sade",
      albumTitle: "Love Deluxe",
      genre: "Soul",
      releaseYear: 1992,
      label: "Epic",
      topTrack: "No Ordinary Love",
      rating: 9,
    };

    const response = await request(app).post("/api/albums").send(newAlbum);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("_id"); // MongoDb will return
    expect(response.body.artist).toBe("Sade");
  });
});

// real example instead of placeholder like string due to test - ALWAYS REMEMBER !!
