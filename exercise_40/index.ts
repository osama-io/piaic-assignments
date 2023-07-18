
export default function exercise40 (): void {

    function make_album(artist: string, album_title: string, num_tracks?: number):
 { artist: string; album_title: string; num_tracks?: number } {
    let album: { artist: string; album_title: string; num_tracks?: number } = {
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

    
       