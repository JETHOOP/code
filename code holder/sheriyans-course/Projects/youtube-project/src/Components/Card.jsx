import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { PiDownloadSimpleBold } from "react-icons/pi";
import {motion} from 'framer-motion'

const Card = ({ data,reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag = {{scale:1.2}} className="relative h-62 w-50 bg-zinc-900/90 rounded-[35px] px-5 py-10    text-white overflow-hidden">
            <FaFileLines />
            <p className="mt-5 leading-tight font-semibold text-sm">{data.desc}</p>
            <div className="absolute bottom-0 left-0  w-full">
                <div className="flex justify-between items-center px-5 py-3 mb-3">
                    {data.filesize}
                    <div className="w-8 h-8 bg-zinc-600 flex items-center justify-center">
                        {data.close ? <IoClose /> : <PiDownloadSimpleBold size=".8em " color="#fff" />}

                    </div>
                </div>
                {data.tag.isOpen &&
                    <div className={`w-full py-4  flex items-center justify-center bg-green-700`}>
                        <h3 className="text-sm font-semibold  ">
                            {data.tag.tagTitle}
                        </h3>
                    </div>
                }
            </div>

        </motion.div>
    )
}

export default Card 