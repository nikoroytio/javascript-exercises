const findTheOldest = function(people) {

    if (!people || people.length === 0) {
        return {};
    }
    
    const currentYear = new Date().getFullYear();

    const oldest = people.reduce((oldest, current) => {
        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const currentDeathYear = current.yearOfDeath || currentYear;

        const oldestAge = oldestDeathYear - oldest.yearOfBirth;
        const currentAge = currentDeathYear - current.yearOfBirth;

        return currentAge > oldestAge ? current : oldest;
        
    });
    
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
