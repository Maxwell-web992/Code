class student:
    grade = 10
    name = "Penguin"
     
    def introduction(self):
       print("Hi am a student name")

    def deatails(self):
        print("My name is",self.name)
        print("My grade is",self.grade)
    
ob = student()
ob.introduction()
ob.deatails()