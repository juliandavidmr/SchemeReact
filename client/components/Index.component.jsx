import React, {Component, PropTypes} from 'react';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { show_list } = this.props;

    return (
      <div>
        Index
      </div>
    );
  }
}

ListarComponent.propTypes = {
  show_list: PropTypes.array.isRequired
};

export default ListarComponent;
