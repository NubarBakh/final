import Image from 'next/image';

export default function HowWork(){
    return <>
    <div className="flex flex-col">
        <h2 className="flex justify-center font-semibold text-5xl mb-10 mt-10">How it works</h2>
        <p className="mb-10 mx-20">Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.</p>
        <div className="relative  mt-20 flex justify-center">
        <Image width={380} height={380} className="absolute z-20 bottom-1 w-2/6" src={'/delivery.png'} alt={'delivery'}/>
        <Image  width={380} height={380} className="relative  bottom-10 w-2/4" src={'/rr.png'} alt={'delivery'}/>
        </div>
        
    </div>
    </>
}