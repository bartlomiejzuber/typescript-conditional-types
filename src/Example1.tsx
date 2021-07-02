type ShapeProps = {
    name: string;
}

type CircleProps = {
    shape: "circle";
    radius: number;
}

type SquareProps = {
    shape: "square";
    width: number;
}

type DrawerProps = ShapeProps & (CircleProps | SquareProps)

export const Drawer: React.FC<DrawerProps> = (props) => {    
  return <pre>{JSON.stringify(props)}</pre>;
}

function DrawerDebug() {
    return <Drawer shape="square" width={2}/>
}
