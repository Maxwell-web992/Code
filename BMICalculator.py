hight =float(input("Enter your hight in cm:"))
weight =float(input("Enter your weight in kg:"))

BMI = weight / (hight/100)**2

print("Your BMI is:", BMI)

if BMI <= 18.5:
   print("You are underweight.")
elif BMI <= 24.9:
   print("You are normal Weight")
elif BMI <= 29.9:
   print("You are overweight")
elif BMI <= 34.9:
   print("You are severely overweight")
elif BMI <= 40.0:
   print("You are obese")
else:
   print("You are extremely obese")