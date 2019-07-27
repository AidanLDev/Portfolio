import React from 'react'
import Card from 'components/Card/Card'
import AWSCertified from 'assets/AwsCpWhite.png'
import CloudPractitioner from 'assets/CloudPractitionerEmailBadge.png'

import styles from './Style'

const Achievements = props => {

  const AWSContent = <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-03-14&ci=AWS00694170" target="_blank"><img src={CloudPractitioner} alt="AWS Cloud Practitioner badge"/></a>

  return (
    <div>
      <p>
        I consider myself a lifelong learner, during my learning endovers I have picked up numerous accolades.
      </p>
      <Card
        content={AWSContent}
        img={AWSCertified}
        imgAlt="AWS certified"
      />
    </div>
  )
}

export default Achievements;