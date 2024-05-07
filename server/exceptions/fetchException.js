class FetchException extends Error {
    constructor() {
        super("Failed to fetch data");
        this.name = 'fetchException';
        this.correspondingStatusCode = 500;
    }
}

module.exports = FetchException;