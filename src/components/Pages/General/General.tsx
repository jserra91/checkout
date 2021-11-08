import * as React from 'react';
import { css } from '@emotion/css';
import * as Style from './General.Style';
import Information from '../../templates/Information';
import { Review as IReview } from '../../../models/Review';

export const General: React.FunctionComponent = () => {

  const [reviews, setReviews] = React.useState([] as any);

  const onSave = (value: IReview) => {
    setReviews([...reviews, value]);
  }

  return (
    <>
      <div className={css(Style.Base)}>
        <div>
          <Information
            reviews={reviews}
            onSave={onSave}
          ></Information>
        </div>
      </div>
    </>
  );
};





