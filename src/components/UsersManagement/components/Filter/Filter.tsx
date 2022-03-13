import { FC } from 'react';
import { Routes } from '~/constants';
import { IItem } from '~/services/getUserItems';
import FilterTab from './components/FilterTab';
import oldEmails from '~/utils/oldEmails';
import itemHasReusedEmail from '~/utils/itemHasReusedEmail';
import itemHasWrongEmail from '~/utils/itemHasWrongEmail';

import './filter-style.scss';

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const reusedItemsCount = items.filter((item) =>
    itemHasReusedEmail(item, items)
  ).length;
  const wrongItemsCount = items.filter(itemHasWrongEmail).length;
  const oldEmailsCount = items.filter(oldEmails).length;

  return (
    <div className='filter'>
      <FilterTab title='All' count={items.length} path={Routes.Users} />
      <FilterTab title='Wrong' count={wrongItemsCount} path={Routes.Wrong} />
      <FilterTab title='Reused' count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title='Old' count={oldEmailsCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
