# 🎲 **DiceRollerFX** - Web-Based Dice Simulator  

*A visually stunning, interactive dice roller built with Flask that works flawlessly across all devices.*  

![Demo Screenshot](https://media1.tenor.com/m/VpQP6Yhbc8gAAAAd/will-ferrell-amy-poehler.gif)   

## ✨ **Features**  

- 🌈 **Eye-catching gradient UI** with smooth animations  
- 🎲 **Supports all standard dice types** (D4, D6, D8, D10, D12, D20)  
- 🚫 **100% error-proof** with frontend + backend validation  
- 📱 **Fully responsive** - works on desktop & mobile  
- ⚡ **Instant results** with rolling animation  
- 🔢 **Auto-totaling** of multiple dice rolls  

## 🚀 **Quick Start**  

### **1. Installation**  
```bash
git clone https://github.com/Kirankumarvel/DiceRollerFX.git
cd DiceRollerFX
pip install -r requirements.txt
```

### **2. Run the App**  
```bash
python app.py
```

### **3. Open in Browser**  
```
http://localhost:5000
```

## 🛠 **Tech Stack**  

| Component       | Technology |  
|----------------|------------|  
| **Backend**    | Python + Flask |  
| **Frontend**   | HTML5, CSS3, JavaScript |  
| **Animations** | CSS Keyframes |  
| **Styling**    | Modern Flexbox/Grid |  

## 📂 **Project Structure**  

```
DiceRollerFX/
├── app.py                # Flask application
├── requirements.txt      # Dependencies
├── static/
│   ├── style.css         # Stylish animations
│   └── dice.js           # Interactive logic
└── templates/
    └── index.html        # Beautiful interface
```

## 🎮 **How to Use**  

1. Select number of dice (1-6)  
2. Choose dice type (D4 to D20)  
3. Click "Roll Dice!"  
4. Watch the animation and see your results  

**Example Output:**  
```
Results: 4, 2, 5  
Total: 11  
```

## 🌟 **Why DiceRollerFX?**  

✔ **No errors** - Comprehensive input validation  
✔ **No dependencies** - Pure Flask + vanilla JS  
✔ **Visually impressive** - Professional animations  
✔ **Cross-platform** - Runs anywhere with a browser  

## 🤝 **Contributing**  

PRs welcome! Please:  
1. Fork the repository  
2. Create your feature branch  
3. Commit your changes  
4. Push to the branch  
5. Open a pull request  

## 📜 **License**  

MIT License - see [LICENSE](LICENSE) file  

---

**Happy Rolling!** 🎲✨  

*"The dice of Zeus always fall luckily" - Sophocles*  

---

💡 **Pro Tip**: Add `?dice=3&sides=6` to the URL to auto-roll specific dice!  
*(Example: `http://localhost:5000?dice=3&sides=6`)*
