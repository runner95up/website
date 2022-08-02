import * as React from 'react'
import cs from 'classnames'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { Header, Breadcrumbs, Search } from 'react-notion-x'
import * as types from 'notion-types'
import { useDarkMode } from 'lib/use-dark-mode'
import { navigationStyle,  isSearchEnabled } from 'lib/config'
import styles from './styles.module.css' 
const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (

    <div

      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >

      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => { 


  if (navigationStyle === 'default') {
    return <Header block={block} />
  } 

  return (
    <>

      <header className='notion-header'>
        <div className='notion-nav-header'>
          <Breadcrumbs block={block} rootOnly={true} />
          <div className='notion-nav-header-rhs breadcrumbs'>

 
             
            <ToggleThemeButton />
            {isSearchEnabled && <Search block={block} title={null} />}
          </div>
        </div>
      </header>
    </>
  )
}
