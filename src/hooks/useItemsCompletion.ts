import { CompletableType } from '../types/CompletableType';
import { Status } from '../types/Status';

const useItemsCompletion = <T extends CompletableType>(items: Array<T>) => {
  const itemsCount = items.length;
  const completedItems = items.filter((item) => item.status >= Status.Completed);
  const completedCount = completedItems.length;
  const remainingItems = items.filter((item) => item.status < Status.Completed);
  const remainingCount = remainingItems.length;
  const isEmpty = itemsCount === 0;
  const isCompleted = remainingCount === 0;
  const progress = itemsCount > 0 ? Math.round((completedCount / itemsCount) * 100) : 0;
  const nextItem = remainingItems[0];

  return {
    remainingItems,
    remainingCount,
    completedItems,
    completedCount,
    items,
    itemsCount,
    progress,
    isEmpty,
    isCompleted,
    nextItem,
  };
};

export default useItemsCompletion;
