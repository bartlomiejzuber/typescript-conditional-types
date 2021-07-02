type InputProps =
  | { type: "camera"; onError: (error: string) => void }
  | { type?: never; onError?: never };

export function Input(props: InputProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function Debugging() {
  return <Input />;
}
