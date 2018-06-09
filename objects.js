var playlist = {Kanye: "Stronger"}; 

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle}); 
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName; 
  return playlist; 
}

var playlist = { artistName: "songTitle" }; <<< also dont forget the spaces here 

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign( playlist, { [artistName]: songTitle })
}