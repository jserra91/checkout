import * as React from 'react';
import { css } from '@emotion/css';
import * as Style from './Information.Style';
import Review from '../../organisms/Review';
import Recharts from '../../organisms/Recharts';
import Comment from '../../atoms/Comment';
import * as IReview from '../../../models/Review';

export interface IInformationProps {
  reviews?: IReview.Review[];
  onSave?(value: IReview.Review): void;
}

export const Information: React.FunctionComponent<IInformationProps> = (props: IInformationProps) => {

  const [reviews, setReviews] = React.useState(props.reviews ? props.reviews : [] as IReview.Review[])

  const handleOnSave = (value: IReview.Review) => {
    if (props.onSave) {
      props.onSave(value);
    }
  }

  React.useEffect(() => {
    if (props.reviews) setReviews(props.reviews);
  }, [props.reviews])

  return (
    <>
      <div className={css(Style.Base)}>
        <div className={css(Style.Title)}>
          <h1>Checkout test</h1>
        </div>
        <div className={css(Style.Content)}>
          <div>
            <Review
              onSave={handleOnSave}
            ></Review>
          </div>
          <div className={css(Style.Rechart)}>
            <div className={css(Style.RechartComponent)}>
              <Recharts></Recharts>
            </div>
          </div>
        </div>
        <div className={css(Style.Reviews)}>
          {reviews && reviews.length > 0 &&
            reviews.map((value: IReview.Review, index: number) => {
              return <><span className={css(Style.ReviewsElement)}><Comment value={value} ></Comment></span></>
            })
          }
        </div>
      </div>
    </>
  );
};





