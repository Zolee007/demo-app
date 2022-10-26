import { IconBaseProps } from 'react-icons';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';

import { Order } from '../../../types/Order';
import { OrderType } from '../../../types/OrderType';

type OrderTypeIconProps = {
  type: Order['type'];
  size?: IconBaseProps['size'];
  color?: IconBaseProps['color'];
};

const OrderTypeIcon = ({ type, size, color }: OrderTypeIconProps) => (
  <>
    {type === OrderType.PickUp && <FiArrowUpCircle title="Pickup" size={size} color={color} />}
    {type === OrderType.DropOff && <FiArrowDownCircle title="Placement" size={size} color={color} />}
  </>
);

export default OrderTypeIcon;
