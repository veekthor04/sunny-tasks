# This is a model for the list of items objects available
# Each objects contains the item, unit price and special price
pricings = [
    {
        "item": "A",
        "unit_price": 50,
        "special_price": [3, 130]
    },
    {
        "item": "B",
        "unit_price": 30,
        "special_price": [2, 45]
    },
    {
        "item": "C",
        "unit_price": 20,
        "special_price": [1, 20]
    },
    {
        "item": "D",
        "unit_price": 15,
        "special_price": [1, 15]
    },
]


def calculate_price(cart, pricings):
    """
    Calculates the total price of items added in the cart
    :param cart: A string of items selected by the customer
    :param pricings: An list of items object
    :return: The total calculated price
    """
    total_price = 0  # final price
    distinct_items = list(set(cart))  # gets distinct items in the cart

    for item in distinct_items:
        quantity = cart.count(item)  # gets the number of occurrence of the item in the cart
        pricing = list(filter(lambda pricing: pricing['item'] == item, pricings))[0]  # extracts the item pricing
        # gets and add item total price to final price
        total_price += pricing['special_price'][1] * (quantity // pricing['special_price'][0]) + \
                       pricing['unit_price'] * (quantity % pricing['special_price'][0])

    return total_price


# testing the function calculate_price
def main():
    print(calculate_price('AAAAAA', pricings))
    print(calculate_price('AAAB', pricings))
    print(calculate_price('AAABB', pricings))
    print(calculate_price('AAABBD', pricings))
    print(calculate_price('DABABA', pricings))

    return 0


if __name__ == '__main__':
    main()
