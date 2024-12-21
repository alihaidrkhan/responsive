export default function HeroSection (){
    return (

        
        <div className="grid md:grid-cols-2 p-10">
            
            {/* Send Column */}
            <div>
                    <img src="baldeagle.jpg" alt="Eagle" className="rounded-xl shadow-md hover:shadow-amber-700 sh w-full" />
            </div>
            
            {/* First Column */}
            <div className="pt-10 sm:pt-0 lg:pt-20">
                    <h1 className="font-sans text-center text-3xl md:text-4xl"><span className="text-amber-700">Si</span>berian Bald Eagle</h1>
                    
                    <p className="font-sans text-center text-lg pt-7 md:text-xl md:pt-16">This Bald <span className="text-amber-600">Eagle</span> Is Very Intresting, <br />3 Fit Long Height With Beutiful Face <br />& With Arrogant Eyes </p>
                    
                    <div className="flex justify-center pt-10 md:pt-16"><button className="bg-white text-black font-sans w-44 h-12 border-2 text-xl font-semibold rounded-lg hover:shadow-md hover:opacity-70 hover:border-amber-600">Buy Now</button></div>
            </div>

        </div>
    )
}