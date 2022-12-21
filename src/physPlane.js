import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";

export default function PhyPlane({ color, ...props }) {
    const [ref] = usePlane(() => ({ ...props }));
  
    return (
        <Plane args={[1000, 1000]} ref={ref} position={[0,0,-10]}>
          <meshStandardMaterial color={color} />
        </Plane>
    );
  }

  //switched to rapier