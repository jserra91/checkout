import * as React from 'react';
import * as Style from './Comment.Style';
import { Review } from '../../../models/Review';
import { css } from '@emotion/css';
import Rating from "../Rating"

export interface ICommentProps {
  value: Review
}

export const Comment: React.FunctionComponent<ICommentProps> = (props: ICommentProps) => {

  const [value, setValue] = React.useState(props.value ? props.value : {} as Review);

  React.useEffect(() => {
    setValue(props.value);
  }, [props.value])

  const getRating = () => {
    return value.rating ? value.rating as number : 0;
  }

  return (
    <>
      <div className={css(Style.Base)}>
        <div className={css(Style.Field)}>
          <div className={css(Style.FieldValue)}>
            <b>Name:</b>
          </div>
          <div>
            {value.name}
          </div>
        </div>
        <div className={css(Style.Field)}>
          <div className={css(Style.FieldValue)}>
            <b>Email:</b>
          </div>
          <div>
            {value.email}
          </div>
        </div>
        <div className={css(Style.Field)}>
          <div className={css(Style.FieldValue)}>
            <b>Rating:</b>
          </div>
          <div>
            <Rating defaultRating={getRating()} readOnly={true} />
          </div>
        </div>
        <div className={css(Style.Field)}>
          <div className={css(Style.FieldValue)}>
            <b>Comments:</b>
          </div>
          <div>
            {value.comments}
          </div>
        </div>
      </div>
    </>
  );
};





