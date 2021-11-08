import * as React from 'react';
import { css } from '@emotion/css';
import * as Style from './Recharts.Style';
import { BarChart, Bar, XAxis } from 'recharts';


interface IRechartsProps {
  data?: any
}

export const Recharts: React.FunctionComponent<IRechartsProps> = (props: IRechartsProps) => {

  const auxdata = [
    {
      name: '07/11',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '08/11',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '09/11',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '10/11',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '11/11',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '12/11',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '13/11',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const [data, setData] = React.useState(props.data ? props.data : auxdata);

  React.useEffect(() => {
    if (props.data) setData(props.data);
  }, [props.data])

  return (
    <>
      <div className={css(Style.Base)}>
        <BarChart width={250} height={150} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
          <XAxis dataKey="name" />
        </BarChart>
      </div>
    </>
  );
};





