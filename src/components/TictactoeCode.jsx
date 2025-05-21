import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as baseTomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const tomorrow = {
    ...baseTomorrow,
    'pre[class*="language-"]': {
        ...baseTomorrow['pre[class*="language-"]'],
        background: '#000',
    },
    'code[class*="language-"]': {
        ...baseTomorrow['code[class*="language-"]'],
        background: 'none',
    },
};

const tictactoeCodeString = `
using System;

class Program
{
    static char[] board = { '1', '2', '3', '4', '5', '6', '7', '8', '9' };
    static int playerTurn = 1;

    static void Main()
    {
        do
        {
            Console.Clear();
            PrintBoard();
            int choice;

            do
            {
                Console.Write($"Spieler {playerTurn}: Wähle eine Zahl (1-9): ");
            } while (!int.TryParse(Console.ReadLine(), out choice) || !IsChoiceValid(choice));

            board[choice - 1] = GetPlayerSymbol();
            if (CheckForWin() || CheckForTie())
            {
                Console.Clear();
                PrintBoard();
                if (CheckForWin())
                {
                    Console.WriteLine($"Spieler {playerTurn} gewinnt!");
                }
                else
                {
                    Console.WriteLine("Unentschieden!");
                }

                Console.Write("Drücke eine Taste, um das Spiel zu beenden.");
                Console.ReadKey();
                return;
            }

            SwitchPlayerTurn();
        } while (true);
    }

    static void PrintBoard()
    {
        Console.WriteLine($" {board[0]} | {board[1]} | {board[2]} ");
        Console.WriteLine("---|---|---");
        Console.WriteLine($" {board[3]} | {board[4]} | {board[5]} ");
        Console.WriteLine("---|---|---");
        Console.WriteLine($" {board[6]} | {board[7]} | {board[8]} ");
    }

    static bool IsChoiceValid(int choice)
    {
        return choice >= 1 && choice <= 9 && (board[choice - 1] != 'X' && board[choice - 1] != 'O');
    }

    static char GetPlayerSymbol()
    {
        return (playerTurn % 2 == 0) ? 'O' : 'X';
    }

    static void SwitchPlayerTurn()
    {
        playerTurn = 3 - playerTurn;
    }

    static bool CheckForWin()
    {
        return
            (board[0] == board[1] && board[1] == board[2]) ||
            (board[3] == board[4] && board[4] == board[5]) ||
            (board[6] == board[7] && board[7] == board[8]) ||
            (board[0] == board[3] && board[3] == board[6]) ||
            (board[1] == board[4] && board[4] == board[7]) ||
            (board[2] == board[5] && board[5] == board[8]) ||
            (board[0] == board[4] && board[4] == board[8]) ||
            (board[2] == board[4] && board[4] == board[6]);
    }

    static bool CheckForTie()
    {
        return !Array.Exists(board, element => element != 'X' && element != 'O');
    }
}
`;

const TictactoeCode = () => {
    return (
        <div>
            <h1 className="header">TicTacToe Code</h1>
            <div className="projectdetails-card text-bg-dark">
                <div className="card-body">
                    <div className="Subtitle subtitle-white" style={{textAlign: "center"}}>Hier sehen den Code des TicTacToe-Spiels.</div>
                    <SyntaxHighlighter language="csharp" style={tomorrow}>
                        {tictactoeCodeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default TictactoeCode;
