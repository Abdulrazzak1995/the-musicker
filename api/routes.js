const express = require('express');
const express = require('./controllers.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'hello from API' });
});

router.get('/artiste',controllers.getArtists);
router.get('/artists/:id',controllers.getArtistById);

// albums ,get
router.get('/albuns',controllers.getAlbums);

//songs ,get
router.get('/songs/',controllers.getAllSongs);
router.get('/songs/:id',controllers.getAllSongsByPlayListId);
router.delete('/songs/:songId/playlists/:playId',controllers.deleteSongByPlayListId);
router.post('/songs/playlists/',controllers.AddSongPlayList);
router.get('/songs/search/:searchSong/',controllers.searchSong);
//PlayList get , get by id

router.get('/playlists',controllers.getPlayLists);
router.get('/playlists/:id',controllers.playListsById);
router.delete('/playlists/:id',controllers.deletePlayList);
router.post('/playlists/',controllers.AddSongPlayList);

module.exports = router;
