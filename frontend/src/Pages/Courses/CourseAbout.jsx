import React from 'react'

const CourseAbout = () => {
    return <div>
        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About of
                <span className='text-[#01B5C5] font-bold text-[24px] leading-9'>App Development</span>
            </h3>
            <p className="text-[14px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">App development is the process of creating software applications for mobile devices, web platforms, or desktop environments. It typically involves several stages, including planning, design, coding, testing, and deployment. During the planning phase, developers outline the app's purpose, target audience, and features. This is followed by designing the user interface (UI) and user experience (UX) to ensure that the app is both visually appealing and easy to navigate. </p>
            <p className="text-[14px] leading-[30px] font-[400] text-[#4E545F] mt-[18px]">Once the design is finalized, developers write the code using programming languages and frameworks suited for the chosen platform, such as Swift for iOS or Java for Android.
                After coding, the app undergoes rigorous testing to identify and fix bugs, improve performance, and ensure compatibility across different devices and operating systems. Quality assurance is crucial in this phase to provide a seamless experience for users. Once the app passes testing, it is launched on platforms like the Apple App Store or Google Play Store, where users can download it. Post-launch, developers often gather user feedback to make improvements, release updates, and add new features, ensuring the app remains relevant and functional in a rapidly evolving technological landscape.
            </p>
        </div>

        <div className="mt-12 mb-6">
            <h3 className='text-[20px] leading-[30px] text-[#181A1E] font-semibold'>Contact</h3>
            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    {/* <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formateDate('05-13-2008')} - {formateDate('03-04-2010')}</span> */}
                    <span className="text-[#FEB60D] text-[15px] leading-6 font-semibold">+917400115591</span>
                    <p className='text-[16px] leading-6 font-medium text-[#4E545F]'>Mr. Shekhar</p>
                    <p className='text-[14px] leading-6 font-medium text-[#4E545F]'>opportuNet Staff</p>

                </li>

                <li className="p-4 rounded bg-[#fff9ea]">
                    {/* <span className="text-yellowColor text-[15px] leading-6 font-semibold">{formateDate('05-13-2008')} - {formateDate('03-04-2010')}</span> */}
                    <span className="text-[#FEB60D] text-[15px] leading-6 font-semibold">+918255745851</span>
                    <p className='text-[16px] leading-6 font-medium text-[#4E545F]'>Mr. Patil</p>
                    <p className='text-[14px] leading-6 font-medium text-[#4E545F]'>opportuNet Staff</p>
                </li>
            </ul>
        </div>
    </div>
}

export default CourseAbout