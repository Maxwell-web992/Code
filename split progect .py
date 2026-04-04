with open ("Codingal.txt", "w") as file:
 file.write("Hi am Maxwell i am 10 years old i love foot ball")
file.close()

with open ("Codingal.txt", "r") as file:
  data = file.readlines()
  for line in data:
   word = line.split()

print(word)
file.close()
 

   