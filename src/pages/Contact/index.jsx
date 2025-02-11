import maPhoto from '../../images/moi.jpg'
import './contact.scss'

function Contact() {
  return (
    <div className="contact">
      <img src={maPhoto} alt="Portrait de Joshua, développeur Web FullStack" />
      <div className="contact__informations">
        <h2>
          <i class="fa-solid fa-image-portrait"></i> Lavaud Joshua
        </h2>
        <p>
          <i class="fa-regular fa-clock"></i> Je suis né le 05/05/1990 (34 ans)
          <br />
          <i class="fa-solid fa-phone"></i> Mon numéro de téléphone :{' '}
          <a href="tel:+33685462306"> 06 85 46 23 06</a>
          <br />
          <i class="fa-solid fa-envelope"></i> Mon adresse mail :
          <a href="mailto:j.lavaud501@gmail.com"> j.lavaud501@gmail.com</a>
          <br />
          <i class="fa-solid fa-location-dot"></i> J'habite à Naintré (86)
          <br />
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.637976611458!2d0.494971777395737!3d46.75231994657673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fda8b612c3675b%3A0xe00af4add487d5ca!2sMoulin%20de%20Domine%2C%2022%20Rue%20%C3%89mile%20Zola%2C%2086530%20Naintr%C3%A9!5e0!3m2!1sfr!2sfr!4v1739275170100!5m2!1sfr!2sfr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="locationJoshuaLavaud"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
