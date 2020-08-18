import { DataType, DocumentPropertyOptions } from '../datatypes/datatypes';

export const TICK_CHAR = '`';

export function removeTicks(s: string, tickChar: string) {
  tickChar = tickChar || TICK_CHAR;
  return s.replace(new RegExp(tickChar, 'g'), '');
}

export function addTicks(s: string, tickChar: string) {
  tickChar = tickChar || TICK_CHAR;
  return tickChar + removeTicks(s, tickChar) + tickChar;
}

export const setPropertyOptions = (object: DataType, options: DocumentPropertyOptions) => {
  Object.keys(options).map((key) => {
    const prop = (object as any)[key];
    const option = (options as any)[key];
    if (option != null && prop != null) {
      (object as any)[key] = option;
    }
  });
};
