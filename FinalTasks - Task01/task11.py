n = int(input('Enter the number(lines) of commands: ')) #taking user input for number of commands

my_list = [] #empty list
for i in range(n): #n commands
    cmd = list(input('Enter the command: ').split()) #storing command input to cmd
    if cmd[0] == 'insert':
        my_list.insert(int(cmd[1]), int(cmd[2])) #do insert if first entered word is 'insert'
    elif cmd[0] == 'remove':  
        my_list.remove(int(cmd[1])) #do remove if first entered word is 'remove'
    elif cmd[0] == 'append':
        my_list.append(int(cmd[1])) #do append if first entered word is 'append'
    elif cmd[0] == 'sort':
        my_list.sort() #do sort if first entered word is 'sort'
    elif cmd[0] == 'pop':
        my_list.pop() #do pop if first entered word is 'pop'
    elif cmd[0] == 'reverse':
        my_list.reverse() #do reverse if first entered word is 'reverse'
    elif cmd[0] == 'print':
        print('Altered list is:', my_list) #print the list if first entered word is print
    
    cmd.clear() #clearing the cmd list at every iteration to get the new input for next command
