import * as React from 'react';
import { css } from '@emotion/css';
import * as Style from './Review.Style';
import InputText from '../../atoms/InputText';
import TextArea from '../../atoms/TextArea';
import Rating from '../../atoms/Rating';
import { Review as IReview } from '../../../models/Review';

export interface IReviewProps {
  onSave?(value: IReview): void;
}

export const Review: React.FunctionComponent<IReviewProps> = (props: IReviewProps) => {

  const [data, setData] = React.useState({} as any);

  const handleOnChangeData = (value: string | number, field: string) => {
    let auxData = { ...data };
    auxData[field] = value;
    setData({ ...auxData });
  }

  const getValue = (field: string) => {
    return data[field] ? data[field] : "";
  }

  const handleOnClick = () => {
    // parse data
    const value = {
      name: data.name,
      comments: data.comments,
      email: data.email,
      rating: data.rating
    } as IReview;
    // clean data
    setData({ ...{} } as any);
    // emit event
    if (props.onSave) {
      props.onSave(value);
    }
  }

  return (
    <>
      <div className={css(Style.Base)}>
        <div className={css(Style.Inputs)}>
          <InputText
            label="Name"
            value={getValue("name")}
            onChange={(value: string) => handleOnChangeData(value, "name")}
          ></InputText>
        </div>
        <div className={css(Style.Inputs)}>
          <InputText
            type="email"
            label="Email"
            value={getValue("email")}
            onChange={(value: string) => handleOnChangeData(value, "email")}
          ></InputText>
        </div>
        <div className={css(Style.Inputs)}>
          <Rating
            max={5}
            defaultRating={getValue("rating")}
            onChange={(value: number) => handleOnChangeData(value, "rating")}
          ></Rating>
        </div>
        <div className={css(Style.Inputs)}>
          <TextArea
            label="Comments"
            value={getValue("comment")}
            onChange={(value: string) => handleOnChangeData(value, "comment")}></TextArea>
        </div>
        <div className={css(Style.Inputs)}>
          <button
            onClick={handleOnClick}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};





