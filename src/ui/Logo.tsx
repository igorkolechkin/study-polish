import { ReactComponent as LogoSvg } from '@assets/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to='/'>
      <LogoSvg width={150} className='text-center block mx-auto my-8' />
    </Link>
  )
}

export default Logo