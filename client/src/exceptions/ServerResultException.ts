

class ServerResultException extends Error {
    constructor() 
    {
        super();
        this.message = 'An error occured while retrieving data from the server. Please try again later.'
        this.name = 'ServerResultException';
    }
}

export default ServerResultException;