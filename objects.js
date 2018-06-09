var playlist = {Kanye: "Stronger"}; 

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle}); 
}