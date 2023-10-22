'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "@/utils/toast";

interface IFormInput {
  discordId: string;
  twitterId: string;
  message: string;
}

const ContactForm = () => {

  const { register, handleSubmit,formState: { errors },reset } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log(data)
    if(data){
      notifySuccess('Message sent successfully!');
    }
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="row">
        <div className="col-sm-6">
            <ErrorMsg msg={errors.discordId?.message as string} />
          <div className="input-grp">
            <input {...register("discordId", { required: `Name is required!` })} name="Discord ID" id="Discord ID" type="text" placeholder="Discord ID *" />
          </div>
        </div>
        <div className="col-sm-6">
            <ErrorMsg msg={errors.twitterId?.message as string} />
          <div className="input-grp">
            <input {...register("twitterId", { required: `Email is required!` })} name="email" id="Twitter Profile" type="email" placeholder="Twitter Profile *" />
          </div>
        </div>
      </div>
      <div className="input-grp message-grp">
        <ErrorMsg msg={errors.message?.message as string} />
        <textarea
          {...register("message", { required: `Message is required!` })} id="message" name="message"
          cols={30}
          rows={10}
          placeholder="Enter your message"
        />
      </div>
      <button type="submit" className="submit-btn">Submit Now</button>
    </form>
  );
};

export default ContactForm;
