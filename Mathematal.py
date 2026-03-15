class ExpresionSolver:
    def __init__(self, expression):
        self.expression = expression

    def solve(self):
        result = eval(self.expression)
        return result
    
    def display_result(self):
        result = self.solve()
        print("Expression:", self.expression)
        print("Result:", self.solve())

exp = input
("Enter a mathematical expression to solve: ")

object = ExpresionSolver(exp)

object.display_result()