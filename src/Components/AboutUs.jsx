import React from 'react';

const AboutUs = (props) => {
    return (
        <div style={{marginTop:'10%'}} className='container'> 
            <div className="row  bg-body-tertiary">
                <div className="col-6 p-5">
                    <h4> OUR STORY </h4>
                    <p> FashionNova is the leading online shopping platform, bringing a new culture of fashion to Egypt. Launched in 2018, FashionNova was founded by Hilda Louca with the vision to unite and promote all Egyptian designers, and revive the culture of fashion in Egypt. Now home to over 300 Egyptian designers and brands, FashionNova is the largest hub of its kind to designers in Egypt.</p>
                </div>

                <div className="col-6"> 
                    <img src='https://mitcha.com/cdn/shop/files/105283442_282009073000282_229686674336559048_n_800x800.jpg?v=1615385551' alt=""  width={'90%'} height={'290px'} style={{marginLeft:'12%'}}/>
                </div>
            </div>

            <div className="row bg-body-tertiary mt-5">
                <div className="col-6">
                    <img src="https://mitcha.com/cdn/shop/files/106378497_604261120215772_3301520767757107081_n_800x800.jpg?v=1615385866" alt="" width={'90%'} height={'370px'} />
                </div>

                <div className="col-6 p-5">
                    <h4> OUR DREAM </h4>
                    <p> FashionNova's extended mission is to showcase the country's top design talents in a well-curated digital platform of international standards. All the platform's resources are directed in helping the local designers flourish locally and internationally through providing them with all the latest digital tools to guarantee ultimate reach, in addition to business development support for their business aiming to become the number one online destination for Egyptian and Regional designers to retail their products worldwide.</p>
                </div>
            </div>

            <div className="row  bg-body-tertiary mt-5">
                <div className="col-6 p-5">
                    <h4> OUR APPROACH </h4>
                    <p> FashionNova promises personal service through dedicated customer care, hassle-free shipping in exclusive signature packaging, flexible returns, and a fully-secured online platform. Pieces are carefully curated and ongoing quality and authenticity checks to be featured on the platform. In addition, most products are styled and offered with its extended family by our certified and professional stylist.Are you an Egyptian Designer and looking for growing your brand? Grow with us and send an email on: Designers@FashionNova.com (one of our Commercial team members will contact you).</p>
                </div>

                <div className="col-6"> 
                    <img src='https://mitcha.com/cdn/shop/files/110264104_153336716329056_4010614841099494917_n_800x800.jpg?v=1615386367' alt=""  width={'90%'} height={'390px'} style={{marginLeft:'12%'}}/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;