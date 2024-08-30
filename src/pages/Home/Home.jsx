import { Helmet } from 'react-helmet';
import Features from './components/landing/Features';
import TestCard from './components/landing/TestCard';
import More from './components/landing/More';
import { TrustpilotWidget } from './components/landing/Trustpilot';
import { Hero } from './components/landing/Hero';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ideax | Welcome to ideax platform</title>
      </Helmet>
      <Hero />
      <Features />
      <TestCard text="If you're uncertain about an idea brewing in your mind, this is the right place to test it." />
      <More />
      <div className="note">
        <div className="container">
          <h2>
            Building a company is now simplified with ideax. Our platform streamlines the process, <span>making it accessible and straightforward</span>, so you can focus on realizing your entrepreneurial dreams efficiently and effectively.
          </h2>
        </div>
      </div>
      <TestCard text="Begin exploration – Dive into your idea's potential with just one click!" />
      <TrustpilotWidget />
    </>
  );
}
