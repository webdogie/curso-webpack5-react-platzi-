import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import './styles/PageSkeleton.css';

function PageSkeletonLib() {
  return (
    <>
      <SkeletonTheme color="rgb(199, 199, 199)">
        <div className="hero">
          <Skeleton className="hero" />
        </div>
      </SkeletonTheme>
      <ul className="skeleton-list list-unstyled">
        <li className="skeleton-item">
          <Skeleton className="skeleton-item" />
          <div className="skeleton-item__container">
            <Skeleton className="skeleton-item__container" />
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
          <Skeleton className="skeleton-item" />
          <div className="skeleton-item__container">
            <Skeleton className="skeleton-item__container" />
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
          <Skeleton className="skeleton-item" />
          <div className="skeleton-item__container">
            <Skeleton className="skeleton-item__container" />
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

export default PageSkeletonLib;
