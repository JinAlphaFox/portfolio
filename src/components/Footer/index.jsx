import { Link } from 'react-router-dom'
import './footer.scss'

function Footer() {
  return (
    <div className="footer">
      <h3>Contact</h3>
      <p className="footer__information">
        <span>
          <i class="fa-solid fa-phone"></i> 06 85 46 23 06
        </span>

        <span>
          <i class="fa-solid fa-envelope"></i> j.lavaud501@gmail.com
        </span>
        <Link to="/contact">
          La suite en cliquant ici <i class="fa-solid fa-arrow-left"></i>
        </Link>
      </p>
    </div>
  )
}

export default Footer
