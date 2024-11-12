def is_safe(board, row, col, n):
    # Check the row on the left side
    for i in range(col):
        if board[row][i] == 1:
            return False

    # Check upper diagonal on the left side
    for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False

    # Check lower diagonal on the left side
    for i, j in zip(range(row, n, 1), range(col, -1, -1)):
        if board[i][j] == 1:
            return False

    return True


def solve_n_queens_util(board, col, n):
    # If all queens are placed, return True
    if col >= n:
        return True

    # Try placing this queen in all rows one by one
    for i in range(n):
        if is_safe(board, i, col, n):
            # Place queen at (i, col)
            board[i][col] = 1

            # Recur to place rest of the queens
            if solve_n_queens_util(board, col + 1, n):
                return True

            # If placing queen doesn't lead to a solution, remove queen
            board[i][col] = 0

    # If the queen cannot be placed in any row, return False
    return False


def solve_n_queens(n):
    # Initialize the board with all 0s
    board = []
    for i in range(n):
        row = []
        for j in range(n):
            row.append(0)
        board.append(row)

    # Try to solve the N-Queens problem
    if not solve_n_queens_util(board, 0, n):
        print(f"No solution exists for {n}-Queens problem.")
        return

    # Print the solution
    print(f"One of the solutions for {n}-Queens problem:")
    for row in board:
        row_string = ''
        for element in row:
            if element == 1:
                row_string += 'Q '
            else:
                row_string += '. '
        print(row_string.strip())

n = int(input("Enter the value of n: "))
solve_n_queens(n)
    
    
    
    
    
    
    
    
    
    
