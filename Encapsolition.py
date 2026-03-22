class Computer:
    def __init__(self):
        self.__max_price = 900

    def sell(self):
        print(" Selling Price: {}".format(self.__max_price))

    def setMaxPrice(self, price):
        self.__max_price = price

c = Computer()
c.sell()

c.___maxprice = 1000
c.sell()

c.setMaxPrice(1000)
c.sell()