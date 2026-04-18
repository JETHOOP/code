import React from 'react'

function LandingPage() {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className='textstructure mt-52 px-20'>
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return <div className='masker'>
                        <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-medium font-['Founders_Grotesk'-Cond SmBd]">
                            {item}
                        </h1>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-b00 mt-20 flex justify-between items-center py-5 px-20'>
                {["for PUblic and Private Companies", "From the first pitch to the IPO"
                ].map((item, index) => (
                <p className="text-md font-light tracking-tight leading-nonr">{item}</p>
            ))}
            <div className='start'>
                <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-s, capitalize rounded-full'>Start the project</div>
           <div className='w-3 h-3 rounded-full'></div>
           </div>
            </div>
        </div>
    )
}

export default LandingPage
