import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Forever was born out of passion for innovation and desire to revolution the way people shop online. Our journey began with a simple idea: to platform where customers can easilydiscover, explore, and purhase a wide range of products from the comfort of their homes.</p>
        <p>Since our inception, we have strived to be the most trusted and reliable online shopping destination for our customers. Our mission is to provide an exceptional shopping experience that combines quality, affordability, and convenience.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Forever is to make online shopping accessible, convenient, and enjoyable for everyone, while maintaining the highest standards of product quality and customer satisfaction, from the first click to the final delivery.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to providing our customers with high-quality products that meet their expectations. We carefully curate our product selection and work closely with trusted suppliers to ensure that every item we offer is of the highest standard.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our platform is designed with user experience in mind, offering an intuitive interface that makes browsing, searching, and purchasing products effortless. We provide fast and reliable delivery options to ensure that customers receive their orders promptly.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated customer service team is available 24/7 to assist you with any questions or concerns you may have. We strive to provide prompt, helpful, and friendly support to ensure a seamless shopping experience for all our customers.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About