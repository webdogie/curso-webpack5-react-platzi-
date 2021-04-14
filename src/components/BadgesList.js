import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import twitterLogo from '../images/twitter.svg';

{
  /* <li key={badge.id}>
  <p>
    {badge.firstName} {badge.lastName}
  </p>
</li>; */
}

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="Badge_list list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="Badge_list__item">
              <Link to="/react_platzi">
                <div className="Badge_list__item--container">
                  <div>
                    <img src={badge.avatarUrl} alt="Avatar" />
                  </div>
                  <div className="container__info">
                    <p>
                      {badge.firstName} {badge.lastName}
                    </p>
                    <div className="container__info--twitter">
                      <img src={twitterLogo} alt="twitterImg" width="20" />
                      <p>@{badge.twitter}</p>
                    </div>
                    <p>{badge.jobTitle}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
