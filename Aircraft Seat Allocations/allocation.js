
/*
    A model represent the current state of an aircraft space with
    a seating capacity of 24 with 3 rows and 8 seats in each row.
    A seat is available unless the position appears as unavailable.
 */
let aircraftSpace = [
    ['1a','1b','1c','1d','1e','1f','1g','1h'],
    ['2a','2b','2c','2d','2e','2f','2g','2h'],
    ['3a','3b','3c','3d','3e','3f','3g','3h']
];

/**
 * Allocates the first available seat for Case 1
 * and returns an array of allocatedSpace and aircraftSpace
 *
 * @param row The row to check
 * @param allocatedSpace The allocated seat(s) variable
 * @param aircraftSpace The aircraft space before allocation
 * @returns {*[]} An array of allocatedSpace and aircraftSpace
 */
function allocateForCase1(row,allocatedSpace,aircraftSpace) {
    // loops through the row to allocate the first available seat starting from the edge.
    for (const position in aircraftSpace[row]) {
        if (aircraftSpace[row][position] !== 'unavailable'){
            allocatedSpace = aircraftSpace[0][position]
            aircraftSpace[row][position] = 'unavailable';
            break
        }
    }
    return [allocatedSpace,aircraftSpace];
}

/**
 * Gets the sitting arrangement for people
 * @param seatRequested The number is seat requested by a user
 * @param aircraftSpace The model represent the current state of the aircraft space
 * @returns {*[]} An array of allocatedSpace and aircraftSpace
 */
function getArrangement(seatRequested, aircraftSpace) {
    let allocatedSpace = null; // assumes null space will be allocated

    // switches on the number of seatRequested
    switch (seatRequested) {
        case 4:
            // check if the middle of the first available row are available or 2 on the right and 2 on the left are available then allocates them
            if((aircraftSpace[0][2]!=='unavailable') && (aircraftSpace[0][3]!=='unavailable') && (aircraftSpace!=='unavailable') &&
                (aircraftSpace[0][5]!=='unavailable')){
                allocatedSpace = aircraftSpace[0][2] + ' ' + aircraftSpace[0][3] + ' ' + aircraftSpace[0][4] + ' ' + aircraftSpace[0][5];
                aircraftSpace[0][2] = aircraftSpace[0][3] = aircraftSpace[0][4] =  aircraftSpace[0][5] = 'unavailable';
            }else if((aircraftSpace[0][0]!=='unavailable') && (aircraftSpace[0][1]!=='unavailable') &&
                (aircraftSpace[0][6]!=='unavailable') && (aircraftSpace[0][7]!=='unavailable')){
                allocatedSpace = aircraftSpace[0][0] + ' ' + aircraftSpace[0][1] + ' ' + aircraftSpace[0][6] + ' ' + aircraftSpace[0][7];
                aircraftSpace[0][0] = aircraftSpace[0][1] = aircraftSpace[0][6] =  aircraftSpace[0][7] = 'unavailable';
            }else if((aircraftSpace[1][2]!=='unavailable') && (aircraftSpace[1][3]!=='unavailable') &&
                (aircraftSpace[1][4]!=='unavailable') && (aircraftSpace[1][5]!=='unavailable')){
                allocatedSpace = aircraftSpace[1][2] + ' ' + aircraftSpace[1][3] + ' ' + aircraftSpace[1][4] + ' ' + aircraftSpace[1][5];
                aircraftSpace[1][2] = aircraftSpace[1][3] = aircraftSpace[1][4] =  aircraftSpace[1][5] = 'unavailable';
            }else if((aircraftSpace[1][0]!=='unavailable') && (aircraftSpace[1][1]!=='unavailable') &&
                (aircraftSpace[1][6]!=='unavailable') && (aircraftSpace[1][7]!=='unavailable')){
                allocatedSpace = aircraftSpace[1][0] + ' ' + aircraftSpace[1][1] + ' ' + aircraftSpace[1][6] + ' ' + aircraftSpace[1][7];
                aircraftSpace[1][0] = aircraftSpace[1][1] = aircraftSpace[1][6] =  aircraftSpace[1][7] = 'unavailable';
            }else if((aircraftSpace[2][2]!=='unavailable') && (aircraftSpace[2][3]!=='unavailable') &&
                (aircraftSpace[2][4]!=='unavailable') && (aircraftSpace[2][5]!=='unavailable')){
                allocatedSpace = aircraftSpace[2][2] + ' ' + aircraftSpace[2][3] + ' ' + aircraftSpace[2][4] + ' ' + aircraftSpace[2][5];
                aircraftSpace[2][2] = aircraftSpace[2][3] = aircraftSpace[2][4] =  aircraftSpace[2][5] = 'unavailable';
            }else if((aircraftSpace[2][0]!=='unavailable') && (aircraftSpace[2][1]!=='unavailable') &&
                (aircraftSpace[2][6]!=='unavailable') && (aircraftSpace[2][7]!=='unavailable')){
                allocatedSpace = aircraftSpace[2][0] + ' ' + aircraftSpace[2][1] + ' ' + aircraftSpace[2][6] + ' ' + aircraftSpace[2][7];
                aircraftSpace[2][0] = aircraftSpace[2][1] = aircraftSpace[2][6] =  aircraftSpace[2][7] = 'unavailable';
            }
            break;

        case 3:
            // check if the middle section of the first available row are available then allocates them
            if((aircraftSpace[0][2]!=='unavailable') && (aircraftSpace[0][3]!=='unavailable') && (aircraftSpace[0][4]!=='unavailable')) {
                allocatedSpace = aircraftSpace[0][2] + ' ' + aircraftSpace[0][3] + ' ' + aircraftSpace[0][4];
                aircraftSpace[0][2] = aircraftSpace[0][3] = aircraftSpace[0][4] = 'unavailable';
            }else if((aircraftSpace[1][2]!=='unavailable') && (aircraftSpace[1][3]!=='unavailable') && (aircraftSpace[1][4]!=='unavailable')) {
                allocatedSpace = aircraftSpace[1][2] + ' ' + aircraftSpace[1][3] + ' ' + aircraftSpace[1][4];
                aircraftSpace[1][2] = aircraftSpace[1][3] = aircraftSpace[1][4] = 'unavailable';
            }else if((aircraftSpace[2][2]!=='unavailable') && (aircraftSpace[2][3]!=='unavailable') && (aircraftSpace[2][4]!=='unavailable')) {
                allocatedSpace = aircraftSpace[2][2] + ' ' + aircraftSpace[2][3] + ' ' + aircraftSpace[2][4];
                aircraftSpace[2][2] = aircraftSpace[2][3] = aircraftSpace[2][4] = 'unavailable';
            }
            break;

        case 2:
            // check if the edge seats (2 on the left or right) are available then allocates them
            if((aircraftSpace[0][0]!=='unavailable') && (aircraftSpace[0][1]!=='unavailable')){
                allocatedSpace = aircraftSpace[0][0] + ' ' + aircraftSpace[0][1];
                aircraftSpace[0][0] = aircraftSpace[0][1] = 'unavailable';
            }else if((aircraftSpace[0][6]!=='unavailable') && (aircraftSpace[0][7]!=='unavailable')){
                allocatedSpace = aircraftSpace[0][6] + ' ' + aircraftSpace[0][7];
                aircraftSpace[0][6] = aircraftSpace[0][7] = 'unavailable';
            }else if((aircraftSpace[1][0]!=='unavailable') && (aircraftSpace[1][1]!=='unavailable')){
                allocatedSpace = aircraftSpace[1][0] + ' ' + aircraftSpace[1][1];
                aircraftSpace[1][0] = aircraftSpace[1][1] = 'unavailable';
            }else if((aircraftSpace[1][6]!=='unavailable') && (aircraftSpace[1][7]!=='unavailable')){
                allocatedSpace = aircraftSpace[1][6] + ' ' + aircraftSpace[1][7];
                aircraftSpace[1][6] = aircraftSpace[1][7] = 'unavailable';
            }else if((aircraftSpace[2][0]!=='unavailable') && (aircraftSpace[2][1]!=='unavailable')){
                allocatedSpace = aircraftSpace[2][0] + ' ' + aircraftSpace[2][1];
                aircraftSpace[2][0] = aircraftSpace[2][1] = 'unavailable';
            }else if((aircraftSpace[2][6]!=='unavailable') && (aircraftSpace[2][7]!=='unavailable')){
                allocatedSpace = aircraftSpace[2][6] + ' ' + aircraftSpace[2][7];
                aircraftSpace[2][6] = aircraftSpace[2][7] = 'unavailable';
            }
            break;

        case 1:
            // checks if there is an available seat in each row
            if (aircraftSpace[0].filter(x => x === 'unavailable').length < 8){
                // allocates first available
                [allocatedSpace,aircraftSpace] = allocateForCase1(0,allocatedSpace,aircraftSpace)
            }else if (aircraftSpace[1].filter(x => x === 'unavailable').length < 8){
                // allocates first available
                [allocatedSpace,aircraftSpace] = allocateForCase1(1,allocatedSpace,aircraftSpace)
            }else if (aircraftSpace[2].filter(x => x === 'unavailable').length < 8){
                // allocates first available
                [allocatedSpace,aircraftSpace] = allocateForCase1(2,allocatedSpace,aircraftSpace)
            }
            break;

        default:
            allocatedSpace = null;
    }

    return [allocatedSpace, aircraftSpace];
}

// testing the function getArrangement
output = getArrangement(1,aircraftSpace);
console.log(output[0])