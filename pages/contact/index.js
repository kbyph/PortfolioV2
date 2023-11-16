import React, { useRef } from 'react';

// Email
import emailjs from '@emailjs/browser';

//Icons
import {BsArrowRight} from 'react-icons/bs';

//Framer Motion
import { motion } from 'framer-motion';

//Variants
import { fadeIn } from '../../variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0c7pxa7', 
      'template_gt05ybb', 
      form.current, 
      '4uMd-6imABZnvMQdW'
      )
      .then(
        function(response) {
            alert("Email sent successfully!");
            form.current.reset();
        },
        function(error) {
            alert("Something went wrong..."+error);
        }
    );
  };

  return (
    <div className='h-full bg-primary'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/*Text & Form*/}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/*Text*/}
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden' 
            className='h2 text-center xl:mb-8 mb-4 mt-14 xl:mt-0'
          >
            {`Let's`} <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.h3 
            className='text-center xl:mb-12 mb-6'
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'           
          >
            {` If you're eager to collaborate and bring ideas to life, let's connect and have a conversation! I'm all ears and ready to explore how we can work together effectively. `}
          </motion.h3>

          {/*Form*/}
            <motion.form 
              ref={form} 
              onSubmit={sendEmail}
              variants={fadeIn('up', 0.4)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
              className='flex-1 flex flex-col gap-6 w-full mx-auto'
            >
              {/*Group*/}
              <div className='flex gap-x-6 w-full'>
                <input type='text' placeholder='Name' className='input' name="user_name" />
                <input type='email' placeholder='Email' className='input' name="user_email" />
              </div>
              <textarea type='text' placeholder='Message' className='textarea' name="message" />
                <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                  <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                    Send
                  </span>
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                </button>
            </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
