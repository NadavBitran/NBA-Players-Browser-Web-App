class UnexpectedErrorException extends Error {
    constructor() {
        super();
        this.message = "Whoops! An unexpected error occured. Please try again later."
        this.name = "UnexpectedErrorException";
    }
}

export default UnexpectedErrorException;