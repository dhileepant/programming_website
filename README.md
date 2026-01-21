# Programming Languages Hub with Authentication

A modern web application showcasing programming languages with integrated Firebase authentication system. Features a beautiful, responsive design with login/signup functionality.

## Features

- **Programming Languages Showcase**: Interactive cards displaying popular programming languages
- **Language Comparison Tool**: Side-by-side comparison of different languages
- **Search and Filter**: Find languages by name or category
- **User Authentication**: Complete login/signup system with Firebase
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## Authentication Features

- **User Registration**: Sign up with username, email, and password
- **User Login**: Login with username and password
- **Password Reset**: Forgot password functionality via email
- **Form Validation**: Real-time validation with animated feedback
- **Secure Storage**: User data stored securely in Firebase Firestore
- **Session Management**: Automatic login state persistence

## Setup Instructions

### 1. Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Go to **Project Settings** > **General** > **Your apps**
4. Click **Add app** and select **Web** (</> icon)
5. Register your app and copy the configuration object

### 2. Configure Firebase Services

#### Enable Authentication:
1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** provider
3. Optionally configure other settings like authorized domains

#### Enable Firestore Database:
1. Go to **Firestore Database** > **Create database**
2. Start in **test mode** for development
3. Choose a location for your database

### 3. Update Configuration File

1. Open `firebase-config.js` in your project
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-actual-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-actual-sender-id",
    appId: "your-actual-app-id"
};
```

### 4. Run the Application

1. Serve the files using a local web server (required for ES6 modules):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

2. Open your browser and navigate to `http://localhost:8000`

## File Structure

```
├── index.html              # Main HTML file with authentication modal
├── styles.css              # Complete CSS with auth form styles
├── script.js               # JavaScript with Firebase integration
├── firebase-config.js      # Firebase configuration (update this!)
└── README.md              # This file
```

## Authentication Flow

### Login Process:
1. User enters username and password
2. System looks up email by username in Firestore
3. Firebase authenticates using email/password
4. User is logged in and navbar updates

### Signup Process:
1. User enters username, email, password, and confirmation
2. System validates input and checks username availability
3. Firebase creates user account with email/password
4. User data (username, email) stored in Firestore
5. User is automatically logged in

### Security Features:
- Password minimum length validation
- Email format validation
- Username uniqueness checking
- Secure password storage via Firebase Auth
- Session persistence across browser sessions

## Customization

### Styling
The authentication form preserves the original dark theme design with:
- Animated submit button that moves when fields are empty
- Real-time validation feedback
- Smooth transitions and hover effects
- Responsive design for mobile devices

### Functionality
You can extend the authentication system by:
- Adding user profiles
- Implementing role-based access
- Adding social login providers
- Creating user-specific content

## Troubleshooting

### Common Issues:

1. **Firebase not initialized**: Check browser console for errors and verify your `firebase-config.js` file
2. **CORS errors**: Make sure you're serving files via HTTP server, not opening directly in browser
3. **Authentication errors**: Verify Firebase Auth is enabled and Email/Password provider is configured
4. **Database errors**: Ensure Firestore is created and rules allow read/write access

### Firebase Security Rules

For development, you can use these Firestore rules (update for production):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Browser Compatibility

- Chrome 63+
- Firefox 60+
- Safari 11.1+
- Edge 79+

## License

This project is open source and available under the MIT License.