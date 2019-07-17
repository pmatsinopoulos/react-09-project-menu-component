class Link extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <a href={'/' + this.props.label.toLowerCase().trim().replace(' ', '-')}>{this.props.label}</a>
      </div>
    )
  }
}