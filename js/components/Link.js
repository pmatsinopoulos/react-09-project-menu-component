class Link extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'a',
        { href: '/' + this.props.label.toLowerCase().trim().replace(' ', '-') },
        this.props.label
      )
    );
  }
}