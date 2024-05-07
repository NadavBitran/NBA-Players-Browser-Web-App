import ServerResultException from "../exceptions/ServerResultException";
import UnexpectedErrorException from "../exceptions/UnexpectedErrorException";

const fetcher = async (url: string, method: string, body?: JSON) =>  
{
    try 
    {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        if (response.ok)
        {
            const data = await response.json();

            return data;
        }
        else
        {
            throw new ServerResultException();
        }
    }
    catch (error) 
    {
        throw new UnexpectedErrorException();
    }

}

export default fetcher;