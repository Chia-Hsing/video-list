
# Video-List

A video preview app built with __React__, which lists the most recently popular video from Youtube. In addition, users can not only add the beloved video to the collection page also can search the specific video by giving a condition.

# Live Demo

[Video_List](https://chia-hsing.github.io/video-list/#/)

# Development stack
- Use [Create-React-App](https://create-react-app.dev/) as the app build tool.
- Use [Redux](https://redux.js.org/) for global state management. .
- Use [redux-thunk](https://github.com/reduxjs/redux-thunk) as a middleware for Redux side effects logic.
- Use [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) to navigate between pages.

# APIs

## APIs used
  - Video data are fetched from [Youtube API](https://developers.google.com/youtube/v3/docs/videos/list)
## Get API keys
  ### Google API Key
  1. Sign in your Google account.
  2. Create or select a project on [Google Cloud Platform](https://console.developers.google.com/)
  3. From the menu, click the __APIs and services__ .
  4. On the APIs and services page, click __ENABLE APIs and services.
  5. Search out the API you are going to use. (which are Geocoding API and Geolocation API)
  6. From the menu, click __Credentials__.
  7. Click __Create credentials__.
  8. Click __API key__, then the API key would be showed on the dialog box.

# Running
## Clone
```
$ git clone https://github.com/Chia-Hsing/video-list.git
```
  
## Setup
**1. Access the Video-List file.**
```
$ cd Video_List
```
**2. Install packages.**
```
$ npm install
```
**3. Create a .env file.**
```
$ touch .env
```
**4. Store your API Key in .env file and save.**
```
REACT_APP_GOOGLE_API_KEY = 

```
**5. Then you can view the app locally on http://localhost:3000/Good-Day-Weather-App-react**
```
$ npm start
```
# App Display

![image](https://github.com/Chia-Hsing/video-list/blob/master/img1.png)

![image](https://github.com/Chia-Hsing/video-list/blob/master/img2.png)


![image](https://github.com/Chia-Hsing/video-list/blob/master/img3.png)


# Current progress
