type MenuProps<T> = T extends string
  ? {
      items: Array<string>;
      labelProp?: never;
      valueProp?: never;
    }
  : {
      items: Array<T>;
      labelProp: keyof T;
      valueProp: keyof T;
    };

export function Menu<T>(props: MenuProps<T>) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function Debug() {
  return (
    <Menu
      items={[
        "Geralt",
        "Potato"
      ]}
    />
  );
}
