import React from 'react'
// import {} from 'react-bootstrap-v5'
import './Home.css'

const Home = () => {
  return (
    <div>
      <header className="site-header sticky-top py-1">
        <nav className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2" href="#" aria-label="Product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="d-block mx-auto"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx={12} cy={12} r={10} />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
          </a>
          {/* <a className="py-2 d-none d-md-inline-block" href="#">Tour</a> */}
          <a className="py-2 d-none d-md-inline-block" href="#">
            Product
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Features
          </a>
          {/* <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a> */}
          <a className="py-2 d-none d-md-inline-block" href="#">
            Support
          </a>
          <a className="py-2 d-none d-md-inline-block" href="#">
            Pricing
          </a>
          {/* <a className="py-2 d-none d-md-inline-block" href="#">Cart</a> */}
        </nav>
      </header>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Get you dream job.</h1>
            <p className="lead fw-normal">
              And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on
              Apple’s marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Apply Now
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block" />
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        </div>

<div className="container">
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-dark shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
          <div className="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
        </div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div
              className="bg-body shadow-sm mx-auto"
              style={{ width: '80%', height: 300, borderRadius: '21px 21px 0 0' }}
            />
          </div>
        </div>
      </div>
      </main>
      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="d-block mb-2"
              role="img"
              viewBox="0 0 24 24"
            >
              <title>Product</title>
              <circle cx={12} cy={12} r={10} />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
            <small className="d-block mb-3 text-muted">© 2017–2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Cool stuff
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Random feature
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Team feature
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Stuff for developers
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Another one
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Government
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="link-secondary" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="link-secondary" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
