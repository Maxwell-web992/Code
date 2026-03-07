lst = ['Apple', 'Banana', 'Cherry', 'guava', 'Mango']

print("Length of list:", len(lst))
print("First element:", lst[0])
print("Last element:", lst[-1])

lst.append('papaya')
print("Updated list:", lst)

lst.remove('Guava')
print("Updated list :", lst )

lst.sort()
print("Sorted list:", lst)

lst.pop(1)
print("Updated list :", lst)

lst.reverse()
print("Reversed list:", lst)

print("Multiplication on list:", lst * 2)

lst = lst [:4]
print("Sliced list:", lst)

lst.clear()
print("Cleared list:", lst)