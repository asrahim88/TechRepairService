import React from 'react';
import './HeaderBody.css';

const HeaderBody = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex align-items-center">
                    <div>
                        <h2 className="mb-3 color">Professional <br /> Computer <br /> Repair Services
                        </h2>
                        <p className="md-3 color">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam modi sequi, nam alias rem suscipit incidunt illo molestiae aspernatur fugit nobis ex cum nulla, minus quod odio adipisci ducimus!
                        </p>
                        <button type="button" class="btn bg text-info active mb-2 width" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Get a Service</button>
                    </div>
                </div>
                <div className="col-md-8 d-flex justify-content-center">
                    <div className="header-img-box d-flex align-items-center pb-5 pt-3">
                        <img src="https://i.ibb.co/Rvf8JZV/People-are-working-on-the-project-Men-and-women-in-suits-sitting-at-the-table-Businessmen-use-a-lapt.jpg" class="img-fluid rounded" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;