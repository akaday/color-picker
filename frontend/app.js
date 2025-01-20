import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['#FF0000', '#00FF00', '#0000FF'],
      selectedColor: '#FFFFFF'
    };
  }

  handleColorClick = (color) => {
    this.setState({ selectedColor: color });
  }

  handleInputChange = (event) => {
    this.setState({ selectedColor: event.target.value });
  }

  render() {
    return (
      <div className="color-picker">
        <h1>Color Picker</h1>
        <div className="color-palette">
          {this.state.colors.map((color, index) => (
            <div
              key={index}
              className="color-swatch"
              style={{ backgroundColor: color }}
              onClick={() => this.handleColorClick(color)}
            />
          ))}
        </div>
        <div className="color-input">
          <label>Selected Color:</label>
          <input
            type="text"
            value={this.state.selectedColor}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ColorPicker />, document.getElementById('app'));
