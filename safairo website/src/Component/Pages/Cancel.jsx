import React from 'react';
import { BiChevronRight } from "react-icons/bi";

function Cancel() {
    return (
        <div>
            <div className="inner-banner-area">
                <div className="container_custum">
                    <div className="row align-items-center">
                        <div className="col-lg-12 p-0">
                            <div className="inner-banner-contrnt">
                                <h2>Cancellation</h2>
                                <ul>
                                    <li>
                                        <a href="/">Home</a> <BiChevronRight />
                                    </li>

                                    <li>Cancellation</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container_custum">
      <div className="terms_condition">
      <h1 className="heading">Cancellation Policy</h1>

        <div className='content_policy'> 
        <h2>1. CANCELLATIONS</h2>
        <p>
          Customers may cancel their service booking anytime up to <span className="bold-text">12 hours </span> 
          before the scheduled service time <span className="bold-text">without any penalty</span>. If a
          cancellation is made <span className="bold-text">within 12 hours</span> of the scheduled service
          time, a cancellation <span className="bold-text">fee of Rs.100</span> may be applied.
        </p>

        <h2>2. REFUNDS</h2>
        <p>
  If a service is cancelled <span className="bold-text">up to 12 hours</span> before the scheduled
  service time, the customer will be eligible for a <span className="bold-text">full refund</span> of
  the amount paid. If a cancellation is made <span className="bold-text">within 12 hours</span> of the
  scheduled service time and a cancellation fee is applied, the refund will be the amount paid minus the cancellation fee.
</p>

<p>
  If the customer is requesting a <span className="bold-text">location change</span> after the
  scheduled service time, additional <span className="bold-text">fees will be applied</span>. Refunds
  will be processed to the <span className="bold-text">original mode of payment</span> within 
  <span className="bold-text">15 working days</span> (in some cases <span className="bold-text">24 working days</span>).
</p>

<p>
  If you’ve done all of this and still haven’t received your refund, please contact us at{" "}
  <a href="mailto:safairotechnologiespvtltd@gmail.com">safairotechnologiespvtltd@gmail.com</a>.
</p>

<h2>3. SERVICE QUALITY ISSUES</h2>

<p>
  If a customer is not satisfied with the <span className="bold-text">quality of service</span>
  provided, they must report the issue via <span className="bold-text">Safairo’s customer support
  line or email within 2 hours</span> of service completion. Each complaint
  will be investigated <span className="bold-text">on a case-by-case basis</span>. If a complaint is
  found to be valid, a <span className="bold-text">partial or full refund</span> may be issued at
  Safairo’s discretion.
</p>

        </div>
      </div>
    </div>
        </div>
    );
}

export default Cancel;
