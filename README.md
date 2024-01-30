# the Anitrox project was formally discontinued on January 30th, 2024.
Anitrox was shut down on October 23rd, 2023. Development is now permenantly ceased and support is no longer available. 
You will no longer be able to make merge requests, or open bug reports on the bot. 

## Building on from here.
You can still fork the bot, and do whatever you'd like with it. We'll be shifting from the GPLv2 license to the MIT license with this change. 

## Why now?
I've been becoming increasingly frustrated and unhappy with Discord as a service and platform, and have no desire in putting any more time into something for a platform I quite despise at this point. If you look at the last commits, There hasn't even *been* any active development for on going on months at this point. I've also been shifting my focus on programming towards other things, which has also been contributing to the lack of further development. 

# Thank you.
Thank you to everyone who contributed to the bot, weather you contributed with code, a bug report or helped work out an issue, **thank you.**

# 
## Get started!
To get started, You'll need Node.JS and NPM

You can get these through either your Linux distributions package manager, or if you are on Windows, by [clicking here.](https://nodejs.org/en/)

## Install those dependencies!

Run ``npm install`` and wait for it to download dependencies\
*For development: ESLint extension in your editor of choice*

## Configure yo bot!

Get or make your Discord bot token from [The Discord developer portal](https://discord.com/developers/applications), and rename ``.env.example`` to ``.env``. Set the ``TOKEN=""`` to the token you got from Discord 

Then grab your Discord User ID and put it in ``OWNERID=""``, This tells the bot who owns it 

⚠️ **WARNING**: This gives access to the bots controls, such as restart/shutdown, and eval! Make sure you use your own ID and not somebody elses.

## Get this party started! 

Run ``npm start`` to start the bot!


<img src="https://i.pinimg.com/originals/ba/e4/de/bae4de2fa4f778f874c84928b8e19203.png" alt="Pinkie Pie blasting a party cannon" height="auto" width="50%">

