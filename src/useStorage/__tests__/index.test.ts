/*
 * @Author: your name
 * @Date: 2021-03-31 11:00:04
 * @LastEditTime: 2021-03-31 11:01:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /chooks/src/useStorage/__tests__/index.test.ts
 */
import { act, renderHook } from '@testing-library/react-hooks';
import useStorage from '../index';
import MockStorage from './MockStorage';

describe('useStorage', () => {
  const setUp = ({ key, defaultValue = undefined, raw = true }) => {
    const storage = new MockStorage();
    return renderHook(() => useStorage(key, defaultValue, storage, raw));
  };

  it('call set', () => {
    const hook = setUp({ key: 'key', defaultValue: 'defaultValue' });
    expect(hook.result.current[0]).toEqual('defaultValue');

    act(() => {
      hook.result.current[1]('setValue');
    });
    expect(hook.result.current[0]).toEqual('setValue');

    act(() => {
      hook.result.current[1]({ setValueKey: 'setValueValue' });
    });
    expect(hook.result.current[0]).toEqual({ setValueKey: 'setValueValue' });

    hook.rerender({ key: 'key' });
    expect(hook.result.current[0]).toEqual({ setValueKey: 'setValueValue' });
  });

  it('call remove', () => {
    const hook = setUp({ key: 'key' });
    expect(hook.result.current[0]).toBeUndefined();

    act(() => {
      hook.result.current[1]('value');
    });
    expect(hook.result.current[0]).toEqual('value');

    act(() => {
      hook.result.current[1]();
    });
    expect(hook.result.current[0]).toBeUndefined();
  });

  it('uses raw mode', () => {
    const hook = setUp({ key: 'key', raw: true });
    expect(hook.result.current[0]).toBeUndefined();

    act(() => {
      hook.result.current[1]('{value}');
    });
    expect(hook.result.current[0]).toEqual('{value}');

    act(() => {
      hook.result.current[1]();
    });
    expect(hook.result.current[0]).toBeUndefined();
  });
});
