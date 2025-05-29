from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/roll/<int:dice_count>/<int:sides>')
def roll_dice(dice_count, sides):
    try:
        # Validate input
        if not 1 <= dice_count <= 6:
            raise ValueError("1-6 dice only")
        if sides not in [4, 6, 8, 10, 12, 20]:
            raise ValueError("Invalid dice type")
            
        # Generate rolls
        rolls = [random.randint(1, sides) for _ in range(dice_count)]
        return jsonify({
            'success': True,
            'rolls': rolls,
            'total': sum(rolls)
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True)