import React from 'react'
import CertificationBox from './CertificationBox'
import { certs } from './CertificationsList'

import style from './styles.module.scss'

export default function Certifications() {
  return (
    <div className={style.certContainer}>
      {certs.map((cert, idx) => (
        <CertificationBox
          key={`${cert.name}__${idx}`}
          name={cert.name}
          img={cert.img}
          link={cert.link}
        />
      ))}
    </div>
  )
}
