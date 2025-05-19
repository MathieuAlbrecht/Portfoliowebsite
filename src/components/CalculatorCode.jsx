import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CalculatorcodeString = `
using System;

class Calculator
{
    static void Main()
    {
        Console.WriteLine("Calculator");
        Console.WriteLine("------------------");

        while (true)
        {
            Console.Write("Enter your calculation (e.g., 5 + 3, 4 * 2, sqrt 9, 2 ^ 3) : ");
            string input = Console.ReadLine();

            if (string.IsNullOrWhiteSpace(input))
            {
                Console.WriteLine("Invalid input. Please enter a valid expression.");
                continue;
            }

            string[] tokens = input.Split(' ');
            if (tokens.Length != 3)
            {
                Console.WriteLine("Invalid input. Please enter a valid expression.");
                continue;
            }

            double operand1, operand2, result;

            if (!double.TryParse(tokens[0], out operand1) || !double.TryParse(tokens[2], out operand2))
            {
                Console.WriteLine("Invalid input. Please enter valid numeric operands.");
                continue;
            }

            switch (tokens[1])
            {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    result = operand2 != 0 ? operand1 / operand2 : double.PositiveInfinity;
                    if (double.IsInfinity(result))
                    {
                        Console.WriteLine("Division by 0 is not allowed.");
                        continue;
                    }
                    break;
                case "sqrt":
                    result = Math.Sqrt(operand1);
                    break;
                case "^":
                    result = Math.Pow(operand1, operand2);
                    break;
                default:
                    Console.WriteLine("Invalid operation. Please enter a valid operation (+, -, *, /, sqrt, ^).");
                    continue;
            }

            Console.WriteLine("Result: " + result);
        }
    }
}
`;

const CalculatorCode = () => {
    return (
        <>
            <h1 className="header">Rechner Code</h1>
            <div className="Subtitle">Hier sehen sie den Code der Rechner Anwendung.</div>
            <div className="code-container">
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {CalculatorcodeString}
                </SyntaxHighlighter>
            </div>
        </>
    );
}

export default CalculatorCode;