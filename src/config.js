const LIST_TYPES = {
  BACKLOG: 'backlog',
  READY: 'ready',
  IN_PROGRESS: 'inProgress',
  FINISHED: 'finished',
}

const LIST_COPY = {
  [LIST_TYPES.BACKLOG]: 'Backlog',
  [LIST_TYPES.READY]: 'Ready',

  [LIST_TYPES.IN_PROGRESS]: 'Doing',
  [LIST_TYPES.FINISHED]: 'Done',
}

const LIST_COLORS = {
  [LIST_TYPES.BACKLOG]: '#b95959',
  [LIST_TYPES.IN_PROGRESS]: '#4b69b1',
  [LIST_TYPES.DONE]: '#a0b959',
}

export { LIST_TYPES, LIST_COPY, LIST_COLORS }
