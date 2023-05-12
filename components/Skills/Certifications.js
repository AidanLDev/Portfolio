import React from 'react'

import CertificationBox from './CertificationBox'

import style from './styles.module.scss'

const certs = [{ name: 'Udemy React 16 Course', img: 'udemyBurgerBuilder.jpg', link: 'https://www.udemy.com/certificate/UC-A5AOU8C4/' }, { name: 'AWS Cloud Practitioner', img: 'AWSCPBadge.png', link: 'https://www.credly.com/badges/aeaec428-0a39-4245-8bb6-67851fa02904/public_url ' }, { name: 'Free Code Camp JS course', img: 'FreeCodeCampCert.png', link: 'https://www.freecodecamp.org/certification/fcc99c3375c-a5d4-4e8a-ba4a-96473ca87aa8/javascript-algorithms-and-data-structures' }]

export default function Certifications() {
  return (
    <div className={style.certContainer}>
      {certs.map((cert, idx) => <CertificationBox key={`${cert.name}__${idx}`} name={cert.name} img={cert.img} link={cert.link} />)}
    </div>
  )
}
