class Robot:
    grade = 10
    name = "Tecnix"
    DayBuilt = "2024-06-01"
    DayActivated = "2024-06-15"
     
    def introduction(self):
       print("Hi am a Robot name")
       

    def deatails(self):
        print("My name is",self.name)
        print("My grade is",self.grade)
        print("I was built on",self.DayBuilt)
        print("I was activated on",self.DayActivated)
ob = Robot()
ob.introduction()
ob.deatails()