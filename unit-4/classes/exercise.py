class Game:
    def __init__(self, turn='X', tie=False, winner=None, board=None):
        if board is None:
            board = {
                'a1': None, 'b1': None, 'c1': None,
                'a2': None, 'b2': None, 'c2': None,
                'a3': None, 'b3': None, 'c3': None,
            }
        self.turn = turn
        self.tie = tie
        self.winner = winner
        self.board = board

    def play_game(self):
        print("lets play tic tac toe")

    def print_board(self):
        b = self.board
        print(f"""
                A   B   C
            1)  {b['a1'] or ' '} | {b['b1'] or ' '} | {b['c1'] or ' '}
                ----------
            2)  {b['a2'] or ' '} | {b['b2'] or ' '} | {b['c2'] or ' '}
                ----------
            3)  {b['a3'] or ' '} | {b['b3'] or ' '} | {b['c3'] or ' '}
        """)

    def print_message(self):
        if self.tie == True:
            print('tie game')
        elif (self.winner != None):
            print(f'{self.winner} wins')
        else:
            print(f"it's {self.turn}'s turn")
    
    def render(self):
        game_instance.print_message()
        game_instance.print_board()
    
    def place_piece(self):
        while True: 
            user_input = input(f"Enter a valid movie (example: A1): ").lower()
            if user_input in self.board and self.board[user_input] is None: #checks if the spot entered is a real spot and if its not taken, none only applies to self.board[user_input]
                return user_input
            else: 
                print ("Invalid response or position has been taken. Try again.")



game_instance = Game()

game_instance.place_piece()