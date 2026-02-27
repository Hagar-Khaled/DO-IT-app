# DO IT. - Goal Tracker Mobile App 

A beautiful, modern todo/goal tracking mobile application built with React Native and Expo. Write down your goals, track your progress, and mark them as complete.

![React Native](https://img.shields.io/badge/React_Native-0.81.5-blue)
![Expo](https://img.shields.io/badge/Expo-54.0.33-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)

## Features ✨

-  **Create & Manage Goals** - Add new goals with descriptions
-  **Progress Tracking** - Visual progress bar showing completion percentage
-  **Mark Complete** - Toggle goals as done with a single tap
-  **Delete Goals** - Remove goals you no longer need
-  **Custom List Titles** - Organize goals by title (e.g., "Q1 Targets", "Weekend Plans")
-  **Counter Badge** - See how many goals you've completed
-  **Dark Theme** - Modern dark UI with vibrant green accents
-  **Multi-Platform** - Works on iOS, Android, and Web

## Screenshots

The app features:
- Clean, minimal dark UI (#0D0D0D background)
- Bright accent color (#C8F135) for CTA buttons and highlights
- Smooth animations and transitions
- Responsive design for all screen sizes

## Tech Stack

- **React Native** - Cross-platform mobile development
- **Expo** - React Native framework for rapid development
- **TypeScript** - Type-safe JavaScript
- **Expo Router** - File-based routing
- **React Hooks** - State management

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (optional): `npm install -g expo-cli`

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the app
   ```bash
   npm start
   ```

### Running on Different Platforms

- **Web:** `npm run web` or press `w` in the Expo CLI
- **iOS:** `npm run ios` (macOS only)
- **Android:** `npm run android` (requires Android Studio/Emulator)

## Project Structure

```
todo-app/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab navigation layout
│   │   └── index.tsx        # Home screen with todo app
│   ├── _layout.tsx          # Root layout
│   └── modal.tsx            # Modal screen
├── components/              # Reusable UI components
├── constants/               # App constants (theme, etc.)
├── hooks/                   # Custom React hooks
├── assets/                  # Images and other assets
├── app.json                 # Expo configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run web` - Start web version
- `npm run ios` - Start iOS simulator
- `npm run android` - Start Android emulator  
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to fresh state

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

### Web Deployment

This app can be deployed to various platforms:

#### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

#### Firebase Hosting
```bash
npm run build
firebase deploy
```

#### Netlify
```bash
npm run build
netlify deploy
```

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/routing/introduction/)
- [TypeScript Guide](https://www.typescriptlang.org/docs/)

## Contact & Support

For support, email hagar.khaled485@gmail.com or open an issue on GitHub.

---

Built with ☕ using Expo and React Native
