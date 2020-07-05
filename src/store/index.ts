export interface AllState {
  app: AppState
  blue: BlueState
  red: RedState
}

export interface AppState {
  page: string
}

export interface BlueState {
  count: number
}

export interface RedState {
  time: string
}

