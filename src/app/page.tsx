import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='space-y-20'>
      <div className="text-center text-slate-50 text-6xl font-bold ">
        Begin Your Brand Transformation
      </div>
      <div className="text-center  text-stone-300 text-3xl font-light ">
        hello@example.com
      </div>

      {/* FOOTER */}
      <div className="mb-6 mt-4 text-center text-9xl font-semibold  uppercase">
        cubic
        <span>
          <sup>2 </sup>
        </span>
        Studios
      </div>
      <hr className="mx-10 " />
      <div className="flex justify-around py-8">
        <p>Work</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
    </div>
    </>
  );
}
