# Dark Mode Toggle with React Native Reanimated

## Project Description

A React Native application demonstrating a dark mode toggle with smooth animations using React Native Reanimated.

## Features

- Toggle between light and dark themes
- Smooth color transitions for background, text, and buttons
- Theme context management using React Context API
- Responsive design

## Installation

```bash
yarn install
```

## Running the App

```bash
# Start the development server
yarn start

# Run on Android
yarn android

# Run on iOS
yarn ios

# Run on web
yarn web
```

## Project Structure

```
├── .gitignore
├── App.js                  # Main application entry point
├── app.json                # Expo configuration
├── index.js                # Entry point
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── yarn.lock               # Dependency lockfile
├── assets/                 # Application assets
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
└── src/                    # Source code
    ├── context/
    │   └── theme.tsx       # Theme context provider and hook
    ├── Home/
    │   └── index.tsx       # Main screen component
    └── utils/
        └── theme/
            └── colors.ts   # Theme color definitions
```

## Dependencies

- React (19.0.0)
- React Native (0.79.4)
- Expo (~53.0.13)
- react-native-reanimated (3.17.4)

## How to Use

The theme can be toggled by pressing the theme toggle button. The application uses:

- `useSharedValue` and `useAnimatedStyle` from react-native-reanimated for smooth transitions
- `interpolateColor` for color interpolation between themes
- Theme context (`useTheme`) to access theme state and toggle function

## License

0BSD (as specified in package.json)
