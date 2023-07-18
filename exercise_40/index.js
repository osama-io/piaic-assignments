"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exercise40() {
    function make_album(artist, album_title, num_tracks) {
        let album = {
            artist: artist,
            album_title: album_title
        };
        if (num_tracks !== undefined) {
            album.num_tracks = num_tracks;
        }
        return album;
    }
    // Example usage of the function
    let album1 = make_album('Imagine Dragons', 'Night Visions');
    let album2 = make_album('Ed Sheeran', 'Divide', 12);
    let album3 = make_album('Taylor Swift', '1989', 16);
    console.log(album1);
    console.log(album2);
    console.log(album3);
}
exports.default = exercise40;
