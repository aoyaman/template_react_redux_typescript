//
export const TOGGLE_PAGE = 'TOGGLE_PAGE'
export const INCREMENT_BLUE = 'INCREMENT_BLUE';
export const DECREMENT_BLUE = 'DECREMENT_BLUE';
export const RED_TIME_UPDATE = 'RED_TIME_UPDATE';

interface ActionTogglePage {
  type: typeof TOGGLE_PAGE
  page: string
}


interface ActionIncrementBlue {
  type: typeof INCREMENT_BLUE
  count: number
}
interface ActionDerementBlue {
  type: typeof DECREMENT_BLUE
  count: number
}


interface ActionUpdateRedTime {
  type: typeof RED_TIME_UPDATE
  time: string
}

export type AppActionTypes = ActionTogglePage;
export type BlueActionTypes = ActionIncrementBlue | ActionDerementBlue;
export type RedActionTypes = ActionUpdateRedTime;
