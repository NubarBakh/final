"use client"
import React from "react"
import Accordion from "./accordion"
export default function Faqs (){

    return<>
   <div className="mt-20 mx-10">
    <h2 className="flex justify-center font-bold text-4xl mb-5">F.A.Q</h2>
   <div>
        <Accordion title={'How to contact with Customer Service?'} text={'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.'}/>
        <Accordion title={'App installation failed, how to update system information?'} text={'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.'}/>
        <Accordion title={'App installation failed, how to update system information?'} text={'  We try to reply quickly, so you need not to wait too long for a response!.'}/>
        <Accordion title={'Website reponse taking time, how to improve?'} text={'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.'}/>
        <Accordion title={'How do I create a account?'} text={'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.'}/>
        <Accordion title={'Website reponse taking time, how to improve?'} text={'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.'}/>

   </div>

   </div>
    
    </>
}