[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
<br/>

<div id="header" align="left">
  <img src="./sportsee/src/assets/logo.svg" width="200"/>
</div>

# SPORTSEE : Training coaching

Sportsee is a sport's coaching startup that offers services to visualize sport's training progression on
his application with graphics and statistics following.

## TECHNOLOGIES

- JS
- CSS with Sass
- React

## PROJECT'S INSTALLATION

### \* Prerequites

- Github account
- NodeJS : Version 16.17.0 ([Download version](https://nodejs.org/download/release/v16.17.0/))
- Yarn : Version 1.22.19 (It is recommended to install Yarn through the npm package manager. [More information](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable))

### \* STEP 1 : RUN API

- Fork this repository : https://github.com/dahisland/MyriamMornet_12_092022 to your Github account.
- Clone it to the local folder's project of your choice in your computer.
- Open the folder in your favorite framework editor.
- Use the command `cd sportsee-backend` to change your working directory to the backend folder.
- Use the `yarn` command to install dependencies.

To run the api, use the command `yarn dev`.

#### _Endpoints_ :

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}`: <br/>
  retrieves information from a user. <br/>
  _This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.)._
- `http://localhost:3000/user/${userId}/activity`: <br/>
  retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions`: <br/>
  retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance`: <br/>
  retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

If you want to install api by using Docker, you can have more instructions on this [repository](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard#readme).

### \* STEP 2 : RUN FRONTEND

- Use the command `cd sportsee` to change your working directory to the frontend folder.
- Use the `npm install` command to install dependencies.
- Use the `npm start` command to run the project localy on your browser.

Local url by default is : `http://localhost:3006/`.

You can customize local port by changing it on your local file [sportsee/package.json](https://github.com/dahisland/MyriamMornet_12_092022/blob/main/sportsee/package.json) (line 20) : <br/>
`"scripts": {"start": "set PORT=3006 && react-scripts start"}`.
