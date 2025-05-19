import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const PasswordmanagercodeString = `
import tkinter as tk
from tkinter import messagebox
from tkinter import ttk
from cryptography.fernet import Fernet
import os

# Lade oder erstelle einen Schlüssel für die Verschlüsselung
try:
    with open('key.key', 'rb') as key_file:
        key = key_file.read()
except FileNotFoundError:
    key = Fernet.generate_key()
    with open('key.key', 'wb') as key_file:
        key_file.write(key)
cipher_suite = Fernet(key)

def save_password():
    website = website_entry.get()
    username = username_entry.get()
    password = password_entry.get()

    if website and username and password:
        # Verschlüssele die Daten bevor sie gespeichert werden
        encrypted_data = cipher_suite.encrypt(f"\${website} | \${username} | \${password}".encode())
        user_file = \`\${current_user}_passwords.txt\`
        with open(user_file, 'ab') as file:
            file.write(encrypted_data + b'\\n')
        # Felder leeren
        website_entry.delete(0, tk.END)
        username_entry.delete(0, tk.END)
        password_entry.delete(0, tk.END)
        messagebox.showinfo("Success", "Password saved successfully!")
    else:
        messagebox.showwarning("Warning", "Please fill out all fields")

def show_add_password_page():
    for widget in root.winfo_children():
        widget.destroy()

    ttk.Label(root, text="Website:").grid(row=0, column=0, padx=10, pady=10, sticky="e")
    global website_entry
    website_entry = ttk.Entry(root, width=35)
    website_entry.grid(row=0, column=1, padx=10, pady=10)

    ttk.Label(root, text="Username:").grid(row=1, column=0, padx=10, pady=10, sticky="e")
    global username_entry
    username_entry = ttk.Entry(root, width=35)
    username_entry.grid(row=1, column=1, padx=10, pady=10)

    ttk.Label(root, text="Password:").grid(row=2, column=0, padx=10, pady=10, sticky="e")
    global password_entry
    password_entry = ttk.Entry(root, width=35, show="*")
    password_entry.grid(row=2, column=1, padx=10, pady=10)

    ttk.Button(root, text="Save Password", command=save_password).grid(row=3, column=1, pady=10, sticky="e")
`;

const PasswordmanagerCode = () => {
    return (
        <>
            <h1 className="header">Password Manager Code</h1>
            <div className="Subtitle">Hier haben sie einen Einblick in den Code der Passwortmanager Anwendung.</div>
            <div className="code-container">
                <SyntaxHighlighter language="javascript" style={tomorrow}>
                    {PasswordmanagercodeString}
                </SyntaxHighlighter>
            </div>
        </>
    );
};

export default PasswordmanagerCode;