import * as React from 'react';

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

export function useToggle<T = boolean>(): [boolean, Actions<T>];
export function useToggle<T>(defaultValue: T): [T, Actions<T>];
export function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];
// eslint-disable-next-line default-param-last
export function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R): [D | R, Actions<D | R>] {
  const [state, setState] = React.useState<D | R>(defaultValue);

  const actions = React.useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;
    const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | R) => setState(value);
    const setLeft = () => set(defaultValue);
    const setRight = () => set(reverseValueOrigin);

    return {
      setLeft,
      setRight,
      set,
      toggle,
    };
  }, [defaultValue, reverseValue]);

  return [state, actions];
}
