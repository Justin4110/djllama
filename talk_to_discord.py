import os
import sys
import requests


# 1 - go here and click Download Python https://www.python.org/downloads/
# 2 - Open Downloads, Right click it and install as ADMINISTRATOR - MAKE SURE to check the box for "Install to PATH"
# 3 - Open a cmd terminal inside visual studio code (click the Terminal button at the top)
# 4 - Inside the cmd terminal, go to your project folder using something like "cd C:\Users\...\Github\djllama" (where this file lives, fill in the ... with your path) 
# 5 - To enter the virtual environment type "\env\Scripts\activate.bat"
# 6 - Now that you're in here, try running the following command "python hello_world.py"
# 7 - If the command returned an output about one of your favorite foods, then you beat the game.

# YO this is a python script
# it doesn't run in your internet browser like HTML/CSS/JS do, it's different.
# Currently we have a "virtual environment" that you can see labeled "env"
# C:\Users\...\GitHub\djllama> env\Scripts\activate.bat
# The ... will be different on your machine. Inside the djllama folder we want to run this command that activates the virtual environment and places us inside of it.
# this is where you run your files from.
# the reason we do this is so that you can install packages and dependencies inside this virtual environment so it doesn't mess with your main computer or other python projects
# imagine you have 5 projects going at once and you need different packages for each of them. It would be silly to install all the packages globally for all projects
# so we just make a virtual environment for each project and install our packages for that project only.
# Python uses PIP to manage packages.
# "pip install requests"
# this is the command to install the request library from the internet to your computer. Remember to run this inside the virtual environment.
# "import requests" 
# this is what you use at the top of your python script to bring the files in that you got from the internet

justins_website = 'https://justinhurlburt.net'

r = requests.get(justins_website)

print(r.status_code)

print(r)