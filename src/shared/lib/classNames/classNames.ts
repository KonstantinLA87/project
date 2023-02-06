type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    Object.entries(mods)
      .filter(([className, value]) => value)
      .map(([className]) => className),
    ...additional.filter(Boolean),
  ].join(' ');
}
