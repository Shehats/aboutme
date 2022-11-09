type Func = (...kwargs: any[]) => void;
type PromiseFunc<T> = (...kwargs: any[]) => Promise<T>;

export const setPageData = async <T> (
  caller: PromiseFunc<T>,
  setter: Func,
  ...args: any[]): Promise<void> => {
  const data = await caller(...args);
  setter(data);
}


