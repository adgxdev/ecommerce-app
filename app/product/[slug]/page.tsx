import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/home/WhatsAppBtn";
import Navbar from "@/components/Navbar";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="bg-background-light text-[#100e1b] min-h-screen relative">
        <span className="hidden">{slug}</span>
        <Navbar />
        <main className="layout-container flex h-full grow flex-col">
            <div className="flex flex-1 justify-center py-5 sm:py-8">
                <div className="layout-content-container flex flex-col w-full max-w-6xl px-4">
                
                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 px-4 py-2">
                    <a className="text-[#5a4e97] hover:text-accent-purple text-sm font-medium leading-normal" href="#">
                    Home
                    </a>
                    <span className="text-[#5a4e97] text-sm font-medium leading-normal">/</span>
                    <a className="text-[#5a4e97] hover:text-accent-purple text-sm font-medium leading-normal" href="#">
                    Scripts
                    </a>
                    <span className="text-[#5a4e97] text-sm font-medium leading-normal">/</span>
                    <span className="text-[#100e1b] text-sm font-medium leading-normal">
                    Futuristic AI-Powered Script
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                    
                    {/* Left Column */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                    
                    {/* Heading */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex flex-col gap-2">
                        <h1 className="text-[#100e1b] text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                            Futuristic AI-Powered Script
                        </h1>
                        <p className="text-[#5a4e97] text-base font-normal leading-normal">
                            By{" "}
                            <a className="font-medium text-accent-purple hover:underline" href="#">
                            Creative Seller
                            </a>
                        </p>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="flex flex-col">
                        <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col shadow-lg"
                        style={{
                            backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_j6tUX32QBzqKfZkh97azG93uB_RfRt1EOmd1GVQIWv-ZcNwWPG_AUeSj-DKRxBtUTVqhwK_0UXt6uv5VS5hZ-1IdZmoKX6PZ4MF3WtIEfUJsl1FyLGMbJTTvPIbbyHVoMpXhmneeMiurfIdehe68KKMvQttaX1EUCQfDmFdP9peflXZ65xYg9vrofMCLisg-Q7dODkIlY1KiIkfd5ZM4y3NKjtm1m4dAoIyvfT_3KdG1623v1VZK_m2fA1cIM70S99_daKf2FOg")'
                        }}
                        />

                        <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mt-4">
                        <div className="flex items-stretch p-1 gap-3">

                            {/* Thumbnail 1 */}
                            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 cursor-pointer border-2 border-accent-purple">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-md flex flex-col"
                                style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWJAISkLGqmRLADD6nCVXBbHHO3TifSvS0eeGqRYk-i5sxCsjWpVkmXIvsehatctn1mvoYdgUJD-QFRvaoQGTg8ulUv-yxl7kXdyPeDtyj2w0gBzPww1Sp7QqsjRTQkCH1O3QJ0SFhPISgnpWvrm5DITXM-WgLexkFSHpritkE6RG7Aow3Z9eJU53_eaDNdtky8jxxrL9kVxZELLg0lvT78TVMLOf_wbJ8NWhGYDui9kXwD3J8c95zb2z2v3PeO1-KbLVuwjYPWEU")'
                                }}
                            />
                            </div>

                            {/* Thumbnail 2 */}
                            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-md flex flex-col"
                                style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQcI0-leMQJTT1IC7iIjnEcwdE2HPzaAJav0kwLoICuFKjgysmTDrZi0XwVzKBhP3MplYkO7_-UKxhcv5CU-K9zW8Rmb9RU3HVwChdWUzw8BXeZdjawJgoXtRb_niIWooleFJyQ2hAdPDbwf3Z8tncK54vxz8qUg7ATKnOdy6H3CeZmEbe1YEBbrjOavYCgKDHjb0H9w6v-_o8JGYIoGi-IPlpjRq0k3hFo5uviffMGWB7PcG65PF6nsJbsvWSr183KtFde-rLRmM")'
                                }}
                            />
                            </div>

                            {/* Thumbnail 3 */}
                            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-md flex flex-col"
                                style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAs8DD1DGLLHY-TpOx3wwKIq1OFejz3eA6DzS-X-4YxZAt3NLLiP-QZ9i42U14bLqEwHU_X4PCZNUO9Y-rRu-AGhIN7C0h6ojlosIeMLX6InUhrgp_NFg6FnuOSGo71M4U_Sf-uDDV-bTgjT1HZqtD0dV1cHLip_87a0ejZv-9y2U-kyvZ27PeE5Tr9abpj1wK40ZV1gex1UWrWs21zA7cloBWM2N_lTBdywZv8TeH6zTtCjb5almkIZ4j_A8AqslODNFVlLr_ZfP0")'
                                }}
                            />
                            </div>

                            {/* Thumbnail 4 */}
                            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                            <div
                                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-md flex flex-col"
                                style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcFoUC8AVM92yRYYLfdcf1ClOGqgQMWmTOh7DOCtGN5OZFxjVzRcttqwuoEnAiXQFBp5-iHBIPAvtsDC0lWKyMw_squExM-HqaIw1-V3UIkfaQXsJZeMQd65jSlyIRW5xoanNdTHN50xsLTQ-uChbtP3ZFHRjdbBesQtyk6GGk3n-HVlQlm3OBv-cE9JxvFLV6lIjee--o-xhKHJuL5sl5cr4zZuNvfQ3IS8vP53z1CeBAXVdjQRRZ8ngGuqlZO3BSk0vZVnPV4Mg")'
                                }}
                            />
                            </div>

                        </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mt-6">
                        <div className="border-b border-gray-200">
                        <nav aria-label="Tabs" className="-mb-px flex space-x-6">
                            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-accent-purple border-accent-purple" href="#">
                            Overview
                            </a>
                            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent" href="#">
                            Features
                            </a>
                            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent" href="#">
                            Live Demo
                            </a>
                            <a className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent" href="#">
                            Reviews
                            </a>
                        </nav>
                        </div>

                        <div className="py-6 prose prose-lg max-w-none text-[#5a4e97]">
                        <p>
                            Discover the power of our Futuristic AI-Powered Script, a revolutionary tool designed to automate
                            your workflows and boost productivity…
                        </p>
                        <p>
                            Whether you&apos;re a developer, marketer, or business owner… this script is your all-in-one solution…
                        </p>
                        </div>
                    </div>

                    {/* Rating Summary */}
                    <div className="bg-white/50 p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-4 text-[#100e1b]">Customer Reviews</h3>

                        {/* Rating Box */}
                        <div className="flex flex-wrap gap-x-8 gap-y-6">

                        <div className="flex flex-col gap-2">
                            <p className="text-[#100e1b] text-4xl font-black leading-tight tracking-[-0.033em]">
                            4.8
                            </p>
                            <div className="flex gap-0.5">
                            <span className="material-symbols-outlined text-accent-purple text-lg!" style={{ fontVariationSettings: "'FILL' 1" }}>
                                <Star className="h-3 w-3"/>
                            </span>
                            <span className="material-symbols-outlined text-accent-purple text-lg!" style={{ fontVariationSettings: "'FILL' 1" }}>
                                <Star className="h-3 w-3"/>
                            </span>
                            <span className="material-symbols-outlined text-accent-purple text-lg!" style={{ fontVariationSettings: "'FILL' 1" }}>
                                <Star className="h-3 w-3"/>
                            </span>
                            <span className="material-symbols-outlined text-accent-purple text-lg!" style={{ fontVariationSettings: "'FILL' 1" }}>
                                <Star className="h-3 w-3"/>
                            </span>
                            <span className="material-symbols-outlined text-accent-purple text-lg!" style={{ fontVariationSettings: "'FILL' 1" }}>
                                <StarHalf className="h-3 w-3"/>
                            </span>
                            </div>
                            <p className="text-[#100e1b] text-base font-normal leading-normal">
                            Based on 125 reviews
                            </p>
                        </div>

                        {/* Rating Bars */}
                        <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">

                            {[85, 10, 3, 2, 0].map((percent, i) => (
                            <>
                                <p className="text-[#100e1b] text-sm font-normal leading-normal">{5 - i}</p>
                                <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-[#d4d0e7]">
                                <div className="rounded-full bg-accent-purple" style={{ width: `${percent}%` }} />
                                </div>
                                <p className="text-[#5a4e97] text-sm font-normal leading-normal text-right">
                                {percent}%
                                </p>
                            </>
                            ))}

                        </div>
                        </div>
                    </div>

                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white/50 p-6 rounded-xl shadow-lg flex flex-col gap-6">
                        
                        <div className="flex justify-between items-baseline">
                        <h2 className="text-2xl font-bold text-[#100e1b]">Price</h2>
                        <p className="text-3xl font-black text-accent-purple">$49.00</p>
                        </div>

                        <div>
                        <label className="block text-sm font-medium text-gray-700">License</label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-accent-purple focus:border-accent-purple sm:text-sm rounded-md bg-transparent">
                            <option>Regular License</option>
                            <option>Extended License</option>
                        </select>
                        </div>

                        <div className="flex flex-col gap-3">
                        <button className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-linear-to-r from-accent-purple to-accent-blue text-white text-base font-bold shadow-md hover:shadow-lg">
                            Buy & Download
                        </button>
                        <button className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-transparent text-accent-purple text-base font-bold border-2 border-accent-purple hover:bg-accent-purple/10">
                            Customize for Me
                        </button>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                        <p className="text-sm font-medium text-gray-500 text-center">Secure payments with:</p>
                        <div className="flex justify-center items-center gap-4 mt-3">
                            <Image height={1000} width={1000} alt="img" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmSzq1FJFOJ7QiDcDgUtTDuTfPZhKNseW0q7PNTp6tGKdymuOgeUCPoNbrugVjzysgRg_c4SIHLNBRLN8-7HWhWvK2xNmaPFN2dva1lh1szvMW5svHLmohaq8K-Dz3fTjI_-hTOP6mCj1-AXHOvxZmGYG4kL3TcHASRGuHOo_qXOT-bvCjF0IvI_x34PzPFXsBxYBoBz4dqGG5Q8W-bFmboUmpjtNQuiDLFPI43PNy008THHlzOxSoZ2u05FF8RgPexDXl0rHCnzc" />
                            <Image height={1000} width={1000} alt="img" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWQjUMB2G7p3rqOD7vbIMMdUjAfIaQMOqKqoR1xmuWBMdmqynoPZS44tbcEROZzbzhcdf77V7Eo6gNcbMJirJanO8X9-B8Zz0zqf6h432av_yNAn0Hpv7eyz1RynJh_8BQOhMDvgyfT4Pf_beFcncBKpTfZpD8BMwSx_ktvXWjlAhC8zf7EHJw1eyZWeNtF_vGeg7JAYVrABYspHSHMEQzrmKAXoZo8a9rNoo17D-5nDp-YUnfPAfPzPYhWJr2htr_l8nIF9UGYPo" />
                            <Image height={1000} width={1000} alt="img" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNFksUTMj-llK9lBRZeILUdaLBcO1zkOqoY76_xdAJPhZb-He9kI1SZ_s50P04rCiXNDGTafvOxBWLpos8vQpKefd2bE6Krul3WIsJtBNny0MOLEHiOUPQbQVbkgvndBl0f0zKmQKtr64mZCCm4VKs-RuXDlnW0abb80rXg9_AdsmTqs3dZ-QkAlA6n0HS1BKKaBkY__0mVoc_vT2p4PeJO3b27gwvZl8xXGM7UJl7IK0AOuiOqPoRV_nN75jS4haUgT8oiWMGewE" />
                            <Image height={1000} width={1000} alt="img" className="h-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz1b3xxqDq9wpJT92WD6e59G0ZeACqSH3UUU_p0hqH_li2EL43Aq5j_s-d6GrlzXFPMBkWCmIfOyteYm6ayeGFkbmprrJGWQp3kRjaSESbDQu_Mblt9E1_LJpABeoK698yGzxDj2pWXABhKSiVjl744CMIR6XfbHtmdkvCIrJuUPIeChSnHXDvLzXvEdJBAazFd49EoitIxpcHdfGfY2ui-x66wX6kvYZyavhzyuETB8ZWi-z9j6-3o7nPQjwxBc4tQt5gWjyW3nE" />
                        </div>
                        </div>

                    </div>
                    </div>

                </div>
                </div>
            </div>
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="15551234567" message="Hi, I want to learn more!" />
    </div>
  );
}