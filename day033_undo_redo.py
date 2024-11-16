import os


def print_tasks(list):

    print()
    print('TASKS:')
    print(*list, sep='\n')
    print()
    return None


tasks = []
undo = []

while True:
    print('TASK LIST')
    print('Type in your taks or one of the commands below')
    command = input('[List] [Undo] [Redo]\n')

    if command.lower() == 'list':
        if tasks == []:
            print('There are no items on the list.')
            print()
        else:
            print_tasks(tasks)

    elif command.lower() == 'undo':
        if tasks == []:
            print('There are no actions to be undone.')
            print()

        else:
            undo.append(tasks[-1])
            tasks.pop()
            print_tasks(tasks)

    elif command.lower() == 'redo':
        if undo == []:
            print('There are no actions to be redone.')
            print()

        else:
            tasks.append(undo[-1])
            undo.pop()
            print_tasks(tasks)

    elif command.lower() == 'clear':
        os.system('cls')

    else:
        tasks.append(command)
        undo = []
        print_tasks(tasks)
