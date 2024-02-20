export default function Button ({children,style,}){

    return <>
     <button style={style}   className=" p-2 px-5  w-100  "> {children} </button>
    </>
}