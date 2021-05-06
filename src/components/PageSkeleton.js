import React from 'react';

import './styles/PageSkeleton.css';

function PageSkeleton() {
  return (
    <>
      <div className="hero" />
      <ul className="skeleton-list list-unstyled">
        <li className="skeleton-item">
          <div className="skeleton-item__container">
            <div>
              <div className="skeleton-item__container--img"></div>
            </div>
            <div className="skeleton-item__container--info">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </li>
        <li className="skeleton-item">
          <div className="skeleton-item__container">
            <div>
              <div className="skeleton-item__container--img"></div>
            </div>
            <div className="skeleton-item__container--info">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </li>
        <li className="skeleton-item">
          <div className="skeleton-item__container">
            <div>
              <div className="skeleton-item__container--img"></div>
            </div>
            <div className="skeleton-item__container--info">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default PageSkeleton;
