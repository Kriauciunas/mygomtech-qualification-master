import { IItem } from '~/services/getUserItems';

const difference = {
  inDays: (d1: Date, d2: Date) =>
    (d2.getTime() - d1.getTime()) / (24 * 3600 * 1000),
};

const oldEmail = (item: IItem) => {
  const currentDate = new Date();
  const itemDate = new Date(item.createdAt);

  return difference.inDays(itemDate, currentDate) > 30;
};

export default oldEmail;
