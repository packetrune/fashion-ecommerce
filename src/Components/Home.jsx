import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide container " style={{marginTop:'8%', zIndex:0}}>
            <div className="carousel-indicators" >
            <button type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" className='bg-dark' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" className='bg-dark' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" className='bg-dark' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" className='bg-dark' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" className='bg-dark' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
        
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="story-hero__image story-hero__image--absolute d-block w-100 slide-pc" src="https://is4.revolveassets.com/images/up/2023/September/092723_f_cccollection_01.jpg"  height="500px" alt="New Camila Coelho Collection. Fill your wardrobe with statement styles, unexpected detailing &amp; a signature flair of sexy from my new fall collection xo, Camila. Shop the Collection" srcSet="https://is4.revolveassets.com/images/up/2023/September/092723_f_cccollection_01.jpg 1x, https://is4.revolveassets.com/images/up/2023/September/092723_f_cccollection_01_2x.jpg 2x"/>
                </div>

                <div className="carousel-item ">
                    <img src="https://media.boohoo.com/i/boohooamplience/UK_Dresses_Coats_Desktop_1" alt="40% OFF Footwear  &amp; Coats*" className='d-block w-100 slide-pc'   height="500px" />
                </div>

                <div className="carousel-item ">
                    <img src="https://cdn-eu.dynamicyield.com/api/9877033/images/2134412568721__am-626-w28_aeo-sf2_d-hp-4.jpg" className='d-block w-100 slide-pc' alt="Make a Statement with our Stylish Summer Tees &amp; Tops!" height="500px"/>
                </div>
        
                <div className="carousel-item ">
                    <img data-srcset="//mitcha.com/cdn/shop/files/WR-HB2-EN---004.jpg?v=1694371908" alt="MITCHA" itemProp="logo" className="d-block w-100 slide-pc lazyautosizes lazyloaded" datasizes="auto" height="500px" srcSet="//mitcha.com/cdn/shop/files/WR-HB2-EN---004.jpg?v=1694371908"/> 
                </div>
        
                <div className="carousel-item">
                    <img data-srcset="//mitcha.com/cdn/shop/files/WS-HB2-EN---002.jpg?v=1694346068" alt="MITCHA" itemProp="logo" className="d-block w-100 slide-pc lazyautosizes lazyloaded" datasizes="auto" height="500px" srcSet="//mitcha.com/cdn/shop/files/WS-HB2-EN---002.jpg?v=1694346068"/>    
                </div>
        
                <div className="carousel-item">
                    <img alt="/eg-denim" className="d-block w-100 slide-pc lazyautosizes lazyloaded" src="https://f.nooncdn.com/mpcms/EN0003/assets/b75f0720-d470-4dec-92c8-bc7c1ca597db.png?format=avif"  height="500px"/>    
                </div>
            </div>

            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="visually-hidden ">Previous</span>
            </button>
        
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true"></span>
                <span className="visually-hidden ">Next</span>
            </button>
        </div>

        <div className='d-flex flex-wrap gap-4 justify-content-center mt-5'>
            <Link to={'/men'}>
            <h1 className='position-absolute text-light' style={{top:'127%', left:'19%'}}> Men </h1>
            <img src='https://images.asos-media.com/products/asos-design-oversized-satin-shirt-in-black/202576376-1-black?$n_640w$&wid=513&fit=constrain' width={'350px'}  className='border border-2 rounded-circle' height={'400px'} alt='Home image1'/>
            </Link>

            <Link to={'/women'}>
            <h1 className='position-absolute text-light' style={{top:'127%', left:'44%'}}> Women </h1>
            <img src='https://media.nastygal.com/i/nastygal/bgg20486_gun%20metal_xl?w=450&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit' width={'350px'}  className='border border-2 rounded-circle' height={'400px'} alt='Home image2'/>
            </Link>

            <Link to={'/kids'}>
            <h1 className='position-absolute text-light'  style={{top:'127%', left:'75%'}}> Kids </h1>
            <img src='https://eg.hm.com/assets/styles/HNM/16979221/761626be5e0233821946ca8e21d3fda2fb5b98ff/1/image-thumb__5039587__product_listing/761626be5e0233821946ca8e21d3fda2fb5b98ff.jpg' width={'350px'}  className='border border-2 rounded-circle' height={'400px'} alt='Home image3'/>
            </Link>
        </div>


        <div className='container'>
            <h4 className='text-center mt-5'> Pay Easily with: </h4>
            <div className="d-flex justify-content-center">
                <img width={'8%'}  alt="Visa Logo" data-src="https://www.dress-for-less.com/on/demandware.static/-/Library-Sites-ContentSharedLibrary/default/dw64dfaec5/images/paymentIcons/visa.svg" src="https://www.dress-for-less.com/on/demandware.static/-/Library-Sites-ContentSharedLibrary/default/dw64dfaec5/images/paymentIcons/visa.svg" data-was-processed="true"/>
                <img width={'8%'}  alt="Mastercard Logo" data-src="https://www.dress-for-less.com/on/demandware.static/-/Library-Sites-ContentSharedLibrary/default/dw41f68028/images/paymentIcons/mastercard.svg" src="https://www.dress-for-less.com/on/demandware.static/-/Library-Sites-ContentSharedLibrary/default/dw41f68028/images/paymentIcons/mastercard.svg" data-was-processed="true"/>
                <img  width={'8%'} alt="Paypal Logo" data-src="https://www.dress-for-less.com/on/demandware.static/-/Library-Sites-ContentSharedLibrary/default/dw7faa0c81/images/paymentIcons/paypal.svg" src="https://www.dress-for-less.com/on/demandware.static/-/Library-Sites-ContentSharedLibrary/default/dw7faa0c81/images/paymentIcons/paypal.svg" data-was-processed="true"/>
                <img width={'8%'} alt="Amazon Pay Logo" src="https://www.dress-for-less.com/on/demandware.static/-/Library-Sites-ContentSharedLibrary/default/dw314fa7cd/images/paymentIcons/amazonpay.svg"  data-was-processed="true"/>
            </div>
        </div>


        <section className='container'>
            <div className="row d-flex ">
                <div className="col-md-10 col-xl-8 ms-2 ">
                <h2 className="m-5 fs-1"  style={{textShadow: '3px 3px grey'}}> Testimonials </h2>
                </div>
            </div>

            <div className="row text-center">
                <div className="col-sm-4 mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                        className="rounded-circle shadow-1-strong" width="150" height="150" alt='review 1'/>
                    </div>

                    <h5 className="mb-3">Maria Smantha</h5>
                    <p className="px-xl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                        </svg>
                        <span style={{fontWeight:'bold', textDecoration:'underline'}}>  Great online shopping experience </span> <br />
                        Ordered t-shirts to make as presents for new grandparents. The shirts were amazing. Great quality and colors. The fit was true to size and shipping was super fast. Online ordering was a breeze. I will be using this company in the future for my business.
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-half" viewBox="0 0 16 16">
                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                    </svg>
                </div>

                <div className="col-sm-4 mb-5 mb-md-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                        className="rounded-circle shadow-1-strong" width="150" height="150" alt='review 2' />
                    </div>

                    <h5 className="mb-3">Lisa Cudrow</h5>
                    <p className="px-xl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                        </svg>
                        <span style={{fontWeight:'bold', textDecoration:'underline'}}>It was a good experience dealing with…</span> <br />
                        Great selection, reasonable prices and fast shipping. This is the best website I have found for stylish, comfortable and affordable basics plus the shipping is really fast. I would not hesitate to order from this company again.
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                </div>

                <div className="col-sm-4 mb-0">
                    <div className="d-flex justify-content-center mb-4">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                        className="rounded-circle shadow-1-strong" width="150" height="150" alt='review 3'/>
                    </div>

                    <h5 className="mb-3">John Smith</h5>
                    <p className="px-xl-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-quote" viewBox="0 0 16 16">
                            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                        </svg>
                        <span style={{fontWeight:'bold', textDecoration:'underline'}}>AMAZING PRODUCTS QUALITY & DESIGN! </span> <br />
                        T-shirts that are both affordable and comfortable are available. A wide range of styles, colours, and sizes are accessible. Shipping was quick, and the prices were reasonable. I've never had any issues, and shirts are always delivered on time..
                    </p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="yellow" className="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home;
