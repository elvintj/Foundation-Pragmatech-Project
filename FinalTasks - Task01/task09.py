#takin user input
n = int(input('Enter the number of students in the rage of [2 <= N <= 5]: '))
#Storing student information in a nested list
my_list = [[input('Enter student name: '), float(input('Enter student grade: '))] for i in range(n)]
#sorting list items to order names alphabetically
my_list.sort()
#storing student grades to a new list
grades = []
for i in my_list:
    for j in i:
        if type(j) != str:
            grades.append(j)
#sorting list to find the second lowest grade
grades.sort()
second_lowest_grade = grades[1]
#checking for a second lowest grade and printing appropriate student name
for i in my_list:
    for j in i:
        if j == second_lowest_grade:
            print('Student who has the second lowest grade is:', i[0])