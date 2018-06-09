var playlist = {Kanye: "Stronger"}; 

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle}); 
}

function removeFromPlayist(playlist, artistName) {
  return delete playlist.artistName; 
}