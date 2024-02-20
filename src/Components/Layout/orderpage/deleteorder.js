import Button from "../Button";

export default function Delete ({style}){
    return<>
     <div className="flex text-center flex-col mt-10">
        <h2 className="font-semibold text-black text-2xl">Are you sure it`s deleted?</h2>
        <p className="w-60 mx-auto"> Attention! If you delete this order, it will not come back...</p>
        <div className="flex justify-center gap-4">
        <Button style={{border: '1px solid', borderRadius :10,width:100}}> Cancel</Button>

            <Button  style={{backgroundColor:'red', color:'white',border: '1px solid', borderRadius :10,width:100}}> Delete</Button>
        </div>
     </div>
     
     </>
} 