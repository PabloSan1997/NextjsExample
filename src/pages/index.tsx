import { UseContext } from "@/context/taskContext"
import Link from 'next/link';


export default function Home() {
  const {hola, setHola} = UseContext();
  return (
   <div className="add">
    hola mundo
   </div>
  )
}
