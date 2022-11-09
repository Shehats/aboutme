export const getJson = async <T>(path: string, args?:any): Promise<T> => {
  const data = await fetch(path, args);
  const obj = await data.json();
  return (obj as T);
}
