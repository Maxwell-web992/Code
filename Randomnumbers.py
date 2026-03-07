import random


numbers = [3, 7, 12, 15, 18, 21, 25]


secret_number = random.choice(numbers)

print("Guess the number from the list:", numbers)

guess = int(input("Enter your guess: "))
if guess == secret_number:
    print("Congratulations! You guessed the correct number.")
else:
    print("Sorry, that's not the correct number. The secret number was:", secret_number)    