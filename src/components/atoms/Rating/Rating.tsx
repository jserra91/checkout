import * as React from 'react';
import { IRatingStyles, Rating, RatingSize } from '@fluentui/react';

export interface IRatingProps {
  max?: number,
  defaultRating?: number,
  readOnly?: boolean,
  onChange?(value: number): any
}

export const CRating: React.FunctionComponent<IRatingProps> = (props: IRatingProps) => {

  const [max] = React.useState(props.max ? props.max : 5);
  const [defaultRating] = React.useState(props.defaultRating ? props.defaultRating : 1);
  const [readOnly] = React.useState(props.readOnly ? props.readOnly : false);

  const styles: Partial<IRatingStyles> = {
    ratingStarBack: {
      color: "purple"
    },
    ratingStarFront: {
      color: "purple"
    },
  };

  const onChange = (event: any, rating: number | undefined) => {
    if (props.onChange && rating) props.onChange(rating);
  };

  return (
    <>
      <Rating
        max={max}
        size={RatingSize.Large}
        defaultRating={defaultRating}
        styles={styles}
        onChange={onChange}
        readOnly={readOnly}
      />
    </>
  );
};





