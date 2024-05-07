class PlayersNotFoundException extends Error {
    constructor() {
        super("The relevant player/s did not found");
        this.name = "PlayerNotFoundException";
        this.correspondingStatusCode = 404;
    }
}

module.exports = PlayersNotFoundException;