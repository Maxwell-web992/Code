def necur_factorial(n):
    if n == 1:
        return n
    else:
        return n * necur_factorial(n-1)
    
num = int(input("Enter a number: "))

if num < 0:
        print("Factorial is not defined for negative numbers.")
else:
        print("Factorial of", num, "is", necur_factorial(num))