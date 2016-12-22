export const filterCollection = (filterValue, collection) => {

    if (filterValue !== '') {
        return collection.filter(element => {

            return String(element).toLowerCase().includes(filterValue.toLowerCase());

        });
    }

    return collection;

};


export const compareElements=(a,b) =>{

    if (a > b) {

        return -1;

    } else if (a < b) {

        return 1;

    }
    return 0;


};


export const sortCollection =(collection) =>{


    collection.sort((a,b) => {

        return compareElements(a,b)

        })

    return collection;

};
