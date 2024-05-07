class TeamsNotFoundException extends Error {
  constructor() {
    super('Relavent team/s did not found');
    this.name = 'teamNotFoundException';
    this.correspondingStatusCode = 404;
  }
}

module.exports = TeamsNotFoundException;