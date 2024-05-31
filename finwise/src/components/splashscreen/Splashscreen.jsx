import './splashscreen.css';
import launchLogo from '../../assets/Vector.png'

const Splashscreen = () => {
  return (
    <div className='splash'>
          <section className="splash_logo">
          <img src={launchLogo} alt=''  />
          </section>
          <section className='splash_text'>
          <p>FinWise</p>
          </section>
      </div>
  )
}

export default Splashscreen
