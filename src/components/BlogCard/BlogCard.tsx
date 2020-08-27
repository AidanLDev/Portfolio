import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Style.module.scss';

interface Props {
  clicked?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  route: string;
  title: string;
  description: String;
}

const blogCard: React.FC<Props> = ({ clicked, route, title, description }) => {
  return (
    <NavLink to={'/blog/' + route} className={styles.blogLinks}>
      <div className={styles.blogCardContainer} onClick={clicked}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </NavLink>
  );
};

export default blogCard;
