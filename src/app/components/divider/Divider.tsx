
interface DividerProps{
    w?:number
    h?:number
    mx?:number
    my?:number
}
export default function Divider({w,h,mx,my}:DividerProps) {

  const width=w && `${w}%`
  const height=w && `${h}%`
  const margin_x=w && `${mx}%`
  const margin_y=w && `${my}%`
  return (
    <div className={`${w?`w-${width}`:"w-[27%] md:w-{30%} lg:w-[37%]"} ${h?`h-${height}`:" h-[0.125rem]"}`}>
    <span className={`h-full w-full block bg-shade-400`}></span>
  </div>
  )
}
