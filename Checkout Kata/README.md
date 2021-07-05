Checkout Kata:
     This is a process for a supermarket checkout that calculates 
the total price of items added in the cart by a customer

Approach:

- Assumptions:
  
     pricings: I assumed that there will be a list of objects
     for the items available in the store. Each object has a name,
     unit price and special price. The unit price is the price 
     for one item, the special is an array where the first value
     is quantity to be bought for a reduced price. It cannot be 
     less than 1. The second item in the array is the reduced.
     
     cart: This a string that consist of the items added by the 
     customer.  

-    Step by step:
     The calculate_price function takes arguments cart and 
     pricings.
     A variable "total_price" was created as zero.
     The function gets a set "C" which will 
     consist of the unique items in the cart so as not to loop 
     more than necessary.
     The function loops through "distinct_items" using a for loop
     The "quantity" extracts the number of occurrence of an item
     in the cart.
     "pricing" uses filter get the item object from the pricings
     The total item price will be gotten by "total quanity modulo 
     the special quantity times the special price plus the reminder
     times unit_price."
     The total_price is incremented by total item price.
     The total_price is returned at the end of the function.
     

How to run:

1.   Ensure that python 3 is installed in the environment.
2.   Adjust/Edit the pricings array to desired items and values.
3.   Adjust/Edit the list of items in the main function for testing
purpose. 
4.   Navigate to "Checkout Kata" directory in terminal and 
     run "python checkout.py"