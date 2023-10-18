import { Card } from '@/components/card'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon, EnvelopeClosedIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export default function () {
    return (
        <div className='antialiased'>
            <main className="flex flex-col overflow-hidden">

                <div className="px-7 md:px-16 lg:px-24 relative pt-12 flex items-start gap-5">
                    <Button size={'icon'} variant={'secondary'} asChild>
                        <Link href={'/'}>
                            <ArrowLeftIcon />
                        </Link>
                    </Button>
                    <h2 className="text-4xl font-bold">Reach Me</h2>
                </div>

                <div className="px-7 md:px16 lg:px-24 relative pt-16">
                    <div className="grid md:grid-cols-3 gap-10">
                        <Link href={'https://github.com/maru-yasa'} target='_blank'>
                            <div>
                                <Card>
                                    <div className="p-4 md:p-8">
                                        <div className="flex flex-col items-center justify-center space-y-7">
                                            <img src="/assets/github-mark-white.svg" alt="" />
                                            <h3 className='font-bold text-3xl'>See all of my project on my GitHub</h3>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                        <Link href={'https://www.linkedin.com/in/marufilyasa/'} target='_blank'>
                            <div>
                                <Card>
                                    <div className="p-4 md:p-8">
                                        <div className="flex flex-col items-center justify-center space-y-7">
                                            <LinkedInLogoIcon width={98} height={98} />
                                            <h3 className='font-bold text-3xl'>Reach me through LinkedIn</h3>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                        <Link href={'mailto:marufilyasa13@gmail.com'} target='_blank'>
                            <div>
                                <Card>
                                    <div className="p-4 md:p-8">
                                        <div className="flex flex-col items-center justify-center space-y-7">
                                            <EnvelopeClosedIcon width={98} height={98} />
                                            <h3 className='font-bold text-3xl'>Reach me through Email</h3>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                    </div>
                </div>

                

            </main>
        </div>
    )
}
