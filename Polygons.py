def polygon_area(vertices):
    n = len(vertices)
    area = 0

    for i in range(n):
        x1, y1 = vertices[i]
        x2, y2 = vertices[(i + 1) % n]
        area += (x1 * y2) - (x2 * y1)

    return abs(area) / 2


# --- User Input ---
num_vertices = int(input("Enter number of vertices: "))

vertices = []
for i in range(num_vertices):
    x = float(input(f"Enter x coordinate of vertex {i+1}: "))
    y = float(input(f"Enter y coordinate of vertex {i+1}: "))
    vertices.append((x, y))

# --- Calculate Area ---
area = polygon_area(vertices)

print(f"\nThe area of the polygon is: {area}")