

const Banner = () => {
    return (
        <div className="mt-16">
            <div className="hero bg-base-200">
                <img className="w-full" src="/image/photo-1523050854058-8df90110c9f1.jpg" alt="" />
                <div className="hero-content text-center bg-[#e2dcdc] bg-opacity-60">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Admission going on</h1>
                        <p className="py-6">Choose the college of your choice and apply</p>
                        <button className="btn btn-warning">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;