// Jimmy's attempt at onclick random text
// INDIVIDUAL PLAYLIST FUNCTIONS
function goodVibes() {
    var playlists = [
        '!play PLdVeidowWpZitHbPArtIB-wJiFHZyFUtm', // This one is real
    ];

    return playlists;
}

function newMusic() {
    var playlists = [
        '!play PLdVeidowWpZitHbPArtIB-wJiFHZyFUtm', // INSERT SOME PLAYLIST
    ];

    return playlists;
}

function torghast() {
    var playlists = [
        '!play PLdVeidowWpZitHbPArtIB-wJiFHZyFUtm', // INSERT SOME PLAYLIST
    ];

    return playlists;
}

function sexyTime() {
    var playlists = [
        '!play PLdVeidowWpZitHbPArtIB-wJiFHZyFUtm', // INSERT SOME PLAYLIST
    ];

    return playlists;
}

// ALL PLAYLISTS
function listOfPlaylists() {
    // Use the function for each playlist to make an array of all of them
    var playlists = [
        goodVibes(), 
        newMusic(),  
        torghast(),
        sexyTime() 
    ];
    return playlists;
}

function returnRandomPlaylists() {
    // make a variable that represents some random playlist and then assign it to a random selection from playlists.
    var playlists = listOfPlaylists(); 
    const randomPlaylist = playlists[Math.floor(Math.random() * playlists.length)];
    return randomPlaylist;
}

function copyToClipboard(playlist) {
    // create some html element of textarea
    const el = document.createElement('textarea');
    // set value of html element to value of our random playlists
    el.value = playlist;
    // append this html element to the document body of the page.
    document.body.appendChild(el);
    // select the text on element we just created
    el.select();
    // copy the selected text
    document.execCommand('copy');
    // delete our placeholder element
    document.body.removeChild(el);
    // USER NOW HAS PLAYLIST COPIED TO CLIPBOARD
}
  
function determinePlaylist(button) {
    
    // for each button make one - probably better ways to do this part...
    if (button == 1) {
        var playlist = goodVibes(); 
    }

    if (button == 2) {
        var playlist = newMusic(); 
    }

    if (button == 3) {
        var playlist = torghast(); 
    }

    if (button == 4) {
        var playlist = sexyTime(); 
    }

    if (button == "random") {
        var playlist = returnRandomPlaylists(); 
    }

    // copy our selected playlist to our clipboard
    copyToClipboard(playlist);
}