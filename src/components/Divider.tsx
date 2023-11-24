import { FC } from 'react';

interface DividerProps {
  color?: string;
}


const Divider: FC<DividerProps> = ({color = 'black'}) => {
  let borderColor = 'border-black'
  if (color === 'white') {
    borderColor = 'border-white'
  }
  return <div className={`border-t ${borderColor} my-4`}></div>;
};

export default Divider;