class Menu extends React.Component {
  render() {
    let menus = [
      'Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us'
    ]

    return menus.map((menu, index) => {
        return (
          <Link label={menu} key={index}/>
        )
      })
  }
}