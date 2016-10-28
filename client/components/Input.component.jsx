import React, {Component, PropTypes} from 'react';

class Input extends Component {

  constructor(props) {
    super(props);

    this.renderInputText = this
      .renderInputText
      .bind(this);
  }

  random() {
    return Math.random() * 1000;
  }

  renderInputText(type, name, value, id) {
    return (
      <input 
        id={id} 
        type={text} 
        name={name} 
        value={value}
      />
    );
  }

  render() {
    const { type } = this.props;
    const { name, value, id } = this.props;

    type = type? (type + '').toLowerCase() : 'text';

    switch (type) {
      case 'text':
        return this.renderInputText(
          type, 
          name = ('input'.concat(this.random.bind(this))), 
          value, 
          id
        );
      case 'number':
        return null;
      default:
        break;
    }
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired
};

export default Input;