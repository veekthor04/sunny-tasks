Aircraft Seat Allocations:
     This is a system that allocates seats in a plane. 
Each plane has a seating capacity of 24 with 3 rows and 8 seats
in each row.

Approach:

- Assumptions:
  
    aircraftSpace: I assumed that A model represent the 
    current state of an aircraft space with a seating capacity 
    of 24 with 3 rows and 8 seats in each row. 
    A seat is available unless the position appears as 
    'unavailable'.
    let aircraftSpace = [
        ['1a','1b','1c','1d','1e','1f','1g','1h'],
        ['2a','2b','2c','2d','2e','2f','2g','2h'],
        ['3a','3b','3c','3d','3e','3f','3g','3h']
    ];
     
    seatRequested: This an integer that denotes the number of
    sit to be booked by the user.
  
    Middle section for a row: I assumed that the middle section
    for a row is c,d,e and not d,e,f when 3 seats are requested
    sine the row is even and not odd.

-   Step by step:
    I used a switch statement switch on the number of 
    seat requested.
    for 4,
    the possible seats are:
    '1c','1d','1e','1f',
    '1a','1b','1g','1h'
    '2c','2d','2e','2f'
    '2a','2b','2g','2h'
    '3c','3d','3e','3f'
    '3a','3b','3g','3h'
    I used an if/else statement to check for the first possible
    arrangements provided that none is 'unavailable'
    
    for 3
    the possible seats are:
    '1c','1d','1e',
    '2c','2d','2e',
    '3c','3d','3e',
     I used an if/else statement to check for the first possible
    arrangements provided that none is 'unavailable'
    
    for 2
    the possible seats are:
    '1a','1b',
    '1g','1h',
    '2a','2b',
    '2g','2h',
    '3a','3b',
    '3g','3h',
     I used an if/else statement to check for the first possible
    arrangements provided that none is 'unavailable'
    
    for 1, 
    The first available seat from the left to right and row 1
    to row 3

How to run:

1.  Ensure that node.js is installed in the environment.
2.  Adjust/Edit the aircraftSpace array to desired available
    seats.
3.  Adjust/Edit the list of number seat requested for testing
purpose. 
4.  Navigate to "Aircraft Seat Allocations" directory in 
    terminal and run "node allocation.js"