# MNM RPM – A Pure CSS & JS RPM Gauge

A **realistic RPM gauge** built with **pure CSS, JavaScript, and PHP**. No images, just code. Inspired by real HUD displays, this project brings **smooth needle motion, shaking effects at high RPMs, and dynamic engine sounds**.

![RPM Gauge Preview](assets/rpm-preview.gif)  

## 🚀 Features
✅ **Realistic needle movement** with acceleration & deceleration physics  
✅ **Shaking effect** when reaching high RPMs (like in real dashboards)  
✅ **Glass reflection** for an authentic look  
✅ **Customizable colors, speed, and sound**  
✅ **Minimal performance impact** – runs purely on CSS & JavaScript  

## 🎮 Controls
- **Hold `W` or `Arrow Up`** → Increases RPM, needle moves dynamically.  
- **Release the key** → RPM decreases smoothly, simulating engine cooldown.  
- **Idle for 3 seconds** → The tachometer shuts down, dims, and sound stops.  

## 📂 Installation
Clone the repository and open the `index.html` file:
```bash
$ git clone https://github.com/yourusername/mnm-rpm.git
$ cd mnm-rpm
$ open index.html
```

Or include it in your project:
```html
<link rel="stylesheet" href="mnm-rpm.css">
<script src="mnm-rpm.js" defer></script>
```

## ⚙️ Customization
### 🎨 Colors
Modify the `:root` CSS variables:
```css
:root {
  --rpm-primary: #ff003b; /* Needle & highlights */
  --rpm-border: #9c9c9c; /* Outer ring */
  --rpm-background: #181818; /* Dial background */
}
```

### 🎵 Sound
Replace the default engine sound in `assets/motor_engine2.wav` or adjust the JavaScript values for volume & playback speed:
```javascript
let soundVolume = Math.min(0.2 + (rpm / 9000) * 0.8, 1);
let soundSpeed = 0.8 + (rpm / 9000) * 2;
```

## 🛠 Built With
- **SCSS** for advanced styling & dynamic marker generation
- **JavaScript** for real-time physics & audio control
- **PHP** (optional) for automatic RPM marker generation

## 📄 License
This project is open-source under the **MIT License** – feel free to modify & use it in your own projects!

## 💬 Contributions
PRs are welcome! If you have improvements (e.g., better physics, animations, or sound effects), feel free to contribute.

---

🔥 **Follow [my-new.me](https://my-new.me) for more cool projects!** 🚀

