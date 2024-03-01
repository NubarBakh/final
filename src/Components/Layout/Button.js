export default function Button ({children,style, className}){

    return <>
     <button style={style}   className= {`p-2 px-5 ${className} `}   > {children} </button>
    </>
}