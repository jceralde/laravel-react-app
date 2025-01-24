import NavigationListItem from './NavigationListItem'

const NavigationList = () => {
  const navItems = ['about', 'experience', 'projects']

  return (
    <>
      {navItems.map((navItem) => (
        <NavigationListItem key={navItem} navDescription={navItem} />
      ))}
    </>
  )
}

export default NavigationList
