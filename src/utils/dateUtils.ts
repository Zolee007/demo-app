import format from 'date-fns/format';

export const formatTimeWindow = (start: Date, end: Date) => `${format(start, 'HH:mm')} - ${format(end, 'HH:mm')}`;
