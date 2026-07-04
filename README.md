# 🎮 XOXO — Real-Time Multiplayer Tic-Tac-Toe

A modern, real-time multiplayer Tic-Tac-Toe game with room-based matchmaking, in-game chat, live online status, and a beautiful glass-morphism UI — all powered by **Firebase Realtime Database**.

> **🎮 Play Now:** https://gmxo.games/

> **📂 GitHub Repository:** https://github.com/MGautam-88/XoXo

![XOXO Game Screenshot](assets/XOXO_game.png)

---

# 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [How to Play](#-how-to-play)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [How the Application Works](#-how-the-application-works-end-to-end)
- [Setup & Deployment](#-setup--deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

# 🧠 Overview

**XOXO** is not your ordinary Tic-Tac-Toe. It's a fully online, real-time, two-player game where friends can create private rooms, choose who goes first, chat during the match, and track scores across multiple rounds—all from their browsers with zero installation.

---

# ✨ Features

## 🏠 Room-Based Multiplayer

- Create a private room with a unique **6-character room code**
- Join an existing room instantly using your friend's code
- Maximum **2 players per room**
- Fast Firebase-powered matchmaking

![Room System](assets/room_system.png)

---

## 👤 Player Name Entry

- Every player enters their name before joining
- Fresh name prompt every new session
- Names appear throughout the game, chat, and scoreboard

![Name Entry](assets/player_name_entry.png)

---

## ❤️ Hand-Drawn SVG Doodles

Instead of traditional X and O:

- ❤️ Hand-drawn red heart
- 🔵 Sketch-style blue circle
- Inline SVG graphics
- Sharp rendering on every screen size

![SVG Doodles](assets/svg_doodles.png)

---

## 👥 Live Online/Offline Status

Each player has a Bitmoji-style SVG avatar.

### Online

- 🟢 Green ring
- 😊 Smiling face
- Blue shirt
- Green glowing status

### Offline

- ⚫ Grey ring
- 😐 Neutral face
- Grey shirt
- Dimmed player card

Presence updates happen instantly through Firebase.

![Online Status](assets/online_status.png)

---

## 🏆 Persistent Scoreboard

Keeps track of:

- Player 1 Wins
- Player 2 Wins
- Draws

Scores persist across every rematch until the room is destroyed.

![Scoreboard](assets/scoreboard.png)

---

## 🔄 Rematch System

After every match:

- One player requests a rematch
- Opponent accepts
- Request can also be cancelled
- New round starts only after both players agree
- First-player chooser appears again

![Rematch Request](assets/rematch_request.png) ![Rematch Accept](assets/rematch_accept.png)

---

## 💬 In-Game Chat

A floating chat widget allows players to:

- Chat in real time
- Receive instant messages
- View unread message badge
- Keep chat history throughout the room session

![Chat Widget](assets/chat_widget.png)

---

## 🔒 Session Persistence

- Auto reconnect after refresh
- Hard refresh supported
- Session stored using LocalStorage
- Firebase Presence tracks online/offline state
- Rooms automatically delete after **1 hour of inactivity**
- Manual Leave Room destroys the room immediately

---

## 📱 Fully Responsive

Optimized for:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablet

Responsive breakpoints:

- 600px
- 480px
- 350px

Features:

- Centered game board
- Glass-morphism UI
- Smooth animations
- Neon effects
- Mobile-friendly controls

![iPad Air View](assets/iPad_air_view.png) ![iPhone SE View](assets/iPhone_SE_view.png) ![Pixel 7 View](assets/Pixel_7_view.png)

---

# 🕹️ How to Play

1. Open the game.
2. Enter your name.
3. Create a room or join one using a room code.
4. Wait for your opponent.
5. Decide who goes first.
6. Play by selecting empty cells.
7. Get three in a row to win.
8. Request a rematch after the game.
9. Chat anytime using the floating chat button.
10. Leave the room whenever you want.

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling, animations, responsive UI |
| Vanilla JavaScript (ES6+) | Game logic |
| Firebase Realtime Database | Multiplayer synchronization |
| Firebase JS SDK v10 | Firebase integration |
| SVG | Hearts, circles, avatars |
| LocalStorage | Session persistence |
| GitHub Pages | Hosting |

---

# 📁 Project Structure

```text
XoXo/
│
├── index.html      # Main UI
├── style.css       # Styling & responsive layout
├── script.js       # Multiplayer game logic
├── icon.png        # Favicon
└── README.md       # Documentation
```

---

# 🧠 How the Application Works (End to End)

1. Player opens the application and enters their **name**.
2. They either **create a room** (receiving a unique 6-character room code) or **join** an existing room using a friend's code.
3. Both players enter a waiting room where live Bitmoji-style avatars display their online/offline status.
4. Once both players are connected, they enter the game screen where either player can choose who moves first or use the **🎲 Random** option.
5. The player going first becomes **🔵 Circle (O)**, while the second player becomes **❤️ Heart (X)**.
6. Every move is synchronized instantly through **Firebase Realtime Database**.
7. After a win or draw, the persistent scoreboard updates automatically.
8. To begin another round, both players must agree to a rematch.
9. Players can send messages anytime through the built-in real-time chat widget.
10. Refreshing the page automatically reconnects players to their room using LocalStorage.
11. Firebase Presence keeps track of online/offline status.
12. Rooms remain available for up to **1 hour of inactivity**, after which they are automatically removed.

---

# 🚀 Setup & Deployment

## Run Locally

Clone the repository:

```bash
git clone https://github.com/MGautam-88/XoXo.git
```

Go into the project directory:

```bash
cd XoXo
```

Open **index.html** in any modern browser.

No installation.

No npm.

No build tools.

The application uses Firebase via CDN, so an internet connection is required for multiplayer functionality.

---

## Deploy to GitHub Pages

1. Push your project to GitHub.
2. Open **Repository Settings**.
3. Navigate to **Pages**.
4. Select:

```
Deploy from Branch
```

5. Choose:

```
main
/
root
```

6. Save.

Your website will become available at:

```
https://<username>.github.io/XoXo/
```

### Cache Tip

GitHub Pages may take **2–5 minutes** to publish updates.

If changes don't appear:

- Hard refresh (`Ctrl + Shift + R`)
- Or append:

```
?v=1
```

to the URL.

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create your feature branch.

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes.

```bash
git commit -m "Add amazing feature"
```

4. Push the branch.

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request.

---

# 📄 License

This project is open source and intended for personal, educational, and learning purposes.

---

# 👨‍💻 Author

**MGautam-88**

GitHub:
https://github.com/MGautam-88

---

⭐ If you enjoyed this project, consider giving it a **star** on GitHub!
