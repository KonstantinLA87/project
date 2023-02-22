import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "redux";
import { getCounterValue } from "./getCounterValue";

describe('getCounterValue', () => {
  test('should ', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
})
