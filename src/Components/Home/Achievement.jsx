

const Achievement = () => {
    return (
        <div className="my-14">
            <div className="text-center font-serif text-3xl">
                <h1>Our Achievement!!</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-14">
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../public/image/star.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Star Award!</h2>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../public/image/ascer.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Oscar Award!</h2>
                    </div>
                </div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="../../../public/image/success.avif" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">100% Success!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;