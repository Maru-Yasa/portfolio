"use client"
import { Card } from '@/components/card';
import { CardProject } from '@/components/card-project'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion'

export default function () {

    const projects = [
        {
            project: {
                date: new Date().toString(),
                title: "Vidya Learn",
                description: "Ai generated akjshdja dhajhds hasd kahdkj hakjdh kajshdkjashdaskjdhaskjdhahdkj hajsd kahdkjashdkj ahdkjhasdkjh aksjdhkajdhkjakd",
                slug: "vidya-learn"
            },
            views: 39000
        },
        {
            project: {
                date: new Date().toString(),
                title: "Vidya Learn",
                description: "Ai generated",
                slug: "vidya-learn"
            },
            views: 39000
        },
        {
            project: {
                date: new Date().toString(),
                title: "Vidya Learn",
                description: "Ai generated",
                slug: "vidya-learn"
            },
            views: 39000
        },
        {
            project: {
                date: new Date().toString(),
                title: "Vidya Learn",
                description: "Ai generated",
                slug: "vidya-learn"
            },
            views: 39000
        },
    ];

    return (
        <div className='antialiased'>
            <Navbar />
            <main className="flex flex-col min-h-screen overflow-hidden">

                <div className="px-7 md:px-16 lg:px-24 relative pt-24 flex flex-col items-start">
                    <h2 className="text-4xl font-bold">Projects</h2>
                    <h4>My recent projects</h4>
                </div>

                <div className="px-7 md:px16 lg:px-24 relative pt-8">
                    <div className="grid md:grid-cols-3 grid-cols-1 direction-reverse w-full gap-5">
                        <div className="col-span-2 md:columns-2 columns-1 space-y-5">
                            {projects.map((d, index) => {
                                return (
                                    <Card key={index}>
                                        <CardProject project={d.project} views={d.views} />
                                    </Card>
                                )
                            })}
                        </div>
                        <div className="col-span-1">
                            <Link href={'https://github.com/maru-yasa'}>
                                <motion.div whileHover={{

                                }}>
                                    <Card>
                                        <div className="p-4 md:p-8">
                                            <div className="flex flex-col items-center justify-center space-y-7">
                                                <img src="/assets/github-mark-white.svg" alt="" />
                                                <h3 className='font-bold text-3xl'>See all of my project on my GitHub</h3>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}
