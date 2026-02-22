num = int(input("Enter a number: "))

# Count digits
power = len(str(num))

# Store original number
temp = num
total = 0

while temp > 0:
    digit = temp % 10
    total += digit ** power
    temp //= 10

if total == num:
    print("It is an Armstrong number!")
else:
    print("It is NOT an Armstrong number.")