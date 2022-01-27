import React from "react";
import "./register.css";
import { useForm } from "react-hook-form";

export default function Register(){
    const {register, handleSubmit, reset, formState: {errors}, } = useForm();

    function onSubmit(data){
        console.log(data);
        reset();
    }
    return(
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register ("ism", {required:true})} placeholder={errors.ism === undefined ? "ism" : errors.ism && "ism kiritng"} />
                
                <input type="text" {...register ("familya", {required:true})} placeholder={errors.familya === undefined ? "familya" : errors.familya && "familya kiritng"}/>

                <input type="text" {...register ("FIO", {required:true})} placeholder={errors.FIO === undefined ? "FIO" : errors.FIO && "FIO kiritng"}/>

                <input type="number" {...register ("yosh", {required:true })} placeholder={errors.yosh === undefined ? "yosh" : errors.yosh && "yoshni kiritng"}/>
                <button type="submit">Jo'natish</button>
            </form>
        </div>
    )
}