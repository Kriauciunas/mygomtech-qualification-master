import { FC } from 'react';
import { Routes } from '~/constants';
import { IItem } from '~/services/getUserItems';
import FilterTab from './components/FilterTab';
import oldEmails from '~/utils/oldEmails';
import itemHasReusedEmail from '~/utils/itemHasReusedEmail';

import './filter-style.scss';

interface IFilter {
  items: Array<IItem>;
}

const Filter: FC<IFilter> = ({ items }) => {
  const weakItemsCount = items.reduce((count, item) => count + 1, 0);

  const reusedItemsCount = items.filter((item) =>
    itemHasReusedEmail(item, items)
  ).length;
  const oldEmailsCount = items.filter(oldEmails).length;

  return (
    <div className='filter'>
      <FilterTab title='All' count={items.length} path={Routes.Users} />
      <FilterTab title='Wrong' count={weakItemsCount} path={Routes.Weak} />
      <FilterTab title='Reused' count={reusedItemsCount} path={Routes.Reused} />
      <FilterTab title='Old' count={oldEmailsCount} path={Routes.Old} />
    </div>
  );
};

export default Filter;
