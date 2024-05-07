function getCurrentBasketballSeason() 
{
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    if (currentMonth >= 10) 
    {
        return currentYear;
    }
    else 
    {
        return currentYear - 1;
    }
}

module.exports = {
    getCurrentBasketballSeason
};