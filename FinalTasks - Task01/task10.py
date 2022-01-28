n = int(input('Enter the number of student records in the range [2 <= n <= 10]: ')) #taking user input
student_records = {} #declaring dictionary for all information to be stored

for i in range(n): 
    student_input = input('Enter student name followed by 3 grades: ').split() #taking 4 user input in the same line
    student_records[student_input[0]] = list(map(float, student_input[1:])) #storing dictionary - key(student name): value([x, x, x])

student_name = input('Enter student name to be queried: ')
if student_records.setdefault(student_name): #if student name match any student name in the dictionary
    record_length = len(student_records[student_name]) #finding length of dictionary item with key(student name)
    
    percentage = sum(student_records[student_name])/record_length #finding average percentage of dictionary item
    formatted_percentage = '{:.2f}'.format(percentage) #with 2 decimal places
    print(f'Percentage of the 3 grades that {student_name} has:', formatted_percentage)
else:
    print('Entered student name does not match any student in the records!') #if student name does not match