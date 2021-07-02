type AccordionProps =
  | { collapsed?: true; expanded?: never }
  | { collapsed?: never; expanded?: true; };

export function Accordion(props: AccordionProps) {
  return <pre>{JSON.stringify(props)}</pre>;
}

function Debugging() {
  return <Accordion />;
}
