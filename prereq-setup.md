# Setting up the prerequisites:
> 1) Download and install [Nodejs](https://nodejs.org/en/download/)
> 2) Open file explorer and go to `C:\Users\(your name)`
> 3) Make a new folder here to store the files. This will be the directory you install the node modules in
> 4) Go to the [Discord Developer Portal](https://discord.com/developers/applications), and make a new application (name it whatever you want)
> 5) Go to the `Bot` tab on the sidebar, and click "Add Bot". Stay on this page, as we will need it later
> 6) Download the `DiscordChat.js`, `DiscordChat.html` and `discordtoken.json` files and move them to the folder you made.
> 7) Open Command Prompt (`Win+R` and type `cmd`), and type `cd (your-folder-name)`. This should take you to the folder you made (inside command prompt)
> 8) Run the command `npm install discord.js socket.io express`. This will install the modules you need
> 9) Go back to the Discord Developer Portal. On the Bot page, under `TOKEN`, click Copy.
> 10) Open the `discordtoken.json` with any text editor, and change the 2nd line to `"token":"PASTE YOUR TOKEN HERE"` (Don't forget to save)
> 11) Go back to the Dev Portal, and go to the OAuth2 page on the sidebar
> 12) In the first box, click `Bot`
> 14) A second box will appear. I recommend clicking `Administrator` to give the bot admin permissions, but if you don't want that, be sure to click "View Channels" and "Send Messages"
> 15) Click the copy button after the URL, paste it into a browser window, and follow the steps from there. This will add the bot to your server<br>
That's it for the setup!
