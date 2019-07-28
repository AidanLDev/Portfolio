import React from 'react'
import Card from 'components/Card/Card'
import AWSCertified from 'assets/Certs/AwsCpWhite.png'
import * as descriptions from 'data/Data'

import styles from './Style'

const Achievements = props => {
  return (
    <div>
      {descriptions.achivementDescription}
      <Card
        content={descriptions.AWSContent}
        img={AWSCertified}
        imgAlt="AWS certified"
      />
    </div>
  )
}

export default Achievements;