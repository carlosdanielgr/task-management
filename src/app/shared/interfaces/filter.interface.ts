export type NameFilter = 'all' | 'pending' | 'completed';

export interface FilterTask {
  name: NameFilter;
}
