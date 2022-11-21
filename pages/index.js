import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            BLACK FRIDAY 2022 SALE | 40 to 70% OFF (21 Nov To 20 Dec)
          </title>
          <meta
            name="description"
            content="We create headless websites using prismic, sanity and contentful that deliver a better experience for your team and unbeatable performance for your customers.   "
          />
          <meta
            property="og:title"
            content="BLACK FRIDAY 2022 SALE | 40 to 70% OFF (21 Nov To 20 Dec)"
          />
          <meta
            property="og:description"
            content="We create headless websites using prismic, sanity and contentful that deliver a better experience for your team and unbeatable performance for your customers.   "
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1e75fb7a-635b-4900-b4b4-cebb58862757/6a31a48d-32a9-4682-be15-5c0e86375b2e?org_if_sml=1"
          />
        </Head>
        <div className="home-hero">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHdlYiUyMGRlc2lnbnxlbnwwfHx8fDE2NjkwMTQ4ODI&amp;ixlib=rb-4.0.3&amp;w=1500"
            className="home-image"
          />
          <div className="home-container1">
            <h1 className="home-text">BLACK FRIDAY 2022 </h1>
            <h2 className="home-text01">40 to 70% OFF (21 Nov To 20 Dec)</h2>
            <div className="home-btn-group">
              <a
                href="https://forms.office.com/r/TKAAV4MbeS"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button"
              >
                BOOK NOW
              </a>
            </div>
            <span className="home-text02">
              <span className="home-text03">
                We create headless websites using prismic, sanity and contentful
                that deliver a better experience for your team and unbeatable
                performance for your customers.   
              </span>
              <br className="home-text04"></br>
              <br className="home-text05"></br>
              <span className="home-text06">
                Modern Websites and Apps Using Technology:
              </span>
              <br className="home-text07"></br>
              <span className="home-text08">React</span>
              <br className="home-text09"></br>
              <span className="home-text10">Next.js</span>
              <br className="home-text11"></br>
              <span className="home-text12">Tailwind Css</span>
              <br className="home-text13"></br>
              <span className="home-text14">Headless CMS</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 25rem;
            object-fit: cover;
          }
          .home-container1 {
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text {
            font-size: 3rem;
          }
          .home-text01 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: var(--dl-color-gray-black);
          }
          .home-link:hover {
            transform: scale(1.02);
          }
          .home-text02 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
          }
          .home-text08 {
            color: var(--dl-color-gray-black);
            font-family: Comic Sans MS;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .home-text09 {
            color: var(--dl-color-gray-black);
            font-family: Comic Sans MS;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .home-text10 {
            color: var(--dl-color-gray-black);
            font-family: Comic Sans MS;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .home-text11 {
            color: var(--dl-color-gray-black);
            font-family: Comic Sans MS;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .home-text12 {
            color: var(--dl-color-gray-black);
            font-family: Comic Sans MS;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .home-text13 {
            color: var(--dl-color-gray-black);
            font-family: Comic Sans MS;
            text-transform: uppercase;
            text-decoration: underline;
          }
          .home-text14 {
            color: var(--dl-color-gray-black);
            font-family: Comic Sans MS;
            text-transform: uppercase;
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .home-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-image {
              order: 2;
            }
            .home-container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
            }
            .home-text02 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text03 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text04 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text05 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text06 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text07 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text08 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text09 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text10 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text11 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text12 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text13 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
            .home-text14 {
              text-align: center;
              padding-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-text02 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text03 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text04 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text05 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text06 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text07 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text08 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text09 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text10 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text11 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text12 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text13 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text14 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
