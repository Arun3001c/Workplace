from collections import deque

# Defining the initial and goal states
initial_state = (3, 3, 1)  # (missionaries_left, cannibals_left, boat_position)
goal_state = (0, 0, 0)     # (missionaries_left, cannibals_left, boat_position)

# Function to check if the current state is valid
def is_valid(state):
    m, c, _ = state
    if m < 0 or m > 3 or c < 0 or c > 3:
        return False
    if m > 0 and m < c:     # More cannibals than missionaries on the left
        return False
    if (3 - m) > 0 and (3 - m) < (3 - c):  # More cannibals than missionaries on the right
        return False
    return True

# Function to get possible next states
def get_successors(state):
    m, c, boat = state
    successors = []
    
    moves = [
        (1, 0),  # 1 missionary
        (2, 0),  # 2 missionaries
        (0, 1),  # 1 cannibal
        (0, 2),  # 2 cannibals
        (1, 1)   # 1 missionary and 1 cannibal
    ]
    
    for move_m, move_c in moves:
        if boat == 1:  # Boat moving from left to right
            new_state = (m - move_m, c - move_c, 0)
        else:          # Boat moving from right to left
            new_state = (m + move_m, c + move_c, 1)
        
        if is_valid(new_state):
            successors.append(new_state)
    
    return successors

# BFS function to find the solution
def missionaries_and_cannibals_bfs(initial_state, goal_state):
    queue = deque([(initial_state, [initial_state])])
    visited = set()
    visited.add(initial_state)
    
    while queue:
        current_state, path = queue.popleft()
        
        if current_state == goal_state:
            return path
        
        for next_state in get_successors(current_state):
            if next_state not in visited:
                visited.add(next_state)
                queue.append((next_state, path + [next_state]))
    
    return None  # No solution found

# Running the solution
solution_path = missionaries_and_cannibals_bfs(initial_state, goal_state)

# Printing the solution path if found
if solution_path:
    print("Solution path:")
    for step, state in enumerate(solution_path):
        m, c, boat = state
        print(f"Step {step}: Missionaries on left: {m}, Cannibals on left: {c}, Boat: {'Left' if boat == 1 else 'Right'}")
else:
    print("No solution found.")











