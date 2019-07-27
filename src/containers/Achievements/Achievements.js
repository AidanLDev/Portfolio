import React from 'react'
import Card from 'components/Card/Card'
import assets from 'assets/AwsCpOrange.png'

import styles from './Style'

const Achievements = props => {

  return (
    <div>
      <p>
        I consider myself a lifelong learner, during my learning endovers I have picked up numerous accolades.
      </p>
      <Card
        content={'Well where do I begin?!'}
        img={assets}
      />
    </div>
  )
}

export default Achievements;